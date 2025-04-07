export interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string;
    bio: string;
    contact?: {
      email?: string;
      phone?: string;
      linkedin?: string;
    };
  }

  export interface Team {
    management: TeamMember[];
    board: TeamMember[];
  }