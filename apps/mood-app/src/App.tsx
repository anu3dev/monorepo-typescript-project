import React, { useEffect } from 'react';
import MoodApp from './organism/MoodApp';

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--ems-primary', '#10b981');
  }, []);

  return <MoodApp />;
}
