import React from 'react';
import { NotificationProvider } from '@ems/ui';

// Import the actual app components directly from their source files
import MoodApp from '../../mood-app/src/App';
import RegistrationApp from '../../registration-app/src/App';

export default function MainEmployeeApp() {
  return (
    <NotificationProvider>
      <div style={{ padding: '20px' }}>
        <h1>Employee Management System</h1>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          Both Mood Tracker and Employee Registration apps are displayed below
          on the same page:
        </p>

        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
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
            <MoodApp />
          </div>

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
            <RegistrationApp />
          </div>
        </div>

        <div
          style={{
            marginTop: '30px',
            padding: '15px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>
            🎯 <strong>Standalone Apps:</strong> You can also run each app
            individually:
            <br />• Mood App: <code>npm run start:mood</code> (port 5174)
            <br />• Registration App: <code>
              npm run start:registration
            </code>{' '}
            (port 5178)
          </p>
        </div>
      </div>
    </NotificationProvider>
  );
}
