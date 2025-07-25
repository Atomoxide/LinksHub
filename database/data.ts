import { IDBData, IData, ISidebar } from '../types'
import * as DB from 'database'
import { v4 as uuidv4 } from 'uuid'
export const database: IData[][] = Object.values(DB).map((item: IDBData[]) =>
  item.map((subcat: IDBData) => ({ ...subcat, id: uuidv4() }))
)
export const sidebarData: ISidebar[] = [
  {
    category: 'guide',
    subcategory: [
      { name: 'web_guide', url: '/web_guide', resources: DB.webGuide },
      { name: 'video_guide', url: '/video_guide', resources: DB.videoGuide }
    ]
  },
  {
    category: 'gear',
    subcategory: [
      { name: 'gear_build', url: '/gear_build', resources: DB.gearBuild },
      { name: 'loot_schedule', url: '/loot_schedule', resources: DB.lootSchedule }
    ]
  },
  {
    category: 'hunt',
    subcategory: [
      { name: 'hunt_schedule', url: '/hunt_schedule', resources: DB.huntSchedule },
    ]
  },
  // {
  //   category: 'frontend',
  //   subcategory: [
  //     { name: 'next js', url: '/next_js', resources: DB.next },
  //     { name: 'vue js', url: '/vue_js', resources: DB.vuejs },
  //     {
  //       name: '3D libraries',
  //       url: '/three_d_libraries',
  //       resources: DB._3dLibraries,
  //     },
  //     { name: 'images', url: '/images', resources: DB.images },
  //     { name: 'fonts', url: '/fonts', resources: DB.fonts },
  //     { name: 'css games', url: '/css_games', resources: DB.cssGames },
  //     { name: 'react', url: '/react', resources: DB.react },
  //     {
  //       name: 'illustrations',
  //       url: '/illustrations',
  //       resources: DB.illustrations,
  //     },
  //     { name: 'animations', url: '/animations', resources: DB.animations },
  //     { name: 'icons', url: '/icons', resources: DB.icons },
  //     {
  //       name: 'themes & templates',
  //       url: '/themes_and_templates',
  //       resources: DB.themesTemplates,
  //     },
  //     {
  //       name: 'UI Generators',
  //       url: '/ui_generators',
  //       resources: DB.uiGenerators,
  //     },
  //     {
  //       name: 'online code editors',
  //       url: '/online_code_editors',
  //       resources: DB.onlineCodeEditors,
  //     },
  //     {
  //       name: 'accessibility',
  //       url: '/accessibility',
  //       resources: DB.accessibility,
  //     },
  //     {
  //       name: 'ui Libraries',
  //       url: '/ui_libraries',
  //       resources: DB.uilibraries,
  //     },
  //     { name: 'angular', url: '/angular', resources: DB.angular },
  //     {
  //       name: 'js-Chart Libraries',
  //       url: '/js_chart_libraries',
  //       resources: DB.jsChartLibraries,
  //     },
  //   ],
  // },
  // {
  //   category: 'backend',
  //   subcategory: [
  //     {
  //       name: 'architecture',
  //       url: '/architecture',
  //       resources: DB.architecture,
  //     },
  //     { name: 'validation', url: '/validation', resources: DB.validation },
  //     { name: 'security', url: '/security', resources: DB.security },
  //     {
  //       name: 'authentication',
  //       url: '/authentication',
  //       resources: DB.authentication,
  //     },
  //     {
  //       name: 'email providers',
  //       url: '/email_providers',
  //       resources: DB.emailProviders,
  //     },
  //     { name: 'caching', url: '/caching', resources: DB.caching },
  //     { name: 'testing', url: '/testing', resources: DB.testing },
  //     {
  //       name: 'system design',
  //       url: '/system_design',
  //       resources: DB.systemDesign,
  //     },
  //     { name: 'database', url: '/database', resources: DB.database },
  //     { name: 'backend as a service', url: '/backend_as_a_service', resources: DB.backendAsAService },
  //     {
  //       name: 'APIs',
  //       url: '/api',
  //       resources: DB.api,
  //     },
  //     {
  //       name: 'Nest.js',
  //       url: '/nest_js',
  //       resources: DB.nestJs,
  //     },
  //   ],
  // },
  // {
  //   category: 'Backend-Frameworks',
  //   subcategory: [
  //     {
  //       name: 'Spring Boot',
  //       url: '/spring_boot',
  //       resources: DB.springBoot,
  //     },
  //   ],
  // },
  // {
  //   category: 'CMS-toolkit',
  //   subcategory: [
  //     {
  //       name: 'Traditional CMS',
  //       url: '/traditional_cms',
  //       resources: DB.traditional_cms,
  //     },
  //     {
  //       name: 'Headless CMS',
  //       url: '/headless_cms',
  //       resources: DB.headless_cms,
  //     },
  //   ],
  // },
  // {
  //   category: 'languages',
  //   subcategory: [
  //     {
  //       name: 'General Web Fundamentals',
  //       url: '/general_web_fundamentals',
  //       resources: DB.generalWebFundamentals,
  //     },
  //     { name: 'JavaScript', url: '/javascript', resources: DB.javascript },
  //     { name: 'Python', url: '/python', resources: DB.python },
  //     { name: 'Csharp (C#)', url: '/csharp', resources: DB.csharp },
  //     { name: 'Go', url: '/golang', resources: DB.golang },
  //     { name: 'TypeScript', url: '/typescript', resources: DB.typescript },
  //     { name: 'Ruby', url: '/ruby', resources: DB.ruby },
  //     {
  //       name: 'C Programming',
  //       url: '/c_programming',
  //       resources: DB.CProgramming,
  //     },
  //     { name: 'C++ Programming', url: '/cpp', resources: DB.cpp },
  //     { name: 'Java', url: '/java', resources: DB.java },
  //     { name: 'Kotlin', url: '/kotlin', resources: DB.kotlin },
  //     { name: 'Rust', url: '/rust', resources: DB.Rust },
  //     { name: 'Dart', url: '/dart', resources: DB.dart },
  //     { name: 'Solidity', url: '/solidity', resources: DB.solidity },
  //     { name: 'Swift', url: '/swift', resources: DB.swift },
  //     { name: 'CSS', url: '/css', resources: DB.css },
  //     { name: 'PHP', url: '/php', resources: DB.swift },
  //   ],
  // },
  // {
  //   category: 'mobile',
  //   subcategory: [{ name: 'Android', url: '/android', resources: DB.android }],

  // },
  // {
  //   category: 'open-source',
  //   subcategory: [
  //     {
  //       name: 'Articles',
  //       url: '/articles',
  //       resources: DB.openSourceArticles,
  //     },
  //     {
  //       name: 'Hacktoberfest',
  //       url: '/hacktoberfest',
  //       resources: DB.openSourceHacktoberfest,
  //     },
  //     {
  //       name: 'Programs',
  //       url: '/os_programs',
  //       resources: DB.openSourcePrograms,
  //     },
  //     {
  //       name: 'Projects',
  //       url: '/projects',
  //       resources: DB.openSourceProjects,
  //     },
  //     {
  //       name: 'Tools',
  //       url: '/tools',
  //       resources: DB.openSourceTools,
  //     },
  //     {
  //       name: 'Tutorials',
  //       url: '/tutorials',
  //       resources: DB.openSourceTutorials,
  //     },
  //   ],
  // },
  // {
  //   category: 'design',
  //   subcategory: [
  //     {
  //       name: 'design inspiration',
  //       url: '/design_inspiration',
  //       resources: DB.designInspirations,
  //     },
  //     {
  //       name: 'color tools',
  //       url: '/color_tools',
  //       resources: DB.colorTools,
  //     },
  //     {
  //       name: 'design tutorials',
  //       url: '/design_tutorials',
  //       resources: DB.designTutorials,
  //     },
  //   ],
  // },
  // {
  //   category: 'devops',
  //   subcategory: [
  //     {
  //       name: 'Automation Tools',
  //       url: '/automation_tools',
  //       resources: DB.automationTools,
  //     },
  //     {
  //       name: 'CI/CD',
  //       url: '/cicd',
  //       resources: DB.cicd,
  //     },
  //     {
  //       name: 'Configuration Management',
  //       url: '/configuration_management',
  //       resources: DB.configMang,
  //     },
  //     {
  //       name: 'Containerization and Orchestration',
  //       url: '/containerization_and_orchestration',
  //       resources: DB.contOrch,
  //     },
  //     {
  //       name: 'DevOps Life Cycle',
  //       url: '/devops_life_cycle',
  //       resources: DB.devopsLifecycle,
  //     },
  //     {
  //       name: 'DevOps Methodologies',
  //       url: '/devops_methodologies',
  //       resources: DB.devopsMethodologies,
  //     },
  //     { name: 'docker', url: '/docker', resources: DB.docker },
  //     { name: 'jenkins', url: '/jenkins', resources: DB.jenkins },
  //     {
  //       name: 'kubernetes',
  //       url: '/kubernetes',
  //       resources: DB.kubernetes,
  //     },
  //     {
  //       name: 'microservices',
  //       url: '/microservices',
  //       resources: DB.microservices,
  //     },
  //     {
  //       name: 'Monitoring and Loggging',
  //       url: '/monitoring_and_logging',
  //       resources: DB.monitorLogging,
  //     },
  //     {
  //       name: 'IaC',
  //       url: '/iac',
  //       resources: DB.iac,
  //     },
  //   ],
  // },
  // {
  //   category: 'ai',
  //   subcategory: [
  //     {
  //       name: 'artificial intelligence',
  //       url: '/artificial_intelligence',
  //       resources: DB.artificialIntelligence,
  //     },
  //     {
  //       name: 'machine learning',
  //       url: '/machine_learning',
  //       resources: DB.ml,
  //     },
  //     { name: 'data science', url: '/data_science', resources: DB.dataScience },
  //     {
  //       name: 'deep learning',
  //       url: '/deep_learning',
  //       resources: DB.deepLearning,
  //     },
  //     {
  //       name: 'NLP',
  //       url: '/natural_language_processing',
  //       resources: DB.nlp,
  //     },
  //   ],
  // },
  // {
  //   category: 'ai-tools',
  //   subcategory: [
  //     {
  //       name: 'design',
  //       url: '/design',
  //       resources: DB.design,
  //     },
  //     {
  //       name: 'blog writing',
  //       url: '/blog_writing',
  //       resources: DB.blog_writing,
  //     },
  //     {
  //       name: 'chat bots',
  //       url: '/chat_bots',
  //       resources: DB.chat_bots,
  //     },
  //     { name: 'tensorflow', url: '/tensorflow', resources: DB.tensorflow },
  //   ],
  // },
  // {
  //   category: 'cyber-security',
  //   subcategory: [
  //     {
  //       name: 'Offensive security',
  //       url: '/offensive_security',
  //       resources: DB.offensive_security,
  //     },
  //     {
  //       name: 'Defensive Security',
  //       url: '/defensive_security',
  //       resources: DB.defensive_security,
  //     },
  //     {
  //       name: 'Malware Analysis',
  //       url: '/malware_analysis',
  //       resources: DB.malware_analysis,
  //     },
  //     {
  //       name: 'Web Security',
  //       url: '/web_security',
  //       resources: DB.web_security,
  //     },
  //   ],
  // },

  // {
  //   category: 'cloud-computing',
  //   subcategory: [
  //     { name: 'google cloud', url: '/gcp', resources: DB.gcp },
  //     {
  //       name: 'AWS cloud',
  //       url: '/aws',
  //       resources: DB.aws,
  //     },
  //     { name: 'Microsoft cloud', url: '/azure', resources: DB.azure },
  //     { name: 'Oracle cloud', url: '/oracle', resources: DB.oracle },
  //     { name: 'IBM cloud', url: '/ibm', resources: DB.ibm },
  //   ],
  // },
  // {
  //   category: 'internet-of-things',
  //   subcategory: [
  //     { name: 'coursera', url: '/coursera', resources: DB.coursera },
  //     { name: 'raspberrypi', url: '/raspberrypi', resources: DB.raspberrypi },
  //   ],
  // },
  // {
  //   category: 'resources',
  //   subcategory: [
  //     { name: 'blogs', url: '/blogs', resources: DB.blogs },
  //     {
  //       name: 'Docs Generator',
  //       url: '/docsgenerator',
  //       resources: DB.docsgenerator,
  //     },
  //     {
  //       name: 'Official Docs',
  //       url: '/officialdocs',
  //       resources: DB.officialdocs,
  //     },
  //     { name: 'hosting', url: '/hosting', resources: DB.hosting },
  //     { name: 'e-book', url: '/e_book', resources: DB.ebook },
  //     { name: 'project ideas', url: '/project_ideas', resources: DB.project },
  //     { name: 'Static Site Generators', url: '/ssg', resources: DB.ssg },
  //   ],
  // },
  // {
  //   category: 'tech-articles',
  //   subcategory: [
  //     {
  //       name: 'react articles',
  //       url: '/react_articles',
  //       resources: DB.reactArticles,
  //     },
  //   ],
  // },
  // {
  //   category: 'newsletters',
  //   subcategory: [
  //     {
  //       name: 'javascript',
  //       url: '/jsLetters',
  //       resources: DB.jsLetters,
  //     },
  //     {
  //       name: 'python',
  //       url: '/pythonLetters',
  //       resources: DB.pythonLetters,
  //     },
  //     {
  //       name: 'java',
  //       url: '/javaLetters',
  //       resources: DB.javaLetters,
  //     },
  //     { 
  //       name: 'devops',
  //       url: '/devopsLetters',
  //       resources: DB.devopsLetters,
  //     }
  //   ],
  // },
  // {
  //   category: 'theory-of-computation',
  //   subcategory: [
  //     {
  //       name: 'Computer Science',
  //       url: '/computer_science',
  //       resources: DB.computerScience,
  //     },
  //   ],
  // },
  // {
  //   category: 'quality-assurance',
  //   subcategory: [
  //     {
  //       name: 'Software Testing',
  //       url: '/software_testing',
  //       resources: DB.softwareTesting,
  //     },
  //   ],
  // },
  // {
  //   category: 'game-development',
  //   subcategory: [
  //     {
  //       name: 'Game Development Fundamentals',
  //       url: '/game_dev_fundamentals',
  //       resources: DB.gameDevFundamentals,
  //     },
  //     {
  //       name: 'Godot',
  //       url: '/godot',
  //       resources: DB.godot,
  //     },
  //     {
  //       name: 'Unreal Engine',
  //       url: '/unreal_engine',
  //       resources: DB.unrealEngine,
  //     },
  //   ],
  // },
  // {
  //   category: 'data-structures',
  //   subcategory: [
  //     { name: 'DSA Articles', url: '/dsa_articles', resources: DB.dsaArticles },
  //     {
  //       name: 'DSA Tutorials',
  //       url: '/dsa_tutorials',
  //       resources: DB.dsaTutorials,
  //     },
  //     { name: 'DSA Courses', url: '/dsa_courses', resources: DB.dsaCourses },
  //   ],
  // },
  // {
  //   category: 'competitive-programming',
  //   subcategory: [
  //     { name: 'Platforms', url: '/cp_platforms', resources: DB.cpPlatforms },
  //     { name: 'Tutorials', url: '/cp_tutorials', resources: DB.cpTutorials },
  //     { name: 'Helpers', url: '/cp_helpers', resources: DB.cpHelpers },
  //   ],
  // },
  // {
  //   category: 'Placement-Prep',
  //   subcategory: [
  //     {
  //       name: 'Interview Preparation',
  //       url: '/interview_preparation',
  //       resources: DB.interviewPreparation,
  //     },
  //     {
  //       name: 'Job Portals',
  //       url: '/job_portals',
  //       resources: DB.jobPortals,
  //     },
  //     {
  //       name: 'Resume Building',
  //       url: '/resume_building',
  //       resources: DB.resumeBuilding,
  //     },
  //     {
  //       name: 'Portfolio Building',
  //       url: '/portfolio_building',
  //       resources: DB.portfolioBuilding,
  //     },
  //     {
  //       name: 'Cover Letters',
  //       url: '/cover_letters',
  //       resources: DB.coverLetters,
  //     },
  //     {
  //       name: 'Certifications',
  //       url: '/certifications',
  //       resources: DB.certifications,
  //     },
  //   ],
  // },
  // {
  //   category: 'technical-writing',
  //   subcategory: [
  //     {
  //       name: 'Technical Writing Tools',
  //       url: '/technical_writing_tools',
  //       resources: DB.technicalWritingTools,
  //     },
  //   ],
  // },
  // {
  //   category: 'BlockChain',
  //   subcategory: [
  //     {
  //       name: 'Smart Contracts',
  //       url: '/smartcontracts',
  //       resources: DB.smartContracts,
  //     },
  //     {
  //       name: 'Truffle',
  //       url: '/truffle',
  //       resources: DB.truffle,
  //     },
  //     {
  //       name: 'Hardhat',
  //       url: '/hardhat',
  //       resources: DB.hardhat,
  //     },
  //     {
  //       name: 'Ethers',
  //       url: '/ethers',
  //       resources: DB.ethers,
  //     },
  //     {
  //       name: 'Web3 & Metaverse',
  //       url: '/web3_metaverse',
  //       resources: DB.web3metaverse,
  //     },
  //   ],
  // },
  // {
  //   category: 'ethical-hacking',
  //   subcategory: [
  //     {
  //       name: 'cryptography attacks',
  //       url: '/cryptography_attacks',
  //       resources: DB.cryptographyAttacks,
  //     },
  //     {
  //       name: 'malware and payload development',
  //       url: '/malware_and_payload_development',
  //       resources: DB.malwareAndPayloadDevelopment,
  //     },
  //     {
  //       name: 'Social Engineering',
  //       url: '/social_engineering',
  //       resources: DB.socialEngineering,
  //     },
  //     {
  //       name: 'wireless hacking',
  //       url: '/wireless_hacking',
  //       resources: DB.wirelesshacking,
  //     },
  //   ],
  // },
  // {
  //   category: 'other',
  //   subcategory: [
  //     { name: 'FinTech', url: '/fintech', resources: DB.fintech },
  //     { name: 'events', url: '/events', resources: DB.events },
  //     { name: 'Github', url: '/github', resources: DB.github },
  //     { name: 'Git', url: '/git', resources: DB.git },
  //     { name: 'Dev Tools', url: '/devtools', resources: DB.devtools },
  //     { name: 'Podcasts', url: '/podcasts', resources: DB.podcasts },
  //     {
  //       name: 'Other Resources',
  //       url: '/other_resources',
  //       resources: DB.otherResources,
  //     },
  //     { name: 'Communities', url: '/communities', resources: DB.communities },
  //     { name: 'Roadmaps', url: '/roadmaps', resources: DB.roadmaps },
  //     { name: 'Domains', url: '/domains', resources: DB.domains },
  //     {
  //       name: 'Text Formatting',
  //       url: '/text_formatting',
  //       resources: DB.textFormatting,
  //     },
  //   ],
  // },
]

export const subCategories = sidebarData.flatMap(({ category, subcategory }) =>
  subcategory.map(({ url }) => ({
    category,
    subcategory: url.replace('/', ''),
  }))
)

export const searchOptions = sidebarData.flatMap(({ category, subcategory }) =>
  subcategory.map((subcat) => ({
    ...subcat,
    category,
  }))
)
