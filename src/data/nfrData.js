// This file will be used to replace nfrData.js
// Contains all 68 NFRs with compliance assessments

import { nfrRequirements } from './nfrRequirements';
export { nfrRequirements };

// Platform NFR Compliance - Complete assessment for all 68 NFRs
// Status: Met, Partial, Unknown, Not Met
export const platformNFRCompliance = {
  'WorkVivo': {
    // Access Management (6)
    'NFR-01': { status: 'Met', note: 'Comprehensive audit logging with 90+ day retention' },
    'NFR-02': { status: 'Met', note: 'Admin console provides user access reports' },
    'NFR-03': { status: 'Met', note: 'SAML SSO and SCIM provisioning supported' },
    'NFR-04': { status: 'Met', note: 'Automated deprovisioning via SCIM/API' },
    'NFR-05': { status: 'Met', note: 'Azure AD integration with SCIM v2' },
    'NFR-06': { status: 'Met', note: 'Hierarchical permissions based on org structure' },
    
    // Audit Trail (1)
    'NFR-09': { status: 'Met', note: 'Full audit trail for all transactions' },
    
    // Availability (1)
    'NFR-10': { status: 'Met', note: '99.9% SLA with financial credits' },
    
    // Capacity (2)
    'NFR-11': { status: 'Met', note: 'Enterprise scale transaction support' },
    'NFR-12': { status: 'Met', note: 'Supports 10,000+ concurrent users' },
    
    // Continuity & Resilience (5)
    'NFR-13': { status: 'Met', note: 'Data export and migration tools provided' },
    'NFR-14': { status: 'Partial', note: '30-day recovery standard, extended available' },
    'NFR-15': { status: 'Met', note: 'RTO 4hrs, RPO 1hr documented' },
    'NFR-16': { status: 'Met', note: 'ISO 27001 certified DR testing' },
    'NFR-17': { status: 'Partial', note: 'API export available, no native 3rd party backup' },
    
    // Data (7)
    'NFR-19': { status: 'Met', note: 'GDPR compliant data deletion process' },
    'NFR-20': { status: 'Met', note: 'Daily automated backups' },
    'NFR-21': { status: 'Met', note: 'REST API and CSV export capabilities' },
    'NFR-22': { status: 'Partial', note: 'Basic SharePoint integration, not seamless' },
    'NFR-23': { status: 'Met', note: 'Granular permissions and field-level encryption' },
    'NFR-24': { status: 'Partial', note: 'Basic archiving, limited lifecycle automation' },
    'NFR-25': { status: 'Met', note: 'Version history and audit trail preserved' },
    
    // Data Integrity (4)
    'NFR-26': { status: 'Met', note: 'Approval workflows for critical content' },
    'NFR-27': { status: 'Met', note: 'ACID compliant database with failover' },
    'NFR-28': { status: 'Partial', note: 'User-level duplicate prevention, no API control' },
    'NFR-29': { status: 'Met', note: 'Supports timezone configuration' },
    
    // Integration (2)
    'NFR-30': { status: 'Met', note: 'Comprehensive REST API with documentation' },
    'NFR-31': { status: 'Met', note: 'Sandbox and UAT environments provided' },
    
    // Implementation (2)
    'NFR-32': { status: 'Met', note: 'Structured implementation methodology provided' },
    'NFR-33': { status: 'Met', note: 'Dedicated implementation team available' },
    
    // Maintainability (3)
    'NFR-34': { status: 'Met', note: 'Quarterly releases with 30-day notice' },
    'NFR-35': { status: 'Partial', note: 'Data export available, masking manual' },
    'NFR-36': { status: 'Met', note: 'DEV, UAT, Production environments' },
    
    // Performance (3)
    'NFR-38': { status: 'Met', note: 'Search optimized, sub-3s results' },
    'NFR-39': { status: 'Met', note: 'Fast loading with SSO integration' },
    'NFR-40': { status: 'Met', note: 'Responsive UI, <3s average' },
    
    // Scalability (1)
    'NFR-41': { status: 'Met', note: 'Cloud-native scalable architecture' },
    
    // Security (6)
    'NFR-42': { status: 'Met', note: 'Custom domain branding supported' },
    'NFR-43': { status: 'Met', note: 'SOC 2 Type II, ISO 27001 certified' },
    'NFR-44': { status: 'Unknown', note: 'Cyber insurance coverage not publicly disclosed' },
    'NFR-45': { status: 'Met', note: 'Immutable audit logs' },
    'NFR-46': { status: 'Met', note: 'Custom domain email with SPF/DKIM/DMARC' },
    'NFR-47': { status: 'Met', note: 'ISO 27001:2013 certified' },
    
    // Supportability (4)
    'NFR-48': { status: 'Met', note: 'Comprehensive logging and diagnostics' },
    'NFR-49': { status: 'Met', note: 'Enterprise support with SLA' },
    'NFR-50': { status: 'Met', note: 'Release notes and version control' },
    'NFR-51': { status: 'Met', note: '24/7 support desk with tiered SLA' },
    
    // Usability (7)
    'NFR-52': { status: 'Partial', note: 'WCAG 2.0 Level A, working toward AA' },
    'NFR-53': { status: 'Met', note: 'Fully responsive design' },
    'NFR-55': { status: 'Met', note: 'User-friendly interface and terminology' },
    'NFR-56': { status: 'Met', note: 'Web-based, no client required' },
    'NFR-57': { status: 'Met', note: 'Native iOS and Android apps' },
    'NFR-58': { status: 'Met', note: 'Chrome, Edge, Safari support' },
    'NFR-59': { status: 'Met', note: 'Contextual help and searchable knowledge base' },
    
    // User Experience (1)
    'NFR-60': { status: 'Met', note: 'Intuitive UI, minimal training required' },
    
    // Cyber (13)
    'NFR-61': { status: 'Met', note: 'SAML v2 SSO with Azure AD' },
    'NFR-62': { status: 'Met', note: 'MFA available for non-SSO auth' },
    'NFR-63': { status: 'Partial', note: 'Global hosting, AU region available on request' },
    'NFR-64': { status: 'Met', note: 'GDPR and privacy compliant' },
    'NFR-65': { status: 'Met', note: 'Customer data ownership guaranteed' },
    'NFR-66': { status: 'Met', note: '7+ year retention supported' },
    'NFR-67': { status: 'Met', note: 'AES-256 encryption at rest and TLS 1.2+ in transit' },
    'NFR-68': { status: 'Met', note: 'Documented incident response plan' },
    'NFR-69': { status: 'Met', note: 'Security incident reporting process' },
    'NFR-70': { status: 'Partial', note: '24-hour notification standard' },
    'NFR-71': { status: 'Met', note: 'Annual pen testing and vulnerability management' },
    'NFR-72': { status: 'Met', note: 'Data classification framework implemented' },
    'NFR-74': { status: 'Met', note: 'Privacy Act compliant PII handling' }
  },
  
  'Staffbase': {
    // Access Management (6)
    'NFR-01': { status: 'Met', note: 'Enterprise logging with long-term retention' },
    'NFR-02': { status: 'Met', note: 'Detailed user and permission reporting' },
    'NFR-03': { status: 'Met', note: 'SAML, SCIM, and API provisioning' },
    'NFR-04': { status: 'Met', note: 'Automated user lifecycle management' },
    'NFR-05': { status: 'Met', note: 'Full SCIM v2 and Azure AD support' },
    'NFR-06': { status: 'Met', note: 'Org-hierarchy based access control' },
    
    // Audit Trail (1)
    'NFR-09': { status: 'Met', note: 'Comprehensive audit logs' },
    
    // Availability (1)
    'NFR-10': { status: 'Met', note: '99.9% uptime SLA' },
    
    // Capacity (2)
    'NFR-11': { status: 'Met', note: 'High transaction throughput' },
    'NFR-12': { status: 'Met', note: 'Enterprise-scale user support' },
    
    // Continuity & Resilience (5)
    'NFR-13': { status: 'Met', note: 'Data portability and export tools' },
    'NFR-14': { status: 'Met', note: '90-day point-in-time recovery' },
    'NFR-15': { status: 'Met', note: 'RTO/RPO defined in SLA' },
    'NFR-16': { status: 'Met', note: 'Annual DR testing documented' },
    'NFR-17': { status: 'Partial', note: 'GraphQL API for export' },
    
    // Data (7)
    'NFR-19': { status: 'Met', note: 'Secure data deletion protocol' },
    'NFR-20': { status: 'Met', note: 'Automated daily backups' },
    'NFR-21': { status: 'Met', note: 'API and bulk export features' },
    'NFR-22': { status: 'Met', note: 'Native SharePoint and Google Drive integration' },
    'NFR-23': { status: 'Met', note: 'Role-based access with encryption' },
    'NFR-24': { status: 'Met', note: 'Content lifecycle and archiving' },
    'NFR-25': { status: 'Met', note: 'Version control and audit trail' },
    
    // Data Integrity (4)
    'NFR-26': { status: 'Met', note: 'Approval workflows and change tracking' },
    'NFR-27': { status: 'Met', note: 'Enterprise database with ACID compliance' },
    'NFR-28': { status: 'Met', note: 'Duplicate detection and prevention' },
    'NFR-29': { status: 'Met', note: 'Multi-timezone support' },
    
    // Integration (2)
    'NFR-30': { status: 'Met', note: 'GraphQL API with extensive documentation' },
    'NFR-31': { status: 'Met', note: 'Test and staging environments' },
    
    // Implementation (2)
    'NFR-32': { status: 'Met', note: 'Professional services with proven methodology' },
    'NFR-33': { status: 'Met', note: 'Dedicated implementation specialists' },
    
    // Maintainability (3)
    'NFR-34': { status: 'Met', note: 'Regular releases with advance notice' },
    'NFR-35': { status: 'Met', note: 'Data obfuscation tools provided' },
    'NFR-36': { status: 'Met', note: 'Multiple environment tiers available' },
    
    // Performance (3)
    'NFR-38': { status: 'Met', note: 'Optimized search, <3s response' },
    'NFR-39': { status: 'Met', note: 'Fast load times with caching' },
    'NFR-40': { status: 'Met', note: 'Performance-optimized UI' },
    
    // Scalability (1)
    'NFR-41': { status: 'Met', note: 'Horizontally scalable infrastructure' },
    
    // Security (6)
    'NFR-42': { status: 'Met', note: 'Custom branding and URLs' },
    'NFR-43': { status: 'Met', note: 'SOC 2, ISO 27001, GDPR compliant' },
    'NFR-44': { status: 'Unknown', note: 'Insurance details not public' },
    'NFR-45': { status: 'Met', note: 'Tamper-proof logging' },
    'NFR-46': { status: 'Met', note: 'Custom domain with email authentication' },
    'NFR-47': { status: 'Met', note: 'ISO 27001 and SOC 2 Type II' },
    
    // Supportability (4)
    'NFR-48': { status: 'Met', note: 'Detailed system logs' },
    'NFR-49': { status: 'Met', note: 'Enterprise support agreements' },
    'NFR-50': { status: 'Met', note: 'Version management and changelogs' },
    'NFR-51': { status: 'Met', note: 'Global support desk' },
    
    // Usability (7)
    'NFR-52': { status: 'Met', note: 'WCAG 2.0 AA compliant' },
    'NFR-53': { status: 'Met', note: 'Responsive and adaptive design' },
    'NFR-55': { status: 'Met', note: 'User-centric language' },
    'NFR-56': { status: 'Met', note: 'Browser-based access' },
    'NFR-57': { status: 'Met', note: 'iOS and Android native apps' },
    'NFR-58': { status: 'Met', note: 'Modern browser support' },
    'NFR-59': { status: 'Met', note: 'Contextual help system' },
    
    // User Experience (1)
    'NFR-60': { status: 'Met', note: 'Intuitive publisher and user interfaces' },
    
    // Cyber (13)
    'NFR-61': { status: 'Met', note: 'SAML 2.0 SSO integration' },
    'NFR-62': { status: 'Met', note: 'MFA supported' },
    'NFR-63': { status: 'Partial', note: 'EU/US hosting, AU available' },
    'NFR-64': { status: 'Met', note: 'Privacy-compliant globally' },
    'NFR-65': { status: 'Met', note: 'Customer owns all data' },
    'NFR-66': { status: 'Met', note: 'Long-term retention supported' },
    'NFR-67': { status: 'Met', note: 'AES-256 and TLS 1.3' },
    'NFR-68': { status: 'Met', note: 'Incident management framework' },
    'NFR-69': { status: 'Met', note: 'Breach notification procedures' },
    'NFR-70': { status: 'Met', note: 'Rapid incident notification' },
    'NFR-71': { status: 'Met', note: 'Regular security assessments' },
    'NFR-72': { status: 'Met', note: 'Data classification support' },
    'NFR-74': { status: 'Met', note: 'PII management compliant' }
  },
  
  'Reward Gateway': {
    // Access Management (6)
    'NFR-01': { status: 'Met', note: 'Login tracking and audit logs' },
    'NFR-02': { status: 'Partial', note: 'Basic user reports, advanced via API' },
    'NFR-03': { status: 'Met', note: 'SSO and automated provisioning' },
    'NFR-04': { status: 'Partial', note: 'Manual deactivation, API available' },
    'NFR-05': { status: 'Partial', note: 'SSO integration, limited SCIM' },
    'NFR-06': { status: 'Partial', note: 'Group-based access, not full hierarchy' },
    
    // Audit Trail (1)
    'NFR-09': { status: 'Met', note: 'Transaction audit trail' },
    
    // Availability (1)
    'NFR-10': { status: 'Met', note: '99.5% availability SLA' },
    
    // Capacity (2)
    'NFR-11': { status: 'Met', note: 'Adequate transaction capacity' },
    'NFR-12': { status: 'Met', note: 'Supports large user base' },
    
    // Continuity & Resilience (5)
    'NFR-13': { status: 'Partial', note: 'Data export available, migration support limited' },
    'NFR-14': { status: 'Unknown', note: 'Recovery capabilities not publicly documented' },
    'NFR-15': { status: 'Partial', note: 'RTO/RPO exist but not detailed publicly' },
    'NFR-16': { status: 'Unknown', note: 'DR testing not publicly documented' },
    'NFR-17': { status: 'Unknown', note: 'Third-party backup support unclear' },
    
    // Data (7)
    'NFR-19': { status: 'Met', note: 'GDPR compliant exit process' },
    'NFR-20': { status: 'Partial', note: 'Backups performed, frequency not specified' },
    'NFR-21': { status: 'Met', note: 'Export via reports and API' },
    'NFR-22': { status: 'Unknown', note: 'SharePoint integration not documented' },
    'NFR-23': { status: 'Partial', note: 'Basic access controls, limited field encryption' },
    'NFR-24': { status: 'Unknown', note: 'Lifecycle management not documented' },
    'NFR-25': { status: 'Partial', note: 'Basic versioning available' },
    
    // Data Integrity (4)
    'NFR-26': { status: 'Partial', note: 'Approval workflows for key actions' },
    'NFR-27': { status: 'Unknown', note: 'Database architecture not public' },
    'NFR-28': { status: 'Partial', note: 'Basic duplicate prevention' },
    'NFR-29': { status: 'Met', note: 'Timezone support' },
    
    // Integration (2)
    'NFR-30': { status: 'Partial', note: 'API available, documentation limited' },
    'NFR-31': { status: 'Partial', note: 'Production environment only' },
    
    // Implementation (2)
    'NFR-32': { status: 'Met', note: 'Implementation support provided' },
    'NFR-33': { status: 'Met', note: 'Customer success team' },
    
    // Maintainability (3)
    'NFR-34': { status: 'Met', note: 'Regular platform updates' },
    'NFR-35': { status: 'Unknown', note: 'Data masking not documented' },
    'NFR-36': { status: 'Partial', note: 'Limited test environment access' },
    
    // Performance (3)
    'NFR-38': { status: 'Met', note: 'Search performance adequate' },
    'NFR-39': { status: 'Met', note: 'Fast loading' },
    'NFR-40': { status: 'Met', note: 'Responsive interface' },
    
    // Scalability (1)
    'NFR-41': { status: 'Met', note: 'Cloud-based scalability' },
    
    // Security (6)
    'NFR-42': { status: 'Met', note: 'Custom branding available' },
    'NFR-43': { status: 'Partial', note: 'SOC 2 compliant, some certifications unclear' },
    'NFR-44': { status: 'Unknown', note: 'Insurance not disclosed' },
    'NFR-45': { status: 'Partial', note: 'Audit logs, integrity not specified' },
    'NFR-46': { status: 'Partial', note: 'Email capability, domain config unclear' },
    'NFR-47': { status: 'Partial', note: 'Security practices not fully documented' },
    
    // Supportability (4)
    'NFR-48': { status: 'Partial', note: 'Basic logging' },
    'NFR-49': { status: 'Met', note: 'Support contracts available' },
    'NFR-50': { status: 'Partial', note: 'Release notes provided' },
    'NFR-51': { status: 'Met', note: 'Customer support desk' },
    
    // Usability (7)
    'NFR-52': { status: 'Unknown', note: 'Accessibility compliance not documented' },
    'NFR-53': { status: 'Met', note: 'Mobile-responsive' },
    'NFR-55': { status: 'Met', note: 'User-friendly interface' },
    'NFR-56': { status: 'Met', note: 'Web-based access' },
    'NFR-57': { status: 'Met', note: 'Mobile apps for iOS/Android' },
    'NFR-58': { status: 'Met', note: 'Modern browser support' },
    'NFR-59': { status: 'Met', note: 'Help resources available' },
    
    // User Experience (1)
    'NFR-60': { status: 'Met', note: 'Easy to use rewards platform' },
    
    // Cyber (13)
    'NFR-61': { status: 'Met', note: 'SSO supported' },
    'NFR-62': { status: 'Partial', note: 'MFA available for admin' },
    'NFR-63': { status: 'Unknown', note: 'Hosting location not specified' },
    'NFR-64': { status: 'Met', note: 'Privacy policy compliant' },
    'NFR-65': { status: 'Met', note: 'Customer data ownership' },
    'NFR-66': { status: 'Unknown', note: 'Retention period not documented' },
    'NFR-67': { status: 'Met', note: 'Data encryption standard' },
    'NFR-68': { status: 'Partial', note: 'Incident procedures in place' },
    'NFR-69': { status: 'Partial', note: 'Breach notification process' },
    'NFR-70': { status: 'Unknown', note: 'Notification timeframe not specified' },
    'NFR-71': { status: 'Unknown', note: 'Vulnerability management not documented' },
    'NFR-72': { status: 'Partial', note: 'Basic data classification' },
    'NFR-74': { status: 'Met', note: 'PII handling compliant' }
  },
  
  'Microsoft Viva Engage': {
    // Access Management (6)
    'NFR-01': { status: 'Met', note: 'Microsoft 365 unified audit log' },
    'NFR-02': { status: 'Met', note: 'Azure AD reporting and compliance center' },
    'NFR-03': { status: 'Met', note: 'Native Azure AD provisioning' },
    'NFR-04': { status: 'Met', note: 'Azure AD automated lifecycle' },
    'NFR-05': { status: 'Met', note: 'Native Azure AD SCIM v2' },
    'NFR-06': { status: 'Met', note: 'Full Azure AD hierarchical groups' },
    
    // Audit Trail (1)
    'NFR-09': { status: 'Met', note: 'Microsoft 365 audit system' },
    
    // Availability (1)
    'NFR-10': { status: 'Met', note: '99.9% financially backed SLA' },
    
    // Capacity (2)
    'NFR-11': { status: 'Met', note: 'Microsoft scale infrastructure' },
    'NFR-12': { status: 'Met', note: 'Unlimited enterprise scale' },
    
    // Continuity & Resilience (5)
    'NFR-13': { status: 'Met', note: 'Microsoft data portability tools' },
    'NFR-14': { status: 'Met', note: '14-day deletion recovery window' },
    'NFR-15': { status: 'Met', note: 'Enterprise-grade RTO/RPO documented' },
    'NFR-16': { status: 'Met', note: 'SOC 2 Type II certified DR' },
    'NFR-17': { status: 'Met', note: 'Microsoft Graph API backup support' },
    
    // Data (7)
    'NFR-19': { status: 'Met', note: 'Microsoft secure deletion standards' },
    'NFR-20': { status: 'Met', note: 'Microsoft 365 backup infrastructure' },
    'NFR-21': { status: 'Met', note: 'Graph API and eDiscovery export' },
    'NFR-22': { status: 'Met', note: 'Native SharePoint integration' },
    'NFR-23': { status: 'Met', note: 'Microsoft Purview sensitivity labels' },
    'NFR-24': { status: 'Met', note: 'Retention policies and lifecycle' },
    'NFR-25': { status: 'Met', note: 'Version history and preservation' },
    
    // Data Integrity (4)
    'NFR-26': { status: 'Met', note: 'Audit trail for all changes' },
    'NFR-27': { status: 'Met', note: 'Enterprise-grade database' },
    'NFR-28': { status: 'Met', note: 'Duplicate detection built-in' },
    'NFR-29': { status: 'Met', note: 'Global timezone support' },
    
    // Integration (2)
    'NFR-30': { status: 'Met', note: 'Microsoft Graph API comprehensive' },
    'NFR-31': { status: 'Met', note: 'Developer tenant and sandbox' },
    
    // Implementation (2)
    'NFR-32': { status: 'Met', note: 'Microsoft FastTrack methodology' },
    'NFR-33': { status: 'Met', note: 'Global implementation resources' },
    
    // Maintainability (3)
    'NFR-34': { status: 'Met', note: 'Monthly updates with message center notices' },
    'NFR-35': { status: 'Met', note: 'Test tenant with data migration tools' },
    'NFR-36': { status: 'Met', note: 'Development and test tenants available' },
    
    // Performance (3)
    'NFR-38': { status: 'Met', note: 'Microsoft Search optimized' },
    'NFR-39': { status: 'Met', note: 'Fast M365 authentication' },
    'NFR-40': { status: 'Met', note: 'Cloud performance optimized' },
    
    // Scalability (1)
    'NFR-41': { status: 'Met', note: 'Global Microsoft infrastructure' },
    
    // Security (6)
    'NFR-42': { status: 'Met', note: 'Custom domain support' },
    'NFR-43': { status: 'Met', note: 'ISO 27001, SOC 2, FedRAMP certified' },
    'NFR-44': { status: 'Met', note: 'Microsoft comprehensive cyber insurance' },
    'NFR-45': { status: 'Met', note: 'Immutable audit logs in compliance center' },
    'NFR-46': { status: 'Met', note: 'Exchange Online email with full authentication' },
    'NFR-47': { status: 'Met', note: 'ISO 27001, NIST CSF compliant' },
    
    // Supportability (4)
    'NFR-48': { status: 'Met', note: 'Comprehensive Microsoft 365 diagnostics' },
    'NFR-49': { status: 'Met', note: 'Microsoft enterprise support' },
    'NFR-50': { status: 'Met', note: 'Service health dashboard and version control' },
    'NFR-51': { status: 'Met', note: '24/7 Microsoft support' },
    
    // Usability (7)
    'NFR-52': { status: 'Met', note: 'WCAG 2.1 AA compliant' },
    'NFR-53': { status: 'Met', note: 'Responsive web and native apps' },
    'NFR-55': { status: 'Met', note: 'Familiar Microsoft interface' },
    'NFR-56': { status: 'Met', note: 'Web access via M365' },
    'NFR-57': { status: 'Met', note: 'Viva Engage mobile apps' },
    'NFR-58': { status: 'Met', note: 'Edge, Chrome fully supported' },
    'NFR-59': { status: 'Met', note: 'Microsoft Learn and contextual help' },
    
    // User Experience (1)
    'NFR-60': { status: 'Met', note: 'Familiar M365 user experience' },
    
    // Cyber (13)
    'NFR-61': { status: 'Met', note: 'Native Azure AD authentication' },
    'NFR-62': { status: 'Met', note: 'Azure MFA integrated' },
    'NFR-63': { status: 'Partial', note: 'Global datacenters, AU region available' },
    'NFR-64': { status: 'Met', note: 'Microsoft Privacy Statement compliant' },
    'NFR-65': { status: 'Met', note: 'Customer data ownership' },
    'NFR-66': { status: 'Met', note: 'Retention policies configurable' },
    'NFR-67': { status: 'Met', note: 'BitLocker and TLS 1.2+' },
    'NFR-68': { status: 'Met', note: 'Microsoft Security Response Center' },
    'NFR-69': { status: 'Met', note: 'Service trust portal transparency' },
    'NFR-70': { status: 'Met', note: 'Rapid breach notification' },
    'NFR-71': { status: 'Met', note: 'Continuous vulnerability management' },
    'NFR-72': { status: 'Met', note: 'Microsoft Purview data classification' },
    'NFR-74': { status: 'Met', note: 'Privacy Act compliant' }
  },
  
  'Simpplr': {
    // Access Management (6)
    'NFR-01': { status: 'Met', note: 'Activity logging with retention' },
    'NFR-02': { status: 'Met', note: 'Admin analytics and user reports' },
    'NFR-03': { status: 'Met', note: 'SAML and SCIM provisioning' },
    'NFR-04': { status: 'Met', note: 'Automated deprovisioning' },
    'NFR-05': { status: 'Met', note: 'SCIM v2 and directory sync' },
    'NFR-06': { status: 'Partial', note: 'Group-based, limited hierarchy sync' },
    
    // Audit Trail (1)
    'NFR-09': { status: 'Met', note: 'Full audit trail' },
    
    // Availability (1)
    'NFR-10': { status: 'Met', note: '99.9% uptime SLA' },
    
    // Capacity (2)
    'NFR-11': { status: 'Met', note: 'High performance architecture' },
    'NFR-12': { status: 'Met', note: 'Enterprise user capacity' },
    
    // Continuity & Resilience (5)
    'NFR-13': { status: 'Partial', note: 'Export tools, migration services extra' },
    'NFR-14': { status: 'Partial', note: '30-day recovery standard' },
    'NFR-15': { status: 'Met', note: 'RTO/RPO in enterprise SLA' },
    'NFR-16': { status: 'Met', note: 'SOC 2 Type II with DR testing' },
    'NFR-17': { status: 'Partial', note: 'API export, no native 3rd party' },
    
    // Data (7)
    'NFR-19': { status: 'Met', note: 'Data deletion and exit process' },
    'NFR-20': { status: 'Met', note: 'Continuous backup' },
    'NFR-21': { status: 'Met', note: 'REST API and content export' },
    'NFR-22': { status: 'Met', note: 'SharePoint and Google Drive integration' },
    'NFR-23': { status: 'Partial', note: 'Permission-based access' },
    'NFR-24': { status: 'Partial', note: 'Basic content lifecycle' },
    'NFR-25': { status: 'Met', note: 'Version control available' },
    
    // Data Integrity (4)
    'NFR-26': { status: 'Met', note: 'Approval workflows' },
    'NFR-27': { status: 'Met', note: 'Enterprise database backend' },
    'NFR-28': { status: 'Partial', note: 'Basic duplicate handling' },
    'NFR-29': { status: 'Met', note: 'Timezone configuration' },
    
    // Integration (2)
    'NFR-30': { status: 'Met', note: 'REST API documented' },
    'NFR-31': { status: 'Partial', note: 'Sandbox available on request' },
    
    // Implementation (2)
    'NFR-32': { status: 'Met', note: 'Implementation framework provided' },
    'NFR-33': { status: 'Met', note: 'Customer success team' },
    
    // Maintainability (3)
    'NFR-34': { status: 'Met', note: 'Regular feature releases' },
    'NFR-35': { status: 'Partial', note: 'Export capability, limited masking' },
    'NFR-36': { status: 'Partial', note: 'Production plus test instance' },
    
    // Performance (3)
    'NFR-38': { status: 'Met', note: 'Fast search indexing' },
    'NFR-39': { status: 'Met', note: 'Quick load times' },
    'NFR-40': { status: 'Met', note: 'Responsive UI' },
    
    // Scalability (1)
    'NFR-41': { status: 'Met', note: 'Cloud-native scalable' },
    
    // Security (6)
    'NFR-42': { status: 'Met', note: 'Custom domain branding' },
    'NFR-43': { status: 'Met', note: 'SOC 2 Type II certified' },
    'NFR-44': { status: 'Unknown', note: 'Insurance not disclosed' },
    'NFR-45': { status: 'Met', note: 'Audit log integrity' },
    'NFR-46': { status: 'Partial', note: 'Email notifications, domain config available' },
    'NFR-47': { status: 'Met', note: 'SOC 2 and security framework' },
    
    // Supportability (4)
    'NFR-48': { status: 'Met', note: 'System diagnostics and logs' },
    'NFR-49': { status: 'Met', note: 'Enterprise support available' },
    'NFR-50': { status: 'Met', note: 'Release management process' },
    'NFR-51': { status: 'Met', note: 'Support desk with SLA' },
    
    // Usability (7)
    'NFR-52': { status: 'Partial', note: 'Accessibility features, full WCAG in progress' },
    'NFR-53': { status: 'Met', note: 'Fully responsive' },
    'NFR-55': { status: 'Met', note: 'Modern intuitive UI' },
    'NFR-56': { status: 'Met', note: 'Web-based platform' },
    'NFR-57': { status: 'Met', note: 'iOS and Android apps' },
    'NFR-58': { status: 'Met', note: 'Modern browser compatible' },
    'NFR-59': { status: 'Met', note: 'Help center and documentation' },
    
    // User Experience (1)
    'NFR-60': { status: 'Met', note: 'User-friendly intranet experience' },
    
    // Cyber (13)
    'NFR-61': { status: 'Met', note: 'SAML 2.0 SSO' },
    'NFR-62': { status: 'Met', note: 'MFA support' },
    'NFR-63': { status: 'Partial', note: 'US/EU hosting primary' },
    'NFR-64': { status: 'Met', note: 'Privacy policy compliant' },
    'NFR-65': { status: 'Met', note: 'Customer data ownership' },
    'NFR-66': { status: 'Met', note: 'Retention configurable' },
    'NFR-67': { status: 'Met', note: 'AES-256 and TLS encryption' },
    'NFR-68': { status: 'Met', note: 'Incident response plan' },
    'NFR-69': { status: 'Met', note: 'Security incident reporting' },
    'NFR-70': { status: 'Partial', note: 'Notification process in place' },
    'NFR-71': { status: 'Met', note: 'Regular security assessments' },
    'NFR-72': { status: 'Partial', note: 'Data classification available' },
    'NFR-74': { status: 'Met', note: 'PII handling compliant' }
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
  'Implementation',
  'Maintainability',
  'Performance',
  'Scalability',
  'Security',
  'Supportability',
  'Usability',
  'User Experience',
  'Cyber'
];
