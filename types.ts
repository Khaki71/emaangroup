
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  cta: string;
  color: string;
}

export interface SliderContent {
  headline: string;
  description: string;
  ctaText: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  service: string;
  message: string;
}
