import React from 'react';
import { ROUTES } from '@ems/constant';

export type Employee = {
  id: string;
  name: string;
  email?: string;
  mood?: 'happy' | 'neutral' | 'sad';
};

export type AppProps = {
  isStandAlone: boolean;
};

export type RegistrationAppProps = {
  isStandAlone?: boolean;
};

export type MoodAppProps = {
  isStandAlone?: boolean | false;
};

export interface AppCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  heading: string;
  subHeading: string;
  handleButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
  isStandAlone?: boolean;
  standaloneInfo?: {
    appName: string;
    command: string;
    port: number;
  };
}

export type RouteKeys = keyof typeof ROUTES;
export type RoutePaths = (typeof ROUTES)[RouteKeys];

export interface ComingSoonProps {
  title?: string;
  message?: string;
  estimatedDate?: string;
  showAnimation?: boolean;
  isStandAlone?: boolean;
}

interface SkillItem {
  name: string;
  isLearning?: boolean;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface TechnicalSkillsProps {
  categories: SkillCategory[];
}

export interface NotifyPayload {
  type: 'success' | 'error' | 'info';
  message: string;
}
