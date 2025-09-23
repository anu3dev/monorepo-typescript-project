import React from 'react';

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
  isStandAlone?: boolean;
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
