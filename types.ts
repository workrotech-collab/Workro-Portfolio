
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

export interface NavLink {
  name: string;
  path: string;
}
