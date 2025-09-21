declare global {
  interface ImportMeta {
    env?: {
      VITE_API_BASE?: string;
      [key: string]: unknown;
    };
  }

  interface Window {
    sessionStorage: Storage;
  }
}

export {};
