export interface Location {
    id: number;
    name: string;
    type: 'headquarters' | 'operation' | 'exploration';
    address: string;
    city: string;
    region: string;
    country: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    contact: {
      phone?: string;
      email?: string;
    };
    description: string;
}