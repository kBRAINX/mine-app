export interface Impact {
    employment: {
      directJobs: number;
      indirectJobs: number;
      localEmployment: number;
    };
    investment: {
      totalInvestment: number;
      localInvestment: number;
      infrastructureInvestment: number;
    };
    community: {
      projects: Array<{
        title: string;
        description: string;
        image: string;
      }>;
      training: {
        programs: number;
        participants: number;
        success: number;
      };
    };
    environment: {
      initiatives: Array<{
        title: string;
        description: string;
        icon: string;
      }>;
      certifications: string[];
    };
  }