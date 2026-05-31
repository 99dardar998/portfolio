export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  year: string;
  status: 'completed' | 'in-progress' | 'planned';
}
