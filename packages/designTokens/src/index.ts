// Design Tokens Package - Main export file
// This file provides paths to design token files for use across the EMS system

export const designTokens = {
  default: './_variablesDefault.scss',
} as const;

export type ThemeVariant = keyof typeof designTokens;
