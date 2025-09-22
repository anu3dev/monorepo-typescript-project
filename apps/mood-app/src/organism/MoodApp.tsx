import { Button, NotificationProvider, notify } from '@ems/ui';
import './styles.scss';

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
      <div className="mood-container">
        <h2 className="mood-header">🎭 Mood Tracker</h2>
        <div className="mood-content">
          <h1>Employee Mood</h1>
          <Button onClick={save}>I'm happy</Button>
        </div>
      </div>
    </NotificationProvider>
  );
}
