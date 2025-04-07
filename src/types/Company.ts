export interface Company {
    name: string;
    slogan: string;
    description: string;
    foundedYear: number;
    logo: string;
    registration: {
      rccm: string;
      nif: string;
    };
    mission: string;
    vision: string;
    values: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
    history: Array<{
      year: number;
      event: string;
    }>;
  }