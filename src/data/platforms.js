export const platforms = [
  {
    id: 1,
    name: 'WorkVivo',
    logo: '🚀',
    tagline: 'Employee Experience Platform',
    bestFor: 'Large enterprises with distributed deskless workforce',
    pricing: {
      starter: 'Custom',
      professional: 'Custom',
      enterprise: 'Custom',
      note: 'Pricing based on employee count, starts ~$5-8 per user/month'
    },
    features: {
      // Must Haves
      nativeApp: { has: true, rating: 5, note: 'iOS & Android with offline support' },
      integration: { has: true, rating: 5, note: 'Microsoft 365, Google Workspace, Workday, SAP' },
      permissions: { has: true, rating: 5, note: 'Advanced segmentation & targeting by location/role' },
      approvalProcess: { has: true, rating: 5, note: 'Multi-level approval workflows' },
      externalLinks: { has: true, rating: 5, note: 'Deep linking to any system' },
      videoEmbedding: { has: true, rating: 5, note: 'Native video hosting + YouTube/Vimeo' },
      socialEngagement: { has: true, rating: 5, note: 'Likes, comments, shares, reactions' },
      personalEmail: { has: true, rating: 5, note: 'Any email for login via SSO or direct' },
      surveys: { has: true, rating: 5, note: 'Surveys, polls, quizzes with full analytics & anonymous options' },
      analytics: { has: true, rating: 5, note: 'Comprehensive engagement analytics dashboard' },
      
      // Optional
      rewards: { has: true, rating: 5, note: 'Built-in rewards & redemption catalog' },
      recognition: { has: true, rating: 5, note: 'Peer-to-peer & manager recognition' },
      serviceAwards: { has: true, rating: 4, note: 'Milestone recognition automation' },
      peerShoutouts: { has: true, rating: 5, note: 'Public praise with hashtags' },
      managerRecognition: { has: true, rating: 5, note: 'Manager spotlight features' },
      documentStorage: { has: true, rating: 4, note: 'Document library with version control' }
    },
    pros: [
      'Purpose-built for deskless workers',
      'Exceptional mobile-first experience',
      'Strong social features',
      'Comprehensive recognition tools'
    ],
    cons: [
      'Premium pricing',
      'Custom pricing requires sales process',
      'Can be overwhelming for smaller teams'
    ],
    overallScore: 95
  },
  {
    id: 2,
    name: 'Staffbase',
    logo: '📱',
    tagline: 'Employee Communications Platform',
    bestFor: 'Mid-to-large organizations with non-desk workforce',
    pricing: {
      starter: 'Custom',
      professional: 'Custom',
      enterprise: 'Custom',
      note: 'Pricing on request, typically $3-7 per user/month'
    },
    features: {
      nativeApp: { has: true, rating: 5, note: 'iOS & Android with branded white-label options' },
      integration: { has: true, rating: 5, note: 'Microsoft, Google, Slack, Teams, Workday' },
      permissions: { has: true, rating: 5, note: 'Role-based access & audience targeting' },
      approvalProcess: { has: true, rating: 5, note: 'Editorial workflow with multi-stage approval' },
      externalLinks: { has: true, rating: 5, note: 'External system integration' },
      videoEmbedding: { has: true, rating: 5, note: 'Video hosting + third-party embeds' },
      socialEngagement: { has: true, rating: 4, note: 'Comments, likes, follows' },
      personalEmail: { has: true, rating: 5, note: 'Email or SSO login' },
      surveys: { has: true, rating: 5, note: 'Advanced surveys with analytics & anonymity' },
      analytics: { has: true, rating: 5, note: 'Deep analytics on content engagement' },
      
      rewards: { has: false, rating: 0, note: 'Not built-in, requires integration' },
      recognition: { has: true, rating: 3, note: 'Basic recognition via plugins' },
      serviceAwards: { has: false, rating: 0, note: 'Not available' },
      peerShoutouts: { has: true, rating: 3, note: 'Via comments/posts' },
      managerRecognition: { has: true, rating: 3, note: 'Via posts and announcements' },
      documentStorage: { has: true, rating: 5, note: 'Full document management system' }
    },
    pros: [
      'Excellent mobile app with white-label options',
      'Strong communication & publishing tools',
      'Great for newsletters and announcements',
      'Robust analytics'
    ],
    cons: [
      'Limited built-in recognition features',
      'No native rewards system',
      'Pricing can be high for smaller orgs'
    ],
    overallScore: 87
  },
  {
    id: 3,
    name: 'Reward Gateway',
    logo: '🎁',
    tagline: 'Employee Engagement & Recognition',
    bestFor: 'Organizations prioritizing recognition and rewards',
    pricing: {
      starter: 'Custom',
      professional: 'Custom',
      enterprise: 'Custom',
      note: 'Platform fee + per employee, typically $3-6 per user/month'
    },
    features: {
      nativeApp: { has: true, rating: 5, note: 'iOS & Android apps' },
      integration: { has: true, rating: 4, note: 'HR systems, Slack, Teams' },
      permissions: { has: true, rating: 4, note: 'Group & department-based access' },
      approvalProcess: { has: true, rating: 4, note: 'Manager approval for communications' },
      externalLinks: { has: true, rating: 4, note: 'Benefits portal integration' },
      videoEmbedding: { has: true, rating: 4, note: 'Embedded video support' },
      socialEngagement: { has: true, rating: 5, note: 'Social wall, comments, reactions' },
      personalEmail: { has: true, rating: 5, note: 'Any email login supported' },
      surveys: { has: true, rating: 4, note: 'Pulse surveys with analytics' },
      analytics: { has: true, rating: 4, note: 'Engagement & recognition analytics' },
      
      rewards: { has: true, rating: 5, note: 'Core feature - extensive rewards catalog' },
      recognition: { has: true, rating: 5, note: 'Comprehensive peer & manager recognition' },
      serviceAwards: { has: true, rating: 5, note: 'Automated milestone awards' },
      peerShoutouts: { has: true, rating: 5, note: 'Social recognition feed' },
      managerRecognition: { has: true, rating: 5, note: 'Manager nomination & awards' },
      documentStorage: { has: true, rating: 3, note: 'Basic document sharing' }
    },
    pros: [
      'Best-in-class recognition & rewards',
      'Strong employee benefits integration',
      'Excellent social engagement features',
      'Great for building company culture'
    ],
    cons: [
      'Less focus on pure communications',
      'Rewards program requires budget allocation',
      'Can be complex to set up initially'
    ],
    overallScore: 89
  },
  {
    id: 4,
    name: 'Microsoft Viva Engage',
    logo: '💼',
    tagline: 'Communities and Conversations',
    bestFor: 'Microsoft 365 organizations',
    pricing: {
      starter: 'Included in M365',
      professional: '$12-20 per user/month',
      enterprise: '$35-57 per user/month',
      note: 'Part of Microsoft 365 suite (Viva Suite pricing)'
    },
    features: {
      nativeApp: { has: true, rating: 4, note: 'iOS & Android, integrated with Teams mobile' },
      integration: { has: true, rating: 5, note: 'Deep Microsoft 365 integration' },
      permissions: { has: true, rating: 4, note: 'Groups, communities, private channels' },
      approvalProcess: { has: true, rating: 3, note: 'Basic approval via Power Automate' },
      externalLinks: { has: true, rating: 5, note: 'SharePoint, Teams, Office apps' },
      videoEmbedding: { has: true, rating: 5, note: 'Stream, Teams video integration' },
      socialEngagement: { has: true, rating: 4, note: 'Likes, comments, shares in communities' },
      personalEmail: { has: true, rating: 3, note: 'Primarily Azure AD / M365 accounts' },
      surveys: { has: true, rating: 4, note: 'Forms integration, basic polls' },
      analytics: { has: true, rating: 4, note: 'Viva Insights analytics' },
      
      rewards: { has: true, rating: 3, note: 'Via Viva Goals & third-party integrations' },
      recognition: { has: true, rating: 4, note: 'Praise in Viva Engage & Teams' },
      serviceAwards: { has: false, rating: 0, note: 'Requires third-party add-on' },
      peerShoutouts: { has: true, rating: 4, note: 'Community posts & praise badges' },
      managerRecognition: { has: true, rating: 3, note: 'Via posts and reactions' },
      documentStorage: { has: true, rating: 5, note: 'Full SharePoint integration' }
    },
    pros: [
      'Already included if using Microsoft 365',
      'Seamless Teams/SharePoint integration',
      'No additional login required',
      'Enterprise-grade security'
    ],
    cons: [
      'Personal email login limited',
      'Less mobile-first for deskless',
      'Recognition features not as robust',
      'Can feel corporate/less engaging'
    ],
    overallScore: 78
  },
  {
    id: 5,
    name: 'Simpplr',
    logo: '🌐',
    tagline: 'Modern Intranet Platform',
    bestFor: 'Organizations seeking modern intranet with comms tools',
    pricing: {
      starter: 'Custom',
      professional: 'Custom',
      enterprise: 'Custom',
      note: 'Starts around $5-10 per user/month based on features'
    },
    features: {
      nativeApp: { has: true, rating: 4, note: 'iOS & Android apps' },
      integration: { has: true, rating: 5, note: 'Salesforce, Google, Microsoft, Slack' },
      permissions: { has: true, rating: 5, note: 'Advanced audience segmentation' },
      approvalProcess: { has: true, rating: 4, note: 'Content approval workflows' },
      externalLinks: { has: true, rating: 5, note: 'SSO & app integrations' },
      videoEmbedding: { has: true, rating: 5, note: 'Native video + embeds' },
      socialEngagement: { has: true, rating: 4, note: 'Social feeds, reactions, follows' },
      personalEmail: { has: true, rating: 4, note: 'Email or SSO login' },
      surveys: { has: true, rating: 4, note: 'Polls & surveys with analytics' },
      analytics: { has: true, rating: 5, note: 'AI-powered analytics & insights' },
      
      rewards: { has: false, rating: 0, note: 'Not built-in' },
      recognition: { has: true, rating: 3, note: 'Basic social recognition' },
      serviceAwards: { has: false, rating: 0, note: 'Not available' },
      peerShoutouts: { has: true, rating: 3, note: 'Via social feed posts' },
      managerRecognition: { has: true, rating: 3, note: 'Via announcements' },
      documentStorage: { has: true, rating: 5, note: 'Advanced document management with AI search' }
    },
    pros: [
      'Modern, beautiful interface',
      'AI-powered search and personalization',
      'Excellent content management',
      'Strong intranet capabilities'
    ],
    cons: [
      'No built-in rewards system',
      'Recognition features basic',
      'More intranet than engagement platform',
      'Premium pricing'
    ],
    overallScore: 82
  }
];

export const featureCategories = {
  mustHave: [
    { key: 'nativeApp', label: 'Native Mobile App', weight: 10 },
    { key: 'integration', label: 'System Integration', weight: 9 },
    { key: 'permissions', label: 'Permission-Based Targeting', weight: 10 },
    { key: 'approvalProcess', label: 'Approval Workflow', weight: 9 },
    { key: 'externalLinks', label: 'External System Links', weight: 7 },
    { key: 'videoEmbedding', label: 'Video Embedding', weight: 8 },
    { key: 'socialEngagement', label: 'Social Engagement', weight: 9 },
    { key: 'personalEmail', label: 'Personal Email Login', weight: 10 },
    { key: 'surveys', label: 'Surveys & Polls', weight: 8 },
    { key: 'analytics', label: 'Analytics', weight: 8 }
  ],
  optional: [
    { key: 'rewards', label: 'Rewards Program', weight: 5 },
    { key: 'recognition', label: 'Recognition System', weight: 6 },
    { key: 'serviceAwards', label: 'Service Awards', weight: 4 },
    { key: 'peerShoutouts', label: 'Peer Shoutouts', weight: 5 },
    { key: 'managerRecognition', label: 'Manager Recognition', weight: 5 },
    { key: 'documentStorage', label: 'Document Storage', weight: 4 }
  ]
};
