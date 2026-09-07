import { SkillModule, ReverseEngAnalysis } from '../types';

export const SKILL_MODULES: SkillModule[] = [
  {
    id: 'app-development',
    moduleNumber: '01',
    title: 'App Development',
    icon: 'Smartphone',
    description: 'Building functional, responsive and reliable mobile applications with deep focus on offline-first reliability and responsive interactions.',
    technologies: [
      { name: 'Flutter', levelDescription: 'Cross-platform Mobile Framework', badge: 'Primary' },
      { name: 'Dart', levelDescription: 'Object-Oriented Client Language', badge: 'Core' },
      { name: 'Android SDK', levelDescription: 'Platform APIs & Lifecycle Management' },
      { name: 'SQLite', levelDescription: 'Local Relational Database Engine' },
      { name: 'REST API', levelDescription: 'Client-Server Communication & Sync' },
      { name: 'Local Storage', levelDescription: 'Key-Value & Encrypted Preferences' },
      { name: 'State Management', levelDescription: 'Predictable Reactive Data Flow (Provider/Riverpod)' }
    ],
    focusAreas: [
      'Offline-First Data Architecture',
      'Battery & Doze Mode Lifecycle Optimization',
      'Native Background Services & Local Alarms',
      'Smooth 60FPS UI Rendering & Animations',
      'Local-to-Cloud Bi-directional Sync'
    ],
    previewType: 'app'
  },
  {
    id: 'web-development',
    moduleNumber: '02',
    title: 'Web Development',
    icon: 'Layout',
    description: 'Creating responsive web experiences with modern frontend technologies, robust TypeScript architectures, and sub-second load times.',
    technologies: [
      { name: 'React', levelDescription: 'Modern Component-Driven UI Library', badge: 'Core' },
      { name: 'TypeScript', levelDescription: 'Type-Safe Application Development', badge: 'Standard' },
      { name: 'JavaScript (ESNext)', levelDescription: 'Modern Web Runtime Standards' },
      { name: 'HTML5 & Semantic Web', levelDescription: 'Accessible DOM Structures' },
      { name: 'CSS3 & Tailwind CSS', levelDescription: 'Atomic, High-Performance Styling' },
      { name: 'Vite', levelDescription: 'Instant Dev Server & Bundling Engine' },
      { name: 'Git & GitHub', levelDescription: 'Version Control & Release Workflows' }
    ],
    focusAreas: [
      'Component-Based Modular Architecture',
      'Client-Side Routing & Page Transitions',
      'Zero-Layout-Shift Performance Engineering',
      'Responsive Touch & Desktop Usability',
      'Clean Code & Reusable Pattern Design'
    ],
    previewType: 'web'
  },
  {
    id: 'uiux-design',
    moduleNumber: '03',
    title: 'UI/UX Design',
    icon: 'Palette',
    description: 'Designing interfaces that balance usability, clarity and visual consistency, grounded in mathematical scales and WCAG contrast rules.',
    technologies: [
      { name: 'Design System', levelDescription: 'Semantic Tokens & Reusable UI Kits', badge: 'Core' },
      { name: 'User Flow', levelDescription: 'Frictionless Task Journeys' },
      { name: 'Wireframe', levelDescription: 'Low-Fidelity Structural Layouts' },
      { name: 'Interactive Prototype', levelDescription: 'Realistic Micro-interaction Testing' },
      { name: 'Responsive UI', levelDescription: 'Adaptive Desktop, Tablet & Mobile Grids' },
      { name: 'Usability Engineering', levelDescription: 'Cognitive Load Reduction & WCAG AA/AAA' }
    ],
    focusAreas: [
      'Mathematical 1.25 Modular Typography Scale',
      'Hierarchical Spacing & Nested Radius Math',
      'Strict Dark/Light Mode Contrast Calibration',
      'Micro-interactions & Purposeful Motion Feedback',
      'Accessible Forms & Uncluttered Data Views'
    ],
    previewType: 'uiux'
  },
  {
    id: 'reverse-engineering',
    moduleNumber: '04',
    title: 'Reverse Engineering',
    icon: 'Terminal',
    description: 'Exploring how software works internally through structured analysis, binary breakdown, manifest auditing, and architectural debugging.',
    technologies: [
      { name: 'Static Analysis', levelDescription: 'Bytecode & Decompiled Source Inspection', badge: 'Specialist' },
      { name: 'Dynamic Analysis', levelDescription: 'Runtime Behavior & Memory Tracing' },
      { name: 'Debugging', levelDescription: 'Breakpoints, Call Stacks & State Inspection' },
      { name: 'APK Analysis', levelDescription: 'DEX, Resources & Manifest Validation' },
      { name: 'Binary Analysis', levelDescription: 'ELF Headers, Native Libraries & Architecture' },
      { name: 'Network Analysis', levelDescription: 'Traffic Inspection & SSL Pinning Architecture' },
      { name: 'Code Understanding', levelDescription: 'Decompilation Pattern Recognition' }
    ],
    focusAreas: [
      'Dalvik Bytecode & Smali Instruction Flow',
      'AOSP AndroidManifest.xml Security Audit',
      'Flutter AOT Snapshot vs Native Bridge Understanding',
      'Cryptographic Key Storage Vulnerability Audits',
      'System Call & Network Packet Telemetry'
    ],
    previewType: 'reverse'
  }
];

export const SKILL_INTERACTION_LABELS: Record<string, string> = {
  'Flutter': 'Mobile Application Development',
  'Dart': 'Fast, Sound Object-Oriented Logic',
  'React': 'Modern Web Interface',
  'TypeScript': 'Strictly Typed Enterprise Frontend',
  'UI/UX Design': 'User-centered Interface Design',
  'Design System': 'Scalable Tokens & Unified Components',
  'Reverse Engineering': 'Software Analysis & Understanding',
  'Static Analysis': 'Code Structure & Vulnerability Inspection',
  'SQLite': 'Embedded Zero-Network Relational Storage',
  'Vite': 'Modern Sub-Second HMR & Production Builds'
};

export const REVERSE_ENG_LAB_DATA: ReverseEngAnalysis = {
  target: 'StudyMate.apk',
  packageId: 'com.example.studymate',
  architecture: 'Flutter / Dart / ARM64',
  components: ['Android Native Shell', 'Dart AOT Engine', 'SQLite Provider', 'Google Drive OAuth'],
  staticItems: [
    { name: 'AndroidManifest.xml', status: 'AUDITED', detail: '3 Permissions: INTERNET, ALARM_WAKE, NOTIFICATIONS. No insecure broadcast receivers.' },
    { name: 'classes.dex', status: 'VERIFIED', detail: 'Standard Flutter Android Activity loader. Zero telemetry SDKs detected.' },
    { name: 'Assets & Fonts', status: 'OPTIMIZED', detail: 'SVGs converted to vector paths, bundled PlusJakartaSans font files.' },
    { name: 'Native Libraries (.so)', status: 'ARM64-V8A', detail: 'libflutter.so and libapp.so properly stripped with symbols removed.' }
  ],
  dynamicItems: [
    { name: 'Runtime Lifecycle', status: 'HEALTHY', detail: 'App pauses gracefully on backgrounding. Zero battery drain in sleep.' },
    { name: 'Network Telemetry', status: 'ISOLATED', detail: 'Zero outbound connections during offline usage; encrypted TLS 1.3 only during manual Drive backup.' },
    { name: 'Memory Allocation', status: '48.2 MB', detail: 'Garbage collector cadence normal. No bitmap leaks detected.' },
    { name: 'Local Database', status: 'SECURED', detail: 'SQLite schema normalized. Data stored in protected internal sandbox /data/data/.' }
  ]
};
