
import React from 'react';
import { 
  ShoppingBag, 
  Plane, 
  Truck, 
  Search, 
  CheckCircle, 
  Globe, 
  ShieldCheck, 
  Clock,
  Warehouse
} from 'lucide-react';
import { SliderContent, ServiceItem, NavItem } from './types.ts';

export const COLORS = {
  primary: '#0f172a', // Slate 900
  secondary: '#064e3b', // Emerald 900
  accent: '#d4af37', // Gold
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Companies', href: '#companies' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SLIDER_DATA: SliderContent[] = [
  {
    headline: 'Connecting Pakistan with Global Trade & Travel',
    description: 'Empowering businesses with seamless cross-border solutions and premium travel experiences.',
    ctaText: 'Explore Our Group',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000',
  },
  {
    headline: 'Trusted Sourcing, Logistics & Trading',
    description: 'Expertise in importing from China to Pakistan with a focus on quality and reliability.',
    ctaText: 'Get a Quote',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000',
  },
  {
    headline: 'Visas, Education & Work Opportunities',
    description: 'Opening doors to the world with professional consultancy and simplified visa processing.',
    ctaText: 'Start Your Journey',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=2000',
  },
];

export const COMPANIES: ServiceItem[] = [
  {
    id: 'trading',
    title: 'Emaan Trading Company',
    description: 'Leading importer of premium industrial and commercial products from China to Pakistan.',
    icon: <ShoppingBag className="w-8 h-8" />,
    features: ['Reflective Sheeting (Grade A & B)', 'PET Lamination', 'Printable Stickers', 'Third-party Import Services'],
    cta: 'Request a Quote',
    color: 'emerald',
  },
  {
    id: 'travel',
    title: 'Emaan Travel & Tourism',
    description: 'Global visa facilitation and education consultancy for business and leisure.',
    icon: <Plane className="w-8 h-8" />,
    features: ['China Business (M) Visas', 'SE Asia & GCC Visas', 'Education Consultancy', 'Work Permit Processing'],
    cta: 'Apply for Visa',
    color: 'amber',
  },
  {
    id: 'logistics',
    title: 'Emaan Logistics',
    description: 'End-to-end supply chain solutions connecting China with Pakistan, UAE, and Saudi Arabia.',
    icon: <Truck className="w-8 h-8" />,
    features: ['Air & Sea Freight', 'Cargo Handling', 'China-KSA Corridor', 'Cost-effective Shipping'],
    cta: 'Get Shipping Quote',
    color: 'blue',
  },
  {
    id: 'sourcing',
    title: 'Emaan Products Sourcing',
    description: 'Comprehensive sourcing and warehousing solutions for businesses and resellers.',
    icon: <Search className="w-8 h-8" />,
    features: ['Supplier Verification', 'Warehousing & Storage', 'Quality Control', 'Inventory Consolidation'],
    cta: 'Start Sourcing',
    color: 'indigo',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Quality Assurance',
    desc: 'Rigorous inspection and verified suppliers ensure only the best products reach you.',
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: 'Global Connectivity',
    desc: 'Extensive networks across China, Pakistan, UAE, and beyond.',
    icon: <Globe className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: 'Timely Delivery',
    desc: 'Optimized logistics and customs handling for fast turnaround times.',
    icon: <Clock className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: 'Expert Support',
    desc: 'Dedicated professionals to guide you through trading and travel complexities.',
    icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
  },
];
