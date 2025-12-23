'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { useDashboardStore } from '@/lib/store'
import { Check, ChevronDown, ChevronRight } from 'lucide-react'

// Define the geography hierarchy
const GEOGRAPHY_HIERARCHY: Record<string, string[]> = {
  'Europe': ['Germany', 'Italy', 'UK', 'Rest of Europe'],
  'Asia': ['Japan', 'South Korea', 'China', 'Rest of Asia']
}

// Root level geographies (no parent)
const ROOT_GEOGRAPHIES = ['Global', 'United States', 'Europe', 'Asia']

export function GeographyMultiSelect() {
  const { data, filters, updateFilters } = useDashboardStore()
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedRegions, setExpandedRegions] = useState<Set<string>>(new Set(['Europe', 'Asia']))
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Build hierarchical geography structure from data
  const geographyStructure = useMemo(() => {
    if (!data || !data.dimensions?.geographies) return { roots: [], hierarchy: {} }

    const allGeographies = data.dimensions.geographies.all_geographies || []

    // Find which root geographies exist in the data
    const availableRoots = ROOT_GEOGRAPHIES.filter(root => allGeographies.includes(root))

    // Build available hierarchy based on what's in data
    const availableHierarchy: Record<string, string[]> = {}
    for (const [parent, children] of Object.entries(GEOGRAPHY_HIERARCHY)) {
      if (allGeographies.includes(parent)) {
        availableHierarchy[parent] = children.filter(child => allGeographies.includes(child))
      }
    }

    return { roots: availableRoots, hierarchy: availableHierarchy }
  }, [data])

  // Filter geographies based on search term
  const filteredStructure = useMemo(() => {
    if (!searchTerm) {
      return geographyStructure
    }

    const search = searchTerm.toLowerCase()
    const matchingRoots: string[] = []
    const matchingHierarchy: Record<string, string[]> = {}

    for (const root of geographyStructure.roots) {
      const rootMatches = root.toLowerCase().includes(search)
      const children = geographyStructure.hierarchy[root] || []
      const matchingChildren = children.filter(child =>
        child.toLowerCase().includes(search)
      )

      if (rootMatches || matchingChildren.length > 0) {
        matchingRoots.push(root)
        if (children.length > 0) {
          matchingHierarchy[root] = rootMatches ? children : matchingChildren
        }
      }
    }

    return { roots: matchingRoots, hierarchy: matchingHierarchy }
  }, [geographyStructure, searchTerm])

  const toggleRegionExpand = (region: string) => {
    const newExpanded = new Set(expandedRegions)
    if (newExpanded.has(region)) {
      newExpanded.delete(region)
    } else {
      newExpanded.add(region)
    }
    setExpandedRegions(newExpanded)
  }

  const handleToggle = (geography: string) => {
    const current = filters.geographies
    const updated = current.includes(geography)
      ? current.filter(g => g !== geography)
      : [...current, geography]

    updateFilters({ geographies: updated })
  }

  const handleToggleWithChildren = (parent: string) => {
    const current = filters.geographies
    const children = geographyStructure.hierarchy[parent] || []
    const allItems = [parent, ...children]

    // Check if all items are currently selected
    const allSelected = allItems.every(item => current.includes(item))

    if (allSelected) {
      // Deselect all
      updateFilters({
        geographies: current.filter(g => !allItems.includes(g))
      })
    } else {
      // Select all
      const newSelection = [...new Set([...current, ...allItems])]
      updateFilters({ geographies: newSelection })
    }
  }

  const handleSelectAll = () => {
    if (!data) return
    updateFilters({
      geographies: data.dimensions.geographies.all_geographies
    })
  }

  const handleClearAll = () => {
    updateFilters({ geographies: [] })
  }

  const isParentPartiallySelected = (parent: string) => {
    const children = geographyStructure.hierarchy[parent] || []
    if (children.length === 0) return false

    const selectedChildren = children.filter(child => filters.geographies.includes(child))
    return selectedChildren.length > 0 && selectedChildren.length < children.length
  }

  if (!data) return null

  const selectedCount = filters.geographies.length

  return (
    <div className="relative" ref={dropdownRef}>

      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
      >
        <span className="text-sm text-black">
          {selectedCount === 0
            ? 'Select geographies...'
            : `${selectedCount} selected`}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-96 overflow-hidden">
          {/* Search */}
          <div className="p-3 border-b">
            <input
              type="text"
              placeholder="Search geographies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="px-3 py-2 bg-gray-50 border-b flex gap-2">
            <button
              onClick={handleSelectAll}
              className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
            >
              Select All
            </button>
            <button
              onClick={handleClearAll}
              className="px-3 py-1 text-xs bg-gray-100 text-black rounded hover:bg-gray-200"
            >
              Clear All
            </button>
          </div>

          {/* Geography List - Hierarchical display */}
          <div className="overflow-y-auto max-h-64">
            {filteredStructure.roots.length === 0 ? (
              <div className="px-3 py-4 text-sm text-black text-center">
                {searchTerm ? 'No geographies found matching your search' : 'No geographies available'}
              </div>
            ) : (
              filteredStructure.roots.map((geography, index) => {
                const children = filteredStructure.hierarchy[geography] || []
                const hasChildren = children.length > 0
                const isExpanded = expandedRegions.has(geography)
                const isSelected = filters.geographies.includes(geography)
                const isPartiallySelected = isParentPartiallySelected(geography)

                return (
                  <div key={geography}>
                    {/* Parent Geography */}
                    <div
                      className={`flex items-center px-3 py-2 hover:bg-blue-50 ${
                        index > 0 ? 'border-t border-gray-100' : ''
                      }`}
                    >
                      {/* Expand/Collapse button for parents with children */}
                      {hasChildren ? (
                        <button
                          onClick={() => toggleRegionExpand(geography)}
                          className="mr-2 p-0.5 hover:bg-gray-200 rounded"
                        >
                          <ChevronRight
                            className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                          />
                        </button>
                      ) : (
                        <span className="w-5 mr-2" />
                      )}

                      <label className="flex items-center flex-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          ref={input => {
                            if (input) {
                              input.indeterminate = isPartiallySelected && !isSelected
                            }
                          }}
                          onChange={() => hasChildren ? handleToggleWithChildren(geography) : handleToggle(geography)}
                          className="mr-3 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-black font-medium flex-1">{geography}</span>
                        {isSelected && (
                          <Check className="h-4 w-4 text-blue-600" />
                        )}
                      </label>
                    </div>

                    {/* Child Geographies */}
                    {hasChildren && isExpanded && (
                      <div className="bg-gray-50">
                        {children.map((child) => (
                          <label
                            key={child}
                            className="flex items-center pl-12 pr-3 py-2 hover:bg-blue-50 cursor-pointer border-t border-gray-100"
                          >
                            <input
                              type="checkbox"
                              checked={filters.geographies.includes(child)}
                              onChange={() => handleToggle(child)}
                              className="mr-3 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-sm text-black flex-1">{child}</span>
                            {filters.geographies.includes(child) && (
                              <Check className="h-4 w-4 text-blue-600" />
                            )}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })
            )}
          </div>
        </div>
      )}

      {/* Selected Count Badge */}
      {selectedCount > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="text-xs text-black">
            {selectedCount} {selectedCount === 1 ? 'geography' : 'geographies'} selected
          </span>
        </div>
      )}
    </div>
  )
}
