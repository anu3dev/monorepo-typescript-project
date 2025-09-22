import React, { useEffect } from 'react';
import MoodApp from './MoodApp';

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--ems-primary', '#10b981');
  }, []);

  return <MoodApp />;
}
