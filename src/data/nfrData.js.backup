// NFR Compliance Status
// Met: Fully meets the requirement
// Partial: Partially meets or requires configuration/add-ons
// Unknown: Unable to determine from available documentation
// Not Met: Does not meet the requirement

export const nfrRequirements = [
  {
    id: 'NFR-01',
    category: 'Access Management',
    name: 'Access Logs',
    description: 'User authentication events are logged and the last login date is retained for at least 90 days.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-02',
    category: 'Access Management',
    name: 'Access Review',
    description: 'Users and permissions can be reviewed interactively or via a report outlining users, access permissions and last login date.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-03',
    category: 'Access Management',
    name: 'Account Provisioning',
    description: 'Accounts are provisioned using SAML on-demand provisioning or using a provisioning automation via integration with the identity store, API or another method.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-04',
    category: 'Access Management',
    name: 'Account Removal',
    description: 'Accounts can be configured to expire after a set inactivity period or have an access removal API or a scheduled removal routine that also releases the user license.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-05',
    category: 'Access Management',
    name: 'Authorisation Management',
    description: 'Integrated authorisation management is delivered through access roles assigned and provisioned via Azure AD groups or support for SCIM v2 protocol.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-06',
    category: 'Access Management',
    name: 'Hierarchy-based access entitlement management',
    description: 'The solution supports hierarchy-based access roles related to employee\'s organisational position and be able to synchronise them to corresponding Active Directory or Azure Active AD.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-09',
    category: 'Audit Trail',
    name: 'Audit Trail',
    description: 'Audit trail records will contain details that include date, time, and user information associated with the transaction.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-10',
    category: 'Availability',
    name: 'High Availability',
    description: 'The SaaS solution provide monthly uptime of 99.5% with specified reimbursements for breaches.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-11',
    category: 'Capacity',
    name: 'Transaction Capacity',
    description: 'The solution supports at least 100 create and 100 update online transactions per day and supports at least 5 concurrent transactions.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-12',
    category: 'Capacity',
    name: 'User Capacity',
    description: 'The solution supports as least 100 active users and at least 20 users to connect to the system concurrently with no performance degradation.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-13',
    category: 'Continuity & Resilience',
    name: 'Emergency Exit Protocols',
    description: 'Standard process for data extract, transition to another hosting provider or source code escrow is contractually agreed.',
    priority: 'Should Have'
  },
  {
    id: 'NFR-14',
    category: 'Continuity & Resilience',
    name: 'Point in Time recovery',
    description: 'The system data must be recoverable from a static source (i.e. offsite backups/snapshots to support the RPO) and from a point-in-time state up to 90 days ago.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-15',
    category: 'Continuity & Resilience',
    name: 'Recovery Point Objective (RPO) and Recovery Time Objective (RTO)',
    description: 'The vendor has a defined RTO and RPO. RPO loss does not exceed 24 hours. RTO achieves acceptable performance level following issues.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-16',
    category: 'Continuity & Resilience',
    name: 'Service Continuity Management',
    description: 'Service Continuity Management is maintained for SaaS and software support services, with business continuity and disaster recovery plans annually tested.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-17',
    category: 'Continuity & Resilience',
    name: 'Third Party Backup',
    description: 'SaaS solutions supports common data backup APIs or alternative industry standard data backup and restore capability.',
    priority: 'Should Have'
  },
  {
    id: 'NFR-19',
    category: 'Data',
    name: 'Cloud Exit Plan',
    description: 'The SaaS solution has a documented and tested customer exit plan capability, which ensures secure wiping of customer data, including backup data, upon termination.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-20',
    category: 'Data',
    name: 'Data Backup',
    description: 'Data backup solution must support nightly backups of all data records including data, system logs and customisation and configuration information.',
    priority: 'Must Have'
  },
  {
    id: 'NFR-21',
    category: 'Data',
    name: 'Data Portability',
    description: 'The solution supports export of all data and metadata in industry standard formats or via APIs for this purpose.',
    priority: 'Must Have'
  }
  // Additional NFRs from the spreadsheet can be added here
];

export const platformNFRCompliance = {
  'WorkVivo': {
    'NFR-01': { status: 'Met', note: 'Comprehensive audit logging with 90+ day retention' },
    'NFR-02': { status: 'Met', note: 'Admin console provides user access reports' },
    'NFR-03': { status: 'Met', note: 'SAML SSO and SCIM provisioning supported' },
    'NFR-04': { status: 'Met', note: 'Automated deprovisioning via SCIM/API' },
    'NFR-05': { status: 'Met', note: 'Azure AD integration with SCIM v2' },
    'NFR-06': { status: 'Met', note: 'Hierarchical permissions based on org structure' },
    'NFR-09': { status: 'Met', note: 'Full audit trail for all transactions' },
    'NFR-10': { status: 'Met', note: '99.9% SLA with financial credits' },
    'NFR-11': { status: 'Met', note: 'Enterprise scale transaction support' },
    'NFR-12': { status: 'Met', note: 'Supports 10,000+ concurrent users' },
    'NFR-13': { status: 'Met', note: 'Data export and migration tools provided' },
    'NFR-14': { status: 'Partial', note: '30-day recovery standard, extended available' },
    'NFR-15': { status: 'Met', note: 'RTO 4hrs, RPO 1hr documented' },
    'NFR-16': { status: 'Met', note: 'ISO 27001 certified DR testing' },
    'NFR-17': { status: 'Partial', note: 'API export available, no native 3rd party backup' },
    'NFR-19': { status: 'Met', note: 'GDPR compliant data deletion process' },
    'NFR-20': { status: 'Met', note: 'Daily automated backups' },
    'NFR-21': { status: 'Met', note: 'REST API and CSV export capabilities' }
  },
  'Staffbase': {
    'NFR-01': { status: 'Met', note: 'Enterprise logging with long-term retention' },
    'NFR-02': { status: 'Met', note: 'Detailed user and permission reporting' },
    'NFR-03': { status: 'Met', note: 'SAML, SCIM, and API provisioning' },
    'NFR-04': { status: 'Met', note: 'Automated user lifecycle management' },
    'NFR-05': { status: 'Met', note: 'Full SCIM v2 and Azure AD support' },
    'NFR-06': { status: 'Met', note: 'Org-hierarchy based access control' },
    'NFR-09': { status: 'Met', note: 'Comprehensive audit logs' },
    'NFR-10': { status: 'Met', note: '99.9% uptime SLA' },
    'NFR-11': { status: 'Met', note: 'High transaction throughput' },
    'NFR-12': { status: 'Met', note: 'Enterprise-scale user support' },
    'NFR-13': { status: 'Met', note: 'Data portability and export tools' },
    'NFR-14': { status: 'Met', note: '90-day point-in-time recovery' },
    'NFR-15': { status: 'Met', note: 'RTO/RPO defined in SLA' },
    'NFR-16': { status: 'Met', note: 'Annual DR testing documented' },
    'NFR-17': { status: 'Partial', note: 'GraphQL API for export' },
    'NFR-19': { status: 'Met', note: 'Secure data deletion protocol' },
    'NFR-20': { status: 'Met', note: 'Automated daily backups' },
    'NFR-21': { status: 'Met', note: 'API and bulk export features' }
  },
  'Reward Gateway': {
    'NFR-01': { status: 'Met', note: 'Login tracking and audit logs' },
    'NFR-02': { status: 'Partial', note: 'Basic user reports, advanced via API' },
    'NFR-03': { status: 'Met', note: 'SSO and automated provisioning' },
    'NFR-04': { status: 'Partial', note: 'Manual deactivation, API available' },
    'NFR-05': { status: 'Partial', note: 'SSO integration, limited SCIM' },
    'NFR-06': { status: 'Partial', note: 'Group-based access, not full hierarchy' },
    'NFR-09': { status: 'Met', note: 'Transaction audit trail' },
    'NFR-10': { status: 'Met', note: '99.5% availability SLA' },
    'NFR-11': { status: 'Met', note: 'Adequate transaction capacity' },
    'NFR-12': { status: 'Met', note: 'Supports large user base' },
    'NFR-13': { status: 'Partial', note: 'Data export available, migration support limited' },
    'NFR-14': { status: 'Unknown', note: 'Recovery capabilities not publicly documented' },
    'NFR-15': { status: 'Partial', note: 'RTO/RPO exist but not detailed publicly' },
    'NFR-16': { status: 'Unknown', note: 'DR testing not publicly documented' },
    'NFR-17': { status: 'Unknown', note: 'Third-party backup support unclear' },
    'NFR-19': { status: 'Met', note: 'GDPR compliant exit process' },
    'NFR-20': { status: 'Partial', note: 'Backups performed, frequency not specified' },
    'NFR-21': { status: 'Met', note: 'Export via reports and API' }
  },
  'Microsoft Viva Engage': {
    'NFR-01': { status: 'Met', note: 'Microsoft 365 unified audit log' },
    'NFR-02': { status: 'Met', note: 'Azure AD reporting and compliance center' },
    'NFR-03': { status: 'Met', note: 'Native Azure AD provisioning' },
    'NFR-04': { status: 'Met', note: 'Azure AD automated lifecycle' },
    'NFR-05': { status: 'Met', note: 'Native Azure AD SCIM v2' },
    'NFR-06': { status: 'Met', note: 'Full Azure AD hierarchical groups' },
    'NFR-09': { status: 'Met', note: 'Microsoft 365 audit system' },
    'NFR-10': { status: 'Met', note: '99.9% financially backed SLA' },
    'NFR-11': { status: 'Met', note: 'Microsoft scale infrastructure' },
    'NFR-12': { status: 'Met', note: 'Unlimited enterprise scale' },
    'NFR-13': { status: 'Met', note: 'Microsoft data portability tools' },
    'NFR-14': { status: 'Met', note: '14-day deletion recovery window' },
    'NFR-15': { status: 'Met', note: 'Enterprise-grade RTO/RPO documented' },
    'NFR-16': { status: 'Met', note: 'SOC 2 Type II certified DR' },
    'NFR-17': { status: 'Met', note: 'Microsoft Graph API backup support' },
    'NFR-19': { status: 'Met', note: 'Microsoft secure deletion standards' },
    'NFR-20': { status: 'Met', note: 'Microsoft 365 backup infrastructure' },
    'NFR-21': { status: 'Met', note: 'Graph API and eDiscovery export' }
  },
  'Simpplr': {
    'NFR-01': { status: 'Met', note: 'Activity logging with retention' },
    'NFR-02': { status: 'Met', note: 'Admin analytics and user reports' },
    'NFR-03': { status: 'Met', note: 'SAML and SCIM provisioning' },
    'NFR-04': { status: 'Met', note: 'Automated deprovisioning' },
    'NFR-05': { status: 'Met', note: 'SCIM v2 and directory sync' },
    'NFR-06': { status: 'Partial', note: 'Group-based, limited hierarchy sync' },
    'NFR-09': { status: 'Met', note: 'Full audit trail' },
    'NFR-10': { status: 'Met', note: '99.9% uptime SLA' },
    'NFR-11': { status: 'Met', note: 'High performance architecture' },
    'NFR-12': { status: 'Met', note: 'Enterprise user capacity' },
    'NFR-13': { status: 'Partial', note: 'Export tools, migration services extra' },
    'NFR-14': { status: 'Partial', note: '30-day recovery standard' },
    'NFR-15': { status: 'Met', note: 'RTO/RPO in enterprise SLA' },
    'NFR-16': { status: 'Met', note: 'SOC 2 Type II with DR testing' },
    'NFR-17': { status: 'Partial', note: 'API export, no native 3rd party' },
    'NFR-19': { status: 'Met', note: 'Data deletion and exit process' },
    'NFR-20': { status: 'Met', note: 'Continuous backup' },
    'NFR-21': { status: 'Met', note: 'REST API and content export' }
  }
};

// Calculate compliance scores
export const calculateNFRScore = (platformName) => {
  const compliance = platformNFRCompliance[platformName];
  if (!compliance) return { met: 0, partial: 0, unknown: 0, notMet: 0, total: 0, score: 0 };
  
  const statuses = Object.values(compliance).map(r => r.status);
  const met = statuses.filter(s => s === 'Met').length;
  const partial = statuses.filter(s => s === 'Partial').length;
  const unknown = statuses.filter(s => s === 'Unknown').length;
  const notMet = statuses.filter(s => s === 'Not Met').length;
  const total = statuses.length;
  
  // Scoring: Met=100%, Partial=50%, Unknown=0%, Not Met=0%
  const score = Math.round(((met + (partial * 0.5)) / total) * 100);
  
  return { met, partial, unknown, notMet, total, score };
};

export const nfrCategories = [
  'Access Management',
  'Audit Trail',
  'Availability',
  'Capacity',
  'Continuity & Resilience',
  'Data',
  'Data Integrity',
  'Integration',
  'Security',
  'Performance',
  'Usability',
  'Cyber'
];
