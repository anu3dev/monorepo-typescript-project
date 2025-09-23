import React from 'react';

// Import the actual app components directly from their source files
import MoodApp from '../../mood-app/src/MoodApp';
import RegistrationApp from '../../registration-app/src/RegistrationApp';

export default function MainEmployeeApp() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Employee Management System</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Both Mood Tracker and Employee Registration apps are displayed below on
        the same page:
      </p>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <MoodApp />
        <RegistrationApp />
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
          <br />• Registration App: <code>npm run start:registration</code>{' '}
          (port 5175)
        </p>
      </div>
    </div>
  );
}
