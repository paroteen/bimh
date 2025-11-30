import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  icon: LucideIcon;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string; // Optional to support placeholders
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  text: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: LucideIcon;
}