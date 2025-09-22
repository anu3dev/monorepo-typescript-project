import { Button, NotificationProvider, notify } from '@ems/ui';
import './styles.scss';

export default function RegistrationApp() {
  const save = async () => {
    try {
      notify('success', 'Registration saved (dummy)');
    } catch (e: unknown) {
      notify('error', e instanceof Error ? e.message : 'Failed');
    }
  };

  return (
    <NotificationProvider>
      <div className="registration-container">
        <h2 className="registration-header">📋 Registration</h2>
        <div className="registration-content">
          <h1>Employee Registration</h1>
          <Button onClick={save}>Register Employee</Button>
        </div>
      </div>
    </NotificationProvider>
  );
}
