'use client'

interface CustomerData {
  sNo: number
  // Customer Type & Operating Context
  companyName: string
  customerType: string // Converter / Finishing House / Job Shop / In-house Converting
  keyMaterialsProcessed: string
  typicalSlittingStageUsage: string // Primary / Secondary / Finishing
  // Razor Blade Usage Profile
  precisionRequirement: string // Standard / High / Ultra-high
  lineSpeedDutyCycleIntensity: string
  bladeConsumptionLevel: string // High / Medium / Low
  // Buying & Decision Structure
  keyBuyingFunctions: string // Plant / Procurement / Quality / Operations
  specificationOwnerFinalDecisionAuthority: string
  // Buying Triggers & Supplier Evaluation
  primaryBuyingTriggers: string // Uptime, Scrap, Cut Quality, Safety
  keyEvaluationCriteria: string // Performance vs Cost
  switchingWillingness: string // Low / Medium / High
  // Procurement & Channel Preference
  typicalOrderingPattern: string // Frequency & Volume
  preferredSupplyChannel: string // OEM, Direct Manufacturer, Distributor / Dealer
  regionalOrApplicationSpecificChannelBias: string
  // Supplier Landscape & Account Potential
  currentPreferredBladeSuppliers: string
  vendorConsolidationStatus: string
  accountAttractiveness: string // High / Medium / Low
  icpFit: string // Yes / Partial / No
  // Contact Details
  keyContactPerson: string
  designation: string
  emailId: string
  contactNo: string
}

// Sample data for demonstration
const sampleCustomerData: CustomerData[] = [
  {
    sNo: 1,
    companyName: 'Saudi Aramco - Ras Tanura Refinery',
    customerType: 'Converter',
    keyMaterialsProcessed: 'BOPP, PET Films',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'High',
    lineSpeedDutyCycleIntensity: 'High speed, continuous',
    bladeConsumptionLevel: 'High',
    keyBuyingFunctions: 'Plant, Procurement',
    specificationOwnerFinalDecisionAuthority: 'Technical Manager',
    primaryBuyingTriggers: 'Uptime, Scrap',
    keyEvaluationCriteria: 'Performance',
    switchingWillingness: 'Low',
    typicalOrderingPattern: 'Monthly, High Volume',
    preferredSupplyChannel: 'Direct Manufacturer',
    regionalOrApplicationSpecificChannelBias: 'Regional preference',
    currentPreferredBladeSuppliers: 'Supplier A, Supplier B',
    vendorConsolidationStatus: 'Consolidating',
    accountAttractiveness: 'High',
    icpFit: 'Yes',
    keyContactPerson: 'Ahmed Al-Rashid',
    designation: 'Maintenance Director',
    emailId: 'a.rashid@aramco.com',
    contactNo: '+966 13 877 0000'
  },
  {
    sNo: 2,
    companyName: 'ADNOC Refining - Ruwais',
    customerType: 'Finishing House',
    keyMaterialsProcessed: 'Aluminum Foil, Paper',
    typicalSlittingStageUsage: 'Secondary',
    precisionRequirement: 'Ultra-high',
    lineSpeedDutyCycleIntensity: 'Medium speed, intermittent',
    bladeConsumptionLevel: 'Medium',
    keyBuyingFunctions: 'Quality, Operations',
    specificationOwnerFinalDecisionAuthority: 'Plant Manager',
    primaryBuyingTriggers: 'Cut Quality, Safety',
    keyEvaluationCriteria: 'Cost',
    switchingWillingness: 'Medium',
    typicalOrderingPattern: 'Quarterly, Medium Volume',
    preferredSupplyChannel: 'OEM',
    regionalOrApplicationSpecificChannelBias: 'Application-specific',
    currentPreferredBladeSuppliers: 'Supplier C',
    vendorConsolidationStatus: 'Diversifying',
    accountAttractiveness: 'High',
    icpFit: 'Yes',
    keyContactPerson: 'Fatima Al-Mansouri',
    designation: 'Plant O&M Manager',
    emailId: 'f.mansouri@adnoc.ae',
    contactNo: '+971 2 602 0000'
  },
  {
    sNo: 3,
    companyName: 'Qatar Petroleum - Mesaieed Industrial',
    customerType: 'Converter',
    keyMaterialsProcessed: 'Polyester, Nylon Films',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'High',
    lineSpeedDutyCycleIntensity: 'High speed, continuous',
    bladeConsumptionLevel: 'High',
    keyBuyingFunctions: 'Procurement, Quality',
    specificationOwnerFinalDecisionAuthority: 'Operations Manager',
    primaryBuyingTriggers: 'Uptime, Cut Quality',
    keyEvaluationCriteria: 'Performance',
    switchingWillingness: 'Low',
    typicalOrderingPattern: 'Bi-weekly, High Volume',
    preferredSupplyChannel: 'Distributor / Dealer',
    regionalOrApplicationSpecificChannelBias: 'Regional preference',
    currentPreferredBladeSuppliers: 'Supplier A, Supplier D',
    vendorConsolidationStatus: 'Consolidating',
    accountAttractiveness: 'High',
    icpFit: 'Yes',
    keyContactPerson: 'Mohammed Al-Thani',
    designation: 'Operations Manager',
    emailId: 'm.thani@qatarenergy.qa',
    contactNo: '+974 4013 3333'
  },
  {
    sNo: 4,
    companyName: 'Kuwait National Petroleum Company',
    customerType: 'Finishing House',
    keyMaterialsProcessed: 'Coated Papers, Labels',
    typicalSlittingStageUsage: 'Finishing',
    precisionRequirement: 'Standard',
    lineSpeedDutyCycleIntensity: 'Low speed, batch',
    bladeConsumptionLevel: 'Low',
    keyBuyingFunctions: 'Plant, Operations',
    specificationOwnerFinalDecisionAuthority: 'Reliability Manager',
    primaryBuyingTriggers: 'Safety, Scrap',
    keyEvaluationCriteria: 'Cost',
    switchingWillingness: 'High',
    typicalOrderingPattern: 'Monthly, Low Volume',
    preferredSupplyChannel: 'Direct Manufacturer',
    regionalOrApplicationSpecificChannelBias: 'No specific bias',
    currentPreferredBladeSuppliers: 'Supplier B',
    vendorConsolidationStatus: 'Stable',
    accountAttractiveness: 'Medium',
    icpFit: 'Partial',
    keyContactPerson: 'Khalid Al-Sabah',
    designation: 'Reliability & Risk Manager',
    emailId: 'k.sabah@knpc.com.kw',
    contactNo: '+965 2326 5000'
  },
  {
    sNo: 5,
    companyName: 'DUBAL Power Plant',
    customerType: 'Converter',
    keyMaterialsProcessed: 'Metal Foils, Copper',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'Ultra-high',
    lineSpeedDutyCycleIntensity: 'High speed, continuous',
    bladeConsumptionLevel: 'High',
    keyBuyingFunctions: 'Quality, Procurement',
    specificationOwnerFinalDecisionAuthority: 'Asset Director',
    primaryBuyingTriggers: 'Cut Quality, Uptime',
    keyEvaluationCriteria: 'Performance',
    switchingWillingness: 'Low',
    typicalOrderingPattern: 'Weekly, High Volume',
    preferredSupplyChannel: 'Direct Manufacturer',
    regionalOrApplicationSpecificChannelBias: 'Application-specific',
    currentPreferredBladeSuppliers: 'Supplier A',
    vendorConsolidationStatus: 'Consolidating',
    accountAttractiveness: 'High',
    icpFit: 'Yes',
    keyContactPerson: 'Sara Al-Hashemi',
    designation: 'Asset Management Director',
    emailId: 's.hashemi@ega.ae',
    contactNo: '+971 4 802 9999'
  },
  {
    sNo: 6,
    companyName: 'Oman LNG - Qalhat',
    customerType: 'Finishing House',
    keyMaterialsProcessed: 'Flexible Packaging',
    typicalSlittingStageUsage: 'Secondary',
    precisionRequirement: 'High',
    lineSpeedDutyCycleIntensity: 'Medium speed, intermittent',
    bladeConsumptionLevel: 'Medium',
    keyBuyingFunctions: 'Operations, Plant',
    specificationOwnerFinalDecisionAuthority: 'Technical Director',
    primaryBuyingTriggers: 'Safety, Cut Quality',
    keyEvaluationCriteria: 'Cost',
    switchingWillingness: 'Medium',
    typicalOrderingPattern: 'Monthly, Medium Volume',
    preferredSupplyChannel: 'Distributor / Dealer',
    regionalOrApplicationSpecificChannelBias: 'Regional preference',
    currentPreferredBladeSuppliers: 'Supplier C, Supplier E',
    vendorConsolidationStatus: 'Diversifying',
    accountAttractiveness: 'Medium',
    icpFit: 'Partial',
    keyContactPerson: 'Yusuf Al-Balushi',
    designation: 'Technical Director',
    emailId: 'y.balushi@omanlng.com',
    contactNo: '+968 2520 6000'
  },
  {
    sNo: 7,
    companyName: 'Bahrain Petroleum Company (BAPCO)',
    customerType: 'Converter',
    keyMaterialsProcessed: 'BOPP, CPP Films',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'High',
    lineSpeedDutyCycleIntensity: 'High speed, continuous',
    bladeConsumptionLevel: 'High',
    keyBuyingFunctions: 'Plant, Quality',
    specificationOwnerFinalDecisionAuthority: 'Plant Manager',
    primaryBuyingTriggers: 'Uptime, Cut Quality',
    keyEvaluationCriteria: 'Performance',
    switchingWillingness: 'Low',
    typicalOrderingPattern: 'Bi-weekly, High Volume',
    preferredSupplyChannel: 'Direct Manufacturer',
    regionalOrApplicationSpecificChannelBias: 'No specific bias',
    currentPreferredBladeSuppliers: 'Supplier A, Supplier B',
    vendorConsolidationStatus: 'Consolidating',
    accountAttractiveness: 'High',
    icpFit: 'Yes',
    keyContactPerson: 'Hassan Al-Khalifa',
    designation: 'Plant Manager',
    emailId: 'h.khalifa@bapco.net',
    contactNo: '+973 1775 5555'
  },
  {
    sNo: 8,
    companyName: 'Emirates Steel Industries',
    customerType: 'Job Shop',
    keyMaterialsProcessed: 'Steel Coils, Metal Sheets',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'Standard',
    lineSpeedDutyCycleIntensity: 'Medium speed, batch',
    bladeConsumptionLevel: 'Medium',
    keyBuyingFunctions: 'Procurement, Operations',
    specificationOwnerFinalDecisionAuthority: 'Procurement Head',
    primaryBuyingTriggers: 'Safety, Scrap',
    keyEvaluationCriteria: 'Cost',
    switchingWillingness: 'High',
    typicalOrderingPattern: 'Monthly, Medium Volume',
    preferredSupplyChannel: 'OEM',
    regionalOrApplicationSpecificChannelBias: 'Application-specific',
    currentPreferredBladeSuppliers: 'Supplier D',
    vendorConsolidationStatus: 'Stable',
    accountAttractiveness: 'Medium',
    icpFit: 'Partial',
    keyContactPerson: 'Rashid Al-Nuaimi',
    designation: 'Procurement Head',
    emailId: 'r.nuaimi@emiratessteel.com',
    contactNo: '+971 2 509 3000'
  },
  {
    sNo: 9,
    companyName: 'SABIC - Jubail Complex',
    customerType: 'Converter',
    keyMaterialsProcessed: 'PE, PP Films',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'Ultra-high',
    lineSpeedDutyCycleIntensity: 'High speed, continuous',
    bladeConsumptionLevel: 'High',
    keyBuyingFunctions: 'Quality, Plant',
    specificationOwnerFinalDecisionAuthority: 'Technical Manager',
    primaryBuyingTriggers: 'Scrap, Uptime',
    keyEvaluationCriteria: 'Performance',
    switchingWillingness: 'Low',
    typicalOrderingPattern: 'Weekly, High Volume',
    preferredSupplyChannel: 'Direct Manufacturer',
    regionalOrApplicationSpecificChannelBias: 'Regional preference',
    currentPreferredBladeSuppliers: 'Supplier A',
    vendorConsolidationStatus: 'Consolidating',
    accountAttractiveness: 'High',
    icpFit: 'Yes',
    keyContactPerson: 'Abdullah Al-Ghamdi',
    designation: 'Technical Manager',
    emailId: 'a.ghamdi@sabic.com',
    contactNo: '+966 13 359 0000'
  },
  {
    sNo: 10,
    companyName: 'Ma\'aden Aluminium',
    customerType: 'Finishing House',
    keyMaterialsProcessed: 'Aluminum Sheets, Foils',
    typicalSlittingStageUsage: 'Secondary',
    precisionRequirement: 'High',
    lineSpeedDutyCycleIntensity: 'Medium speed, intermittent',
    bladeConsumptionLevel: 'Medium',
    keyBuyingFunctions: 'Operations, Procurement',
    specificationOwnerFinalDecisionAuthority: 'Operations Director',
    primaryBuyingTriggers: 'Cut Quality, Safety',
    keyEvaluationCriteria: 'Cost',
    switchingWillingness: 'Medium',
    typicalOrderingPattern: 'Quarterly, Medium Volume',
    preferredSupplyChannel: 'Distributor / Dealer',
    regionalOrApplicationSpecificChannelBias: 'No specific bias',
    currentPreferredBladeSuppliers: 'Supplier B, Supplier C',
    vendorConsolidationStatus: 'Diversifying',
    accountAttractiveness: 'Medium',
    icpFit: 'Yes',
    keyContactPerson: 'Faisal Al-Harbi',
    designation: 'Operations Director',
    emailId: 'f.harbi@maaden.com.sa',
    contactNo: '+966 11 874 8000'
  },
  {
    sNo: 11,
    companyName: 'Abu Dhabi National Oil Company',
    customerType: 'In-house Converting',
    keyMaterialsProcessed: 'Technical Films, Laminates',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'High',
    lineSpeedDutyCycleIntensity: 'High speed, continuous',
    bladeConsumptionLevel: 'High',
    keyBuyingFunctions: 'Plant, Quality',
    specificationOwnerFinalDecisionAuthority: 'Senior Engineer',
    primaryBuyingTriggers: 'Uptime, Cut Quality',
    keyEvaluationCriteria: 'Performance',
    switchingWillingness: 'Low',
    typicalOrderingPattern: 'Monthly, High Volume',
    preferredSupplyChannel: 'Direct Manufacturer',
    regionalOrApplicationSpecificChannelBias: 'Application-specific',
    currentPreferredBladeSuppliers: 'Supplier A, Supplier D',
    vendorConsolidationStatus: 'Consolidating',
    accountAttractiveness: 'High',
    icpFit: 'Yes',
    keyContactPerson: 'Omar Al-Muhairi',
    designation: 'Senior Engineer',
    emailId: 'o.muhairi@adnoc.ae',
    contactNo: '+971 2 602 1000'
  },
  {
    sNo: 12,
    companyName: 'Tasnee Petrochemicals',
    customerType: 'Finishing House',
    keyMaterialsProcessed: 'Packaging Films',
    typicalSlittingStageUsage: 'Finishing',
    precisionRequirement: 'Standard',
    lineSpeedDutyCycleIntensity: 'Low speed, batch',
    bladeConsumptionLevel: 'Low',
    keyBuyingFunctions: 'Procurement, Quality',
    specificationOwnerFinalDecisionAuthority: 'Supply Chain Manager',
    primaryBuyingTriggers: 'Scrap, Cut Quality',
    keyEvaluationCriteria: 'Cost',
    switchingWillingness: 'High',
    typicalOrderingPattern: 'Bi-weekly, Low Volume',
    preferredSupplyChannel: 'Distributor / Dealer',
    regionalOrApplicationSpecificChannelBias: 'Regional preference',
    currentPreferredBladeSuppliers: 'Supplier E',
    vendorConsolidationStatus: 'Stable',
    accountAttractiveness: 'Low',
    icpFit: 'No',
    keyContactPerson: 'Nasser Al-Dossary',
    designation: 'Supply Chain Manager',
    emailId: 'n.dossary@tasnee.com',
    contactNo: '+966 11 265 3333'
  },
  {
    sNo: 13,
    companyName: 'Dubai Aluminium (DUBAL)',
    customerType: 'Converter',
    keyMaterialsProcessed: 'Aluminum Foil, Coils',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'Ultra-high',
    lineSpeedDutyCycleIntensity: 'High speed, continuous',
    bladeConsumptionLevel: 'High',
    keyBuyingFunctions: 'Operations, Plant',
    specificationOwnerFinalDecisionAuthority: 'QA Head',
    primaryBuyingTriggers: 'Safety, Uptime',
    keyEvaluationCriteria: 'Performance',
    switchingWillingness: 'Low',
    typicalOrderingPattern: 'Weekly, High Volume',
    preferredSupplyChannel: 'Direct Manufacturer',
    regionalOrApplicationSpecificChannelBias: 'No specific bias',
    currentPreferredBladeSuppliers: 'Supplier A',
    vendorConsolidationStatus: 'Consolidating',
    accountAttractiveness: 'High',
    icpFit: 'Yes',
    keyContactPerson: 'Layla Al-Maktoum',
    designation: 'Quality Assurance Head',
    emailId: 'l.maktoum@ega.ae',
    contactNo: '+971 4 802 8000'
  },
  {
    sNo: 14,
    companyName: 'Sohar Aluminium',
    customerType: 'Finishing House',
    keyMaterialsProcessed: 'Aluminum Sheets',
    typicalSlittingStageUsage: 'Secondary',
    precisionRequirement: 'High',
    lineSpeedDutyCycleIntensity: 'Medium speed, intermittent',
    bladeConsumptionLevel: 'Medium',
    keyBuyingFunctions: 'Quality, Operations',
    specificationOwnerFinalDecisionAuthority: 'Production Manager',
    primaryBuyingTriggers: 'Cut Quality, Safety',
    keyEvaluationCriteria: 'Cost',
    switchingWillingness: 'Medium',
    typicalOrderingPattern: 'Monthly, Medium Volume',
    preferredSupplyChannel: 'OEM',
    regionalOrApplicationSpecificChannelBias: 'Application-specific',
    currentPreferredBladeSuppliers: 'Supplier C, Supplier D',
    vendorConsolidationStatus: 'Diversifying',
    accountAttractiveness: 'Medium',
    icpFit: 'Partial',
    keyContactPerson: 'Said Al-Busaidi',
    designation: 'Production Manager',
    emailId: 's.busaidi@soharaluminium.com',
    contactNo: '+968 2685 0000'
  },
  {
    sNo: 15,
    companyName: 'Yanbu Aramco Sinopec Refining',
    customerType: 'Converter',
    keyMaterialsProcessed: 'PET, BOPP Films',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'High',
    lineSpeedDutyCycleIntensity: 'High speed, continuous',
    bladeConsumptionLevel: 'High',
    keyBuyingFunctions: 'Plant, Procurement',
    specificationOwnerFinalDecisionAuthority: 'JV Director',
    primaryBuyingTriggers: 'Uptime, Scrap',
    keyEvaluationCriteria: 'Performance',
    switchingWillingness: 'Low',
    typicalOrderingPattern: 'Quarterly, High Volume',
    preferredSupplyChannel: 'Direct Manufacturer',
    regionalOrApplicationSpecificChannelBias: 'Regional preference',
    currentPreferredBladeSuppliers: 'Supplier A, Supplier B',
    vendorConsolidationStatus: 'Consolidating',
    accountAttractiveness: 'High',
    icpFit: 'Yes',
    keyContactPerson: 'Wei Zhang',
    designation: 'Joint Venture Director',
    emailId: 'w.zhang@yasref.com',
    contactNo: '+966 14 321 0000'
  },
  {
    sNo: 16,
    companyName: 'Aluminium Bahrain (ALBA)',
    customerType: 'Job Shop',
    keyMaterialsProcessed: 'Aluminum Ingots, Sheets',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'Standard',
    lineSpeedDutyCycleIntensity: 'Medium speed, batch',
    bladeConsumptionLevel: 'Medium',
    keyBuyingFunctions: 'Operations, Quality',
    specificationOwnerFinalDecisionAuthority: 'COO',
    primaryBuyingTriggers: 'Safety, Cut Quality',
    keyEvaluationCriteria: 'Cost',
    switchingWillingness: 'Medium',
    typicalOrderingPattern: 'Bi-weekly, Medium Volume',
    preferredSupplyChannel: 'Distributor / Dealer',
    regionalOrApplicationSpecificChannelBias: 'No specific bias',
    currentPreferredBladeSuppliers: 'Supplier B, Supplier E',
    vendorConsolidationStatus: 'Stable',
    accountAttractiveness: 'Medium',
    icpFit: 'Partial',
    keyContactPerson: 'Isa Al-Ansari',
    designation: 'Chief Operations Officer',
    emailId: 'i.ansari@alba.com.bh',
    contactNo: '+973 1783 0000'
  },
  {
    sNo: 17,
    companyName: 'Petro Rabigh',
    customerType: 'Converter',
    keyMaterialsProcessed: 'PE, PP Resins',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'High',
    lineSpeedDutyCycleIntensity: 'High speed, continuous',
    bladeConsumptionLevel: 'High',
    keyBuyingFunctions: 'Quality, Plant',
    specificationOwnerFinalDecisionAuthority: 'VP Operations',
    primaryBuyingTriggers: 'Uptime, Cut Quality',
    keyEvaluationCriteria: 'Performance',
    switchingWillingness: 'Low',
    typicalOrderingPattern: 'Monthly, High Volume',
    preferredSupplyChannel: 'Direct Manufacturer',
    regionalOrApplicationSpecificChannelBias: 'Application-specific',
    currentPreferredBladeSuppliers: 'Supplier A',
    vendorConsolidationStatus: 'Consolidating',
    accountAttractiveness: 'High',
    icpFit: 'Yes',
    keyContactPerson: 'Kenji Tanaka',
    designation: 'VP Operations',
    emailId: 'k.tanaka@petrorabigh.com',
    contactNo: '+966 12 425 0000'
  },
  {
    sNo: 18,
    companyName: 'Qatar Aluminium (Qatalum)',
    customerType: 'Finishing House',
    keyMaterialsProcessed: 'Aluminum Products',
    typicalSlittingStageUsage: 'Secondary',
    precisionRequirement: 'High',
    lineSpeedDutyCycleIntensity: 'Medium speed, intermittent',
    bladeConsumptionLevel: 'Medium',
    keyBuyingFunctions: 'Procurement, Operations',
    specificationOwnerFinalDecisionAuthority: 'MD',
    primaryBuyingTriggers: 'Scrap, Safety',
    keyEvaluationCriteria: 'Cost',
    switchingWillingness: 'Medium',
    typicalOrderingPattern: 'Weekly, Medium Volume',
    preferredSupplyChannel: 'Distributor / Dealer',
    regionalOrApplicationSpecificChannelBias: 'Regional preference',
    currentPreferredBladeSuppliers: 'Supplier C',
    vendorConsolidationStatus: 'Diversifying',
    accountAttractiveness: 'Medium',
    icpFit: 'Partial',
    keyContactPerson: 'Nils Andersen',
    designation: 'Managing Director',
    emailId: 'n.andersen@qatalum.com',
    contactNo: '+974 4423 9000'
  },
  {
    sNo: 19,
    companyName: 'Saudi Kayan Petrochemical',
    customerType: 'Converter',
    keyMaterialsProcessed: 'Specialty Films',
    typicalSlittingStageUsage: 'Primary',
    precisionRequirement: 'Ultra-high',
    lineSpeedDutyCycleIntensity: 'High speed, continuous',
    bladeConsumptionLevel: 'High',
    keyBuyingFunctions: 'Plant, Quality',
    specificationOwnerFinalDecisionAuthority: 'Plant Director',
    primaryBuyingTriggers: 'Cut Quality, Uptime',
    keyEvaluationCriteria: 'Performance',
    switchingWillingness: 'Low',
    typicalOrderingPattern: 'Quarterly, High Volume',
    preferredSupplyChannel: 'Direct Manufacturer',
    regionalOrApplicationSpecificChannelBias: 'No specific bias',
    currentPreferredBladeSuppliers: 'Supplier A, Supplier D',
    vendorConsolidationStatus: 'Consolidating',
    accountAttractiveness: 'High',
    icpFit: 'Yes',
    keyContactPerson: 'Turki Al-Shehri',
    designation: 'Plant Director',
    emailId: 't.shehri@saudikayan.com',
    contactNo: '+966 13 357 0000'
  },
  {
    sNo: 20,
    companyName: 'Ras Al Khaimah Ceramics',
    customerType: 'In-house Converting',
    keyMaterialsProcessed: 'Packaging Materials',
    typicalSlittingStageUsage: 'Finishing',
    precisionRequirement: 'Standard',
    lineSpeedDutyCycleIntensity: 'Low speed, batch',
    bladeConsumptionLevel: 'Low',
    keyBuyingFunctions: 'Operations, Procurement',
    specificationOwnerFinalDecisionAuthority: 'Procurement Director',
    primaryBuyingTriggers: 'Safety, Scrap',
    keyEvaluationCriteria: 'Cost',
    switchingWillingness: 'High',
    typicalOrderingPattern: 'Monthly, Low Volume',
    preferredSupplyChannel: 'Distributor / Dealer',
    regionalOrApplicationSpecificChannelBias: 'Regional preference',
    currentPreferredBladeSuppliers: 'Supplier E',
    vendorConsolidationStatus: 'Stable',
    accountAttractiveness: 'Low',
    icpFit: 'No',
    keyContactPerson: 'Mariam Al-Qasimi',
    designation: 'Procurement Director',
    emailId: 'm.qasimi@rakceramics.com',
    contactNo: '+971 7 244 6666'
  }
]

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title, height = 600 }: CustomerIntelligenceDatabaseProps) {

  // Render the table with new header structure
  const renderTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          {/* First row - Group headers */}
          <tr>
            <th rowSpan={2} className="bg-[#F0F0F0] border border-gray-300 px-2 py-2 text-center text-xs font-semibold text-black w-10">
              S.No
            </th>
            <th colSpan={4} className="bg-[#FFFFCC] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Type & Operating Context
            </th>
            <th colSpan={3} className="bg-[#FFE5CC] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Razor Blade Usage Profile
            </th>
            <th colSpan={2} className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Buying & Decision Structure
            </th>
            <th colSpan={3} className="bg-[#D4E5F7] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Buying Triggers & Supplier Evaluation
            </th>
            <th colSpan={3} className="bg-[#E5CCFF] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Procurement & Channel Preference
            </th>
            <th colSpan={4} className="bg-[#D4EDDA] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Supplier Landscape & Account Potential
            </th>
            <th colSpan={4} className="bg-[#FCE4EC] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          {/* Second row - Column headers */}
          <tr className="bg-gray-100">
            {/* Customer Type & Operating Context - Yellow */}
            <th className="bg-[#FFFFCC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              Company Name
            </th>
            <th className="bg-[#FFFFCC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Converter / Finishing House / Job Shop / In-house Converting</div>
            </th>
            <th className="bg-[#FFFFCC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              Key Materials Processed
            </th>
            <th className="bg-[#FFFFCC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Typical Slitting Stage Usage</div>
              <div className="font-normal text-[10px] text-gray-600">(Primary / Secondary / Finishing)</div>
            </th>
            {/* Razor Blade Usage Profile - Orange */}
            <th className="bg-[#FFE5CC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Precision Requirement</div>
              <div className="font-normal text-[10px] text-gray-600">(Standard / High / Ultra-high)</div>
            </th>
            <th className="bg-[#FFE5CC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              Line Speed & Duty Cycle Intensity
            </th>
            <th className="bg-[#FFE5CC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[140px]">
              <div>Blade Consumption Level</div>
              <div className="font-normal text-[10px] text-gray-600">(High / Medium / Low)</div>
            </th>
            {/* Buying & Decision Structure - Blue */}
            <th className="bg-[#CCE5FF] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Key Buying Functions</div>
              <div className="font-normal text-[10px] text-gray-600">(Plant / Procurement / Quality / Operations)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              Specification Owner & Final Decision Authority
            </th>
            {/* Buying Triggers & Supplier Evaluation - Light Blue */}
            <th className="bg-[#D4E5F7] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Primary Buying Triggers</div>
              <div className="font-normal text-[10px] text-gray-600">(Uptime, Scrap, Cut Quality, Safety)</div>
            </th>
            <th className="bg-[#D4E5F7] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Key Evaluation Criteria</div>
              <div className="font-normal text-[10px] text-gray-600">(Performance vs Cost)</div>
            </th>
            <th className="bg-[#D4E5F7] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[130px]">
              <div>Switching Willingness</div>
              <div className="font-normal text-[10px] text-gray-600">(Low / Medium / High)</div>
            </th>
            {/* Procurement & Channel Preference - Purple */}
            <th className="bg-[#E5CCFF] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[160px]">
              <div>Typical Ordering Pattern</div>
              <div className="font-normal text-[10px] text-gray-600">(Frequency & Volume)</div>
            </th>
            <th className="bg-[#E5CCFF] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Preferred Supply Channel</div>
              <div className="font-normal text-[10px] text-gray-600">(OEM, Direct Manufacturer, Distributor / Dealer)</div>
            </th>
            <th className="bg-[#E5CCFF] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              Regional or Application-specific Channel Bias
            </th>
            {/* Supplier Landscape & Account Potential - Green */}
            <th className="bg-[#D4EDDA] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              Current / Preferred Blade Suppliers
            </th>
            <th className="bg-[#D4EDDA] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[140px]">
              Vendor Consolidation Status
            </th>
            <th className="bg-[#D4EDDA] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[140px]">
              <div>Account Attractiveness</div>
              <div className="font-normal text-[10px] text-gray-600">(High / Medium / Low)</div>
            </th>
            <th className="bg-[#D4EDDA] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[100px]">
              <div>ICP Fit</div>
              <div className="font-normal text-[10px] text-gray-600">(Yes / Partial / No)</div>
            </th>
            {/* Contact Details - Pink */}
            <th className="bg-[#FCE4EC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              Key Contact Person
            </th>
            <th className="bg-[#FCE4EC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[130px]">
              Designation
            </th>
            <th className="bg-[#FCE4EC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              Email ID
            </th>
            <th className="bg-[#FCE4EC] border border-gray-300 px-2 py-2 text-left text-xs font-semibold text-black min-w-[140px]">
              Contact No.
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black text-center">{customer.sNo}</td>
              {/* Customer Type & Operating Context */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.companyName}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.customerType}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.keyMaterialsProcessed}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.typicalSlittingStageUsage}</td>
              {/* Razor Blade Usage Profile */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.precisionRequirement}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.lineSpeedDutyCycleIntensity}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.bladeConsumptionLevel}</td>
              {/* Buying & Decision Structure */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.keyBuyingFunctions}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.specificationOwnerFinalDecisionAuthority}</td>
              {/* Buying Triggers & Supplier Evaluation */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.primaryBuyingTriggers}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.keyEvaluationCriteria}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.switchingWillingness}</td>
              {/* Procurement & Channel Preference */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.typicalOrderingPattern}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.preferredSupplyChannel}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.regionalOrApplicationSpecificChannelBias}</td>
              {/* Supplier Landscape & Account Potential */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.currentPreferredBladeSuppliers}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.vendorConsolidationStatus}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.accountAttractiveness}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.icpFit}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailId}`}>{customer.emailId}</a>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-sm text-black">{customer.contactNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">{title || 'Customer Intelligence Database'}</h2>
      {renderTable()}
    </div>
  )
}
