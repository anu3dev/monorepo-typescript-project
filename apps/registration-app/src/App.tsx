import React, { useEffect } from 'react';
import RegistrationApp from './RegistrationApp';

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--ems-primary', '#f59e0b');
  }, []);

  return <RegistrationApp />;
}
