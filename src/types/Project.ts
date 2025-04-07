export interface Project {
    id: number;
    title: string;
    region: string;
    objective: string;
    status: 'planning' | 'exploration' | 'development' | 'production' | 'completed';
    startDate: string;
    completionDate?: string;
    description: string;
    image: string;
    achievements?: string[];
    partners?: string[];
    resources?: string[];
  }