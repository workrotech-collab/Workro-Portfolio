
import React from 'react';
import { 
  Briefcase, 
  Code, 
  Bot, 
  Cpu, 
  BarChart3, 
  Smartphone, 
  Palette, 
  Search 
} from 'lucide-react';
import { ServiceItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Why Us', path: '/why-us' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'biz-solutions',
    title: 'Business Solutions',
    description: 'Comprehensive solutions designed to solve all types of business challenges and support sustainable growth. We analyze business problems, optimize workflows, and implement smart digital and AI-driven strategies.',
    features: ['Business Process Optimization', 'AI & Digital Transformation', 'Workflow Improvement', 'Growth Strategy & Automation'],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js. We create fast, responsive, and SEO-optimized solutions.',
    features: ['Responsive Design', 'SEO Optimization', 'Fast Performance', 'Custom CMS'],
    icon: <Code className="w-6 h-6" />,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'ai-agents',
    title: 'AI Agents & Automation',
    description: 'Intelligent chatbots, virtual assistants, and workflow automation powered by cutting-edge AI. Reduce manual tasks and improve customer engagement.',
    features: ['Chatbots', 'Workflow Automation', 'Customer Support AI', 'Process Optimization'],
    icon: <Bot className="w-6 h-6" />,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
  {
    id: 'ml-solutions',
    title: 'Machine Learning Solutions',
    description: 'Custom ML models tailored to your business needs. From predictive analytics to image recognition, we build AI systems that deliver actionable insights.',
    features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision', 'Custom Models'],
    icon: <Cpu className="w-6 h-6" />,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Dashboards',
    description: 'Transform raw data into powerful insights with interactive dashboards and comprehensive analytics. Make data-driven decisions with real-time reporting.',
    features: ['Interactive Dashboards', 'Real-time Analytics', 'Data Visualization', 'BI Solutions'],
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. We build apps that users love with intuitive interfaces and robust functionality.',
    features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'Offline Support'],
    icon: <Smartphone className="w-6 h-6" />,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    description: 'User-centered design that creates memorable digital experiences. From wireframes to polished interfaces, we design products that delight users.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    icon: <Palette className="w-6 h-6" />,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 'seo-marketing',
    title: 'SEO & Digital Marketing',
    description: 'Data-driven marketing strategies to boost your online visibility. Increase organic traffic, improve rankings, and grow your digital presence.',
    features: ['SEO Optimization', 'Content Strategy', 'PPC Campaigns', 'Social Media'],
    icon: <Search className="w-6 h-6" />,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
];

export const WHATSAPP_LINK = "https://wa.me/919272077554";
export const EMAIL_CONTACT = "workro.contact@gmail.com";
export const PHONE_CONTACT = "+91 9272077554";
