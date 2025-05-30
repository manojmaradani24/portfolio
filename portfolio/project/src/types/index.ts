export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'language' | 'framework' | 'tool';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type ThemeMode = 'light' | 'dark';
export type ColorTheme = 'blue' | 'purple' | 'green' | 'orange' | 'pink';

export interface ThemeContextType {
  themeMode: ThemeMode;
  colorTheme: ColorTheme;
  toggleThemeMode: () => void;
  setColorTheme: (theme: ColorTheme) => void;
}