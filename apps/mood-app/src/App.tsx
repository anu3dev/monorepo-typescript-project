import React, { useEffect } from 'react';
import { Button, NotificationProvider, notify } from '@ems/ui';

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--ems-primary', '#10b981');
  }, []);
  const save = async () => {
    try {
      // await apiFetch("/employee/mood", { method: "POST", body: JSON.stringify({ mood: "happy"})});
      notify('success', 'Mood saved (dummy)');
    } catch (e: unknown) {
      notify('error', e instanceof Error ? e.message : 'Failed');
    }
  };
  return (
    <NotificationProvider>
      <div style={{ padding: 20 }}>
        <h1>Employee Mood</h1>
        <Button onClick={save}>I'm happy</Button>
      </div>
    </NotificationProvider>
  );
}
