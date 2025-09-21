import React, { useEffect } from 'react';
import { Button, NotificationProvider, notify } from '@ems/ui';

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--ems-primary', '#f59e0b');
  }, []);
  const save = async () => {
    try {
      // await apiFetch("/employee/registration", { method: "POST", body: JSON.stringify({ registration: "complete"})});
      notify('success', 'Registration saved (dummy)');
    } catch (e: unknown) {
      notify('error', e instanceof Error ? e.message : 'Failed');
    }
  };
  return (
    <NotificationProvider>
      <div style={{ padding: 20 }}>
        <h1>Employee Registration</h1>
        <Button onClick={save}>Register Employee</Button>
      </div>
    </NotificationProvider>
  );
}
