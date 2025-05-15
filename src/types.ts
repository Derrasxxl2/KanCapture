
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  year: string;
  location: string;
  area?: string;
  cover_image: string;
  images?: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio?: string;
}
