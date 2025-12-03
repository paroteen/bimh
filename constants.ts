import { 
  Hammer, 
  Mountain, 
  Truck, 
  ShieldCheck, 
  Users, 
  Leaf, 
  Award,
  Phone,
  MapPin,
  Mail,
  HeartHandshake,
  Sprout
} from 'lucide-react';
import { CompanyValue, NavItem, Product, TeamMember, Testimonial } from './types';

export const COMPANY_NAME = "BIMH LTD";
export const TAGLINE = "Solid Foundations. Sustainable Future.";
export const CONTACT_EMAIL = "mabano.joseph@gmail.com";
export const CONTACT_PHONE = "0788306938";
export const CONTACT_ADDRESS = "Nyarugunga - Kicukiro, Kigali, Rwanda";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Products', path: '/products' },
  { label: 'Our Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_CONTENT = {
  headline: "Premium Construction Stones for Rwanda's Growth",
  subheadline: "A women-led extraction and supply company committed to quality, sustainability, and community empowerment. Building the nation's infrastructure with integrity.",
  ctaPrimary: "Our Products",
  ctaSecondary: "Get a Quote",
};

export const ABOUT_CONTENT = {
  title: "About BIMH LTD",
  mission: "To extract and supply high-quality building stones while promoting gender empowerment, community development, environmental conservation, and sustainable mining practices.",
  vision: "To be Rwanda’s leading supplier of premium construction stones and a model for socially responsible, women-led mining enterprises by 2031.",
  description_1: "BIMH Ltd is a women-led building stone extraction and supply company based in Kigali City, Rwanda. We are dedicated to supporting the nation's growing infrastructure and real estate sectors with durable, reliable stone products.",
  description_2: "Beyond extraction, we are driven by a commitment to social impact. We champion women in mining, sustainable eco-friendly practices, and community development, aligning our operations with Rwanda’s Vision 2050.",
};

export const CORE_VALUES: CompanyValue[] = [
  {
    title: "Integrity",
    description: "Upholding honesty, transparency, and ethical practices in all operations and partnerships.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainability",
    description: "Committing to environmentally responsible quarrying, waste management, and land rehabilitation.",
    icon: Leaf,
  },
  {
    title: "Empowerment",
    description: "Fostering gender equality by placing women at the forefront of management and operations.",
    icon: Users,
  },
  {
    title: "Quality",
    description: "Delivering durable, reliable, and high-standard construction materials for safe structures.",
    icon: Award,
  },
  {
    title: "Community",
    description: "Actively contributing to local development, education, and social programs in our operating areas.",
    icon: HeartHandshake,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'High-Quality Building Stones',
    description: "Durable stone blocks and crushed aggregates suitable for residential, commercial, and public infrastructure projects.",
    features: ["Structural safety assurance", "Consistent quality control", "Various aggregate sizes"],
    imageUrl: "/images/High-Quality Building Stones.webp",
    icon: Mountain,
  },
  {
    id: 'p2',
    title: 'Stone Cutting & Shaping',
    description: "Tailored services for contractors requiring specific dimensions and finishes for unique architectural needs.",
    features: ["Custom dimensions", "Precision cutting", "Project-specific finishes"],
    imageUrl: "/images/stone cutting.webp",
    icon: Hammer,
  },
  {
    id: 'p3',
    title: 'Transport & Delivery',
    description: "Efficient logistics solutions using our own fleet of trucks and tippers to ensure timely delivery to your site.",
    features: ["Reliable fleet", "Timely delivery", "Logistics coordination"],
    imageUrl: "/images/Transport & Delivery.jpg",
    icon: Truck,
  },
  {
    id: 'p4',
    title: 'Eco-Tourism & Conservation',
    description: "Future initiatives integrating responsible quarrying with educational eco-parks and swamp conservation.",
    features: ["Reforestation programs", "Swamp protection", "Community education"],
    imageUrl: "/images/Eco-Tourism & Conservation F.jpg",
    icon: Sprout,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: "Executive Leadership",
    role: "Managing Director & CEO",
    bio: "Our highly experienced female leadership drives strategic oversight, ensuring operational excellence and gender-inclusive growth.",
    imageUrl: "", // Empty for placeholder
  },
  {
    id: 't2',
    name: "Finance & Admin",
    role: "Administration Team",
    bio: "Overseeing budgeting, loan management, and procurement to ensure financial sustainability and compliance.",
    imageUrl: "", // Empty for placeholder
  },
  {
    id: 't3',
    name: "Operations",
    role: "Field Supervisors",
    bio: "Executing daily extraction and safety protocols to maintain high productivity and strict safety standards.",
    imageUrl: "", // Empty for placeholder
  },
];

export const IMPACT_STATS = [
  { label: "New Jobs Created", value: "50+" },
  { label: "Women in Workforce", value: "40%" },
  { label: "Women in Management", value: "50%" },
  { label: "Trees Planted", value: "1000+" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tm1',
    clientName: "Jean Claude N.",
    company: "Kigali Infrastructure Corp",
    text: "BIMH LTD delivers not just stone, but reliability. Their commitment to timelines helps us keep our road projects on track.",
  },
  {
    id: 'tm2',
    clientName: "Marie Claire U.",
    company: "Residential Developer",
    text: "It is inspiring to work with a women-led supplier. The quality of their aggregates is matched only by their professionalism.",
  },
];

export const CONTACT_INFO = [
  { icon: Phone, text: CONTACT_PHONE, label: "Call Us" },
  { icon: Mail, text: CONTACT_EMAIL, label: "Email Us" },
  { icon: MapPin, text: CONTACT_ADDRESS, label: "Visit Us" },
];