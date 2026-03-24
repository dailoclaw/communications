// All 68 NFR Requirements - Final corrected version
// NFR-14 through NFR-17 corrected with proper descriptions

export const nfrRequirements = [
  {
    id: 'NFR-01',
    category: 'Access Management',
    name: 'Access Logs',
    description: 'User authentication events are logged and the last login date is retained for at least 90 days.'
  },
  {
    id: 'NFR-02',
    category: 'Access Management',
    name: 'Access Review',
    description: 'Users and permissions can be reviewed interactively or via a report outlining users, access permissions and last login date.'
  },
  {
    id: 'NFR-03',
    category: 'Access Management',
    name: 'Account Provisioning',
    description: 'Accounts are provisioned using SAML on-demand provisioning or using a provisioning automation via integration with the identity store, API or another method.'
  },
  {
    id: 'NFR-04',
    category: 'Access Management',
    name: 'Account Removal',
    description: 'Accounts can be configured to expire after a set inactivity period or have an access removal API or a scheduled removal routine that also releases the user license.'
  },
  {
    id: 'NFR-05',
    category: 'Access Management',
    name: 'Authorisation Management',
    description: 'Integrated authorisation management is delivered through access roles assigned and provisioned via Azure AD groups or support for SCIM v2 protocol. (SCIM, or the System for Cross-domain Identity Management specification, is an open standard designed to manage user identity information).'
  },
  {
    id: 'NFR-06',
    category: 'Access Management',
    name: 'Hierarchy-based access entitlement management',
    description: 'The solution supports hierarchy-based access roles related to employee\'s organisational position and be able to synchronise them to corresponding Active Directory or Azure Active AD, including support for automated event-driven change to hierarchy due to acting arrangement.'
  },
  {
    id: 'NFR-09',
    category: 'Audit Trail',
    name: 'Audit Trail',
    description: 'Audit trail records will contain details that include date, time, and user information associated with the transaction.'
  },
  {
    id: 'NFR-10',
    category: 'Availability',
    name: 'High Availability',
    description: 'The SaaS solution provide monthly uptime of 99.5% with specified reimbursements for breaches.'
  },
  {
    id: 'NFR-11',
    category: 'Capacity',
    name: 'Transaction Capacity',
    description: 'The solution supports at least 100 create and 100 update online transactions per day and supports at least 5 concurrent transactions.'
  },
  {
    id: 'NFR-12',
    category: 'Capacity',
    name: 'User Capacity',
    description: 'The solution supports as least 100 active users and at least 20 users to connect to the system concurrently with no performance degradation.'
  },
  {
    id: 'NFR-13',
    category: 'Continuity & Resilience',
    name: 'Emergency Exit Protocols',
    description: 'Standard process for data extract, transition to another hosting provider or source code escrow is contractually agreed.'
  },
  {
    id: 'NFR-14',
    category: 'Continuity & Resilience',
    name: 'Point in Time recovery',
    description: 'The system/Function data must be recoverable from a static source (i.e. offsite backups/snapshots to support the RPO) and from a point-in-time state up to 90 days ago in addition to any replicated solution where replication is the first choice.'
  },
  {
    id: 'NFR-15',
    category: 'Continuity & Resilience',
    name: 'Recovery Point Objective (RPO) and Recovery Time Objective (RTO)',
    description: 'The vendor has a defined RTO and RPO. RPO is the loss of data, including system configuration and user data following corruption or total loss does not exceed 24 hours of processing. The solution is designed to be recoverable to an acceptable performance level within a Recovery Time Objective (RTO) in the event of environmental, cyber, or logical configuration issues.'
  },
  {
    id: 'NFR-16',
    category: 'Continuity & Resilience',
    name: 'Service Continuity Management',
    description: 'Service Continuity Management is maintained for SaaS and software support services, with business continuity and disaster recovery plans annually tested.'
  },
  {
    id: 'NFR-17',
    category: 'Continuity & Resilience',
    name: 'Third Party Backup',
    description: 'SaaS solutions supports common data backup APIs or alternative industry standard data backup and restore capability.'
  },
  {
    id: 'NFR-19',
    category: 'Data',
    name: 'Cloud Exit Plan',
    description: 'The SaaS solution has a documented and tested customer exit plan capability, which ensures secure wiping of customer data, including backup data, upon termination.'
  },
  {
    id: 'NFR-20',
    category: 'Data',
    name: 'Data Backup',
    description: 'Data backup solution must support nightly backups of all data records including data, system logs and customisation and configuration information.'
  },
  {
    id: 'NFR-21',
    category: 'Data',
    name: 'Data Portability',
    description: 'The solution supports export of all data and metadata in industry standard formats or via an APIs for this purpose.'
  },
  {
    id: 'NFR-22',
    category: 'Data',
    name: 'Document Management System Integration',
    description: 'The solution supports seamless integration with an external document management system (i.e. SharePoint Online) for management of documents.'
  },
  {
    id: 'NFR-23',
    category: 'Data',
    name: 'Granular Sensitive Data Access and Encryption at Rest Capabilities',
    description: 'The solution can apply granular access permission and encryption of sensitive data fields, like Sensitive  information, personally identifiable information (PII) , or Tax File Numbers.'
  },
  {
    id: 'NFR-24',
    category: 'Data',
    name: 'Records Lifecycle',
    description: 'Solution can set record archiving and disposal schedules for various types of records and can operationally maintain them with a ability to globally impose a disposal freeze.'
  },
  {
    id: 'NFR-25',
    category: 'Data',
    name: 'Records Management',
    description: 'Solution can preserve integrity of record to ensure that records cannot be changed or to preserve a full version history of record changes.'
  },
  {
    id: 'NFR-26',
    category: 'Data Integrity',
    name: 'Critical Record Change Control',
    description: 'The solution has a workflow or an access model that controls changes to critical (master) records and retain version history and audit log of all the changes.'
  },
  {
    id: 'NFR-27',
    category: 'Data Integrity',
    name: 'Data Integrity',
    description: 'The solution ensures ACID property for all data persistence and use availability and failover mechanism that minimise data loss, detect data corruption and guarantee consistency.'
  },
  {
    id: 'NFR-28',
    category: 'Data Integrity',
    name: 'Duplicate Record Management',
    description: 'The solution has an exception management capability to prevent duplicate records from being created via user interface, batch upload and/or through APIs.'
  },
  {
    id: 'NFR-29',
    category: 'Data Integrity',
    name: 'Timestamp Formats',
    description: 'The system follows the local time zone and date format.'
  },
  {
    id: 'NFR-30',
    category: 'Integration',
    name: 'API Support',
    description: 'The solution comes with a maintained published functional APIs for key process and data integrations. API logs are maintained and accessible to allow effective support of integrations.'
  },
  {
    id: 'NFR-31',
    category: 'Integration',
    name: 'Integration QA',
    description: 'The solution provides adequate SIT test environment and integrated QA or UAT environment.'
  },
  {
    id: 'NFR-32',
    category: 'Implementation',
    name: 'Implementation Methodology',
    description: 'Implementation to be supported by a structured methodology'
  },
  {
    id: 'NFR-33',
    category: 'Implementation',
    name: 'Implementation Resources',
    description: 'Implementation supported by appropriate resources and expertise'
  },
  {
    id: 'NFR-34',
    category: 'Maintainability',
    name: 'Defined Release Model',
    description: 'Solution Providers must have a defined release model and frequency, or issues a notification of irregular releases at least 1 months in advance of the production roll-out.'
  },
  {
    id: 'NFR-35',
    category: 'Maintainability',
    name: 'Test Data Security',
    description: 'The solution includes secure data migration mechanisms with data obfuscation/masking capability for personally identifiable and other sensitive data between production and non-production environments.'
  },
  {
    id: 'NFR-36',
    category: 'Maintainability',
    name: 'Test Environments',
    description: 'The solution provides permanent DEV and UAT environments and has the ability to commission additional environments on request.'
  },
  {
    id: 'NFR-38',
    category: 'Performance',
    name: 'Search - Performance',
    description: 'The solution presents search results in less than 5 seconds, 80% of the time.'
  },
  {
    id: 'NFR-39',
    category: 'Performance',
    name: 'Startup Time',
    description: 'The system loads, authenticates a user session (assuming seamless access is used) and present the home screen within 10 seconds.'
  },
  {
    id: 'NFR-40',
    category: 'Performance',
    name: 'User Action Response Time',
    description: 'The system responds to user requests (excluding views and reports) through the user interface within 5 seconds, 80% of time.'
  },
  {
    id: 'NFR-41',
    category: 'Scalability',
    name: 'Scalability',
    description: 'The solution must be scalable to allow for an increase in number of users over the coming years.'
  },
  {
    id: 'NFR-42',
    category: 'Security',
    name: 'Branded URLs',
    description: 'The solution login URL and any web links are branded with appropriate domains (e.g., discoveryparks.com.au)'
  },
  {
    id: 'NFR-43',
    category: 'Security',
    name: 'Cloud Security',
    description: 'SaaS solution maintain relevant cloud controls matrix and have the entire supply chain independently audited and certified against CSA, Modern Slavery Act 2018, ISO 27001:2013 or their selected control set under ISAE3402/SSAE16 standard.'
  },
  {
    id: 'NFR-44',
    category: 'Security',
    name: 'Cyber Insurance',
    description: 'Supplier\'s insurance includes cyber breach liability coverage of at least AUD $100,000.'
  },
  {
    id: 'NFR-45',
    category: 'Security',
    name: 'Log Integrity',
    description: 'The integrity of system logs and collected access logs is maintained (i.e. administrators cannot delete log entries.'
  },
  {
    id: 'NFR-46',
    category: 'Security',
    name: 'Secure Email Delivery',
    description: 'Solution sends emails using an appropriate domain account (i.e. discoveryparks.com.au, gdaygroup.com.au) or securely delegates emails from a G\'day Group-branded domain with SPF, DKIM and DMARC compliance.'
  },
  {
    id: 'NFR-47',
    category: 'Security',
    name: 'Security Management',
    description: 'Software and SaaS providers operate under a recognised security management framework such as ISO 27001:2013 and NIST CSF.'
  },
  {
    id: 'NFR-48',
    category: 'Supportability',
    name: 'System Logging and Troubleshooting',
    description: 'The solution provides adequate logging and reporting to assist with troubleshooting and problem resolution.'
  },
  {
    id: 'NFR-49',
    category: 'Supportability',
    name: 'Vendor Support',
    description: 'The solution and all the components are under respective vendor support with intention to cease support given at least 18 months in advance.'
  },
  {
    id: 'NFR-50',
    category: 'Supportability',
    name: 'Version and Release Control',
    description: 'The solution has managed releases to ensure the integrity of all software releases with detailed version history is maintained for all modifications in each change.'
  },
  {
    id: 'NFR-51',
    category: 'Supportability',
    name: 'Service Desk Support',
    description: 'The solution provider Service Desk is used for central incident, request and issue management with contractually specified operating hours and SLAs.'
  },
  {
    id: 'NFR-52',
    category: 'Usability',
    name: 'Accessibility',
    description: 'Solution provider ensures that the user interface complies with a minimum of Web Content Accessibility Guidelines 2.0 (http://www.w3.org/TR/2008/REC-WCAG20-20081211/).'
  },
  {
    id: 'NFR-53',
    category: 'Usability',
    name: 'Responsive Design',
    description: 'The solution natively supports multiple form factors like large screen desktops, laptops, mobile phones and tables through responsive web design or similar approach.'
  },
  {
    id: 'NFR-55',
    category: 'Usability',
    name: 'User Language',
    description: 'The solution\'s User Interface is simple, consistent, and use familiar terminology with words, phrases and concepts familiar to the user, rather than system-oriented terms.'
  },
  {
    id: 'NFR-56',
    category: 'Usability',
    name: 'Web Access',
    description: 'The solution is accessible via Internet web services through a standard browser without a need for a dedicated client app.'
  },
  {
    id: 'NFR-57',
    category: 'Usability',
    name: 'Mobile App and OS Compatibility',
    description: 'The system is accessible using a mobile app and compatible with both iOS and Android.'
  },
  {
    id: 'NFR-58',
    category: 'Usability',
    name: 'Enterprise Browser and OS Compatibility',
    description: 'The solution is compatible with Edge and Chrome on Windows (Chromium), iOS and Android.'
  },
  {
    id: 'NFR-59',
    category: 'Usability',
    name: 'Online Help and FAQ',
    description: 'The solution provides on-line help and FAQ pages to assist with use of the system. Online help is searchable.'
  },
  {
    id: 'NFR-60',
    category: 'User Experience',
    name: 'System that\'s easy to use',
    description: 'The system should be intuitive and easy to use, so the users can learn using it quickly and effectively with minimal training'
  },
  {
    id: 'NFR-61',
    category: 'Cyber',
    name: 'Authentication Management',
    description: 'The solution supports SAML v2 federation to Azure AD identity store for user and admin authentication(SSO).'
  },
  {
    id: 'NFR-62',
    category: 'Cyber',
    name: 'Multi-factor Authentication',
    description: 'Multi-factor authentication is available for users authenticating via an in-built authentication protocols (instead of SAML).'
  },
  {
    id: 'NFR-63',
    category: 'Cyber',
    name: 'Data Sovereignty / Australian Hosting and Support',
    description: 'If the data contains any elements of Personal, financial or medical information, the data must be stored, used, accessed and transferred within Australia i.e. the solution must be hosted and supported from Australia.'
  },
  {
    id: 'NFR-64',
    category: 'Cyber',
    name: 'Privacy',
    description: 'The solution supplier has a Privacy Policy that complies with Australian Regulatory Requirements such as Privacy Act and Australian Privacy Principles.'
  },
  {
    id: 'NFR-65',
    category: 'Cyber',
    name: 'Ownership of Data',
    description: 'The use of software or cloud service does not involve any change in data ownership.'
  },
  {
    id: 'NFR-66',
    category: 'Cyber',
    name: 'Data Retention',
    description: 'The vendor solution supports data retention for a period of 7 years'
  },
  {
    id: 'NFR-67',
    category: 'Cyber',
    name: 'Data encryption at rest and during transit',
    description: 'The vendor will encrypt all customer data during transit and at rest with strong cryptographic mechanism, such as AES 256-bit encryption or greater.'
  },
  {
    id: 'NFR-68',
    category: 'Cyber',
    name: 'Incident Management',
    description: 'The vendor has defined incident management plans for handling security incidents within or against its environment.'
  },
  {
    id: 'NFR-69',
    category: 'Cyber',
    name: 'Incident Reporting',
    description: 'The vendor has a process for reporting and investigating security incidents related to customer data (e.g. data breach).'
  },
  {
    id: 'NFR-70',
    category: 'Cyber',
    name: 'Incident Notification',
    description: 'During or after the detection of a security incident, the vendor will notify its customers via secure communications within 4 hours.'
  },
  {
    id: 'NFR-71',
    category: 'Cyber',
    name: 'Vulnerability Management',
    description: 'The solution is periodically and at least annually vulnerability assessed with the supplier remediating any vulnerabilities within two weeks, or within 48 hours if identified as critical by vendors or working exploits exist.'
  },
  {
    id: 'NFR-72',
    category: 'Cyber',
    name: 'Data Classification',
    description: 'The solution has data classification policy that identifies personal information and customer data (E.g., public, internal only, confidential, restricted)'
  },
  {
    id: 'NFR-74',
    category: 'Cyber',
    name: 'Personal Information',
    description: 'Does the application store and/or process personal information (as defined in the Privacy Act 1988)?'
  },
];
