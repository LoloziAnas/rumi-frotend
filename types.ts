export interface ArtStyle {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface Order {
  id: string;
  status: 'In Production' | 'Shipped' | 'Delivered' | 'Placed';
  date: string;
  estimatedDelivery: string;
  title: string;
  thumbnail: string;
}

export type FrameType = 'black' | 'white' | 'wood' | 'none';
export type AspectRatio = '1:1' | '3:4' | '16:9' | '4:3';

export interface RoomConfig {
  roomImage: string | null;
  artImage: string | null;
  frameStyle: FrameType;
  dimensions: { w: number; h: number };
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface GenerationConfig {
  prompt: string;
  styleId: string;
  aspectRatio: AspectRatio;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
}