export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: 'language' | 'framework' | 'tool' | 'database' | 'devops';
  icon?: string;
  yearsOfExperience?: number;
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}
