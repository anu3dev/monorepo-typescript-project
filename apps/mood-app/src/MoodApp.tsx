import { Button, NotificationProvider, notify } from '@ems/ui';

export default function MoodApp() {
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
      <div
        style={{
          flex: 1,
          border: '2px solid #10b981',
          borderRadius: '8px',
          padding: '15px',
          backgroundColor: '#f0fdf4',
        }}
      >
        <h2 style={{ margin: '0 0 10px 0', color: '#10b981' }}>
          🎭 Mood Tracker
        </h2>
        <div style={{ padding: 20 }}>
          <h1>Employee Mood</h1>
          <Button onClick={save}>I'm happy</Button>
        </div>
      </div>
    </NotificationProvider>
  );
}
