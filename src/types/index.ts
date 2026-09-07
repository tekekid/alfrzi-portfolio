export type ProjectCategory = 'all' | 'app' | 'web' | 'uiux' | 'research';

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  approach: string;
  design: string;
  development: string;
  challenges: string;
  result: string;
  gallery: {
    title: string;
    caption: string;
    tag: string;
  }[];
  links: {
    github?: string;
    demo?: string;
    documentation?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'app' | 'web' | 'uiux' | 'research';
  categoryLabel: string;
  role: string;
  year: string;
  description: string;
  technologies: string[];
  features: string[];
  featured: boolean;
  accentColor?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  caseStudy: ProjectCaseStudy;
}

export interface SkillItem {
  name: string;
  levelDescription: string;
  badge?: string;
}

export interface SkillModule {
  id: string;
  moduleNumber: string;
  title: string;
  icon: string;
  description: string;
  technologies: SkillItem[];
  focusAreas: string[];
  previewType: 'app' | 'web' | 'uiux' | 'reverse';
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface ReverseEngAnalysis {
  target: string;
  packageId: string;
  architecture: string;
  components: string[];
  staticItems: { name: string; status: string; detail: string }[];
  dynamicItems: { name: string; status: string; detail: string }[];
}
