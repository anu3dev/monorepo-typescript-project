import { Button, NotificationProvider, notify } from '@ems/ui';

export default function RegistrationApp() {
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
      <div
        style={{
          flex: 1,
          border: '2px solid #f59e0b',
          borderRadius: '8px',
          padding: '15px',
          backgroundColor: '#fffbeb',
        }}
      >
        <h2 style={{ margin: '0 0 10px 0', color: '#f59e0b' }}>
          � Registration
        </h2>
        <div style={{ padding: 20 }}>
          <h1>Employee Registration</h1>
          <Button onClick={save}>Register Employee</Button>
        </div>
      </div>
    </NotificationProvider>
  );
}
