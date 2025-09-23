import React from 'react';
import './styles.scss';

import MoodApp from '../../mood-app/src/MoodApp';
import RegistrationApp from '../../registration-app/src/RegistrationApp';

export default function MainEmployeeApp() {
  return (
    <div className="main-employee-app-container">
      <h1 className="main-employee-app-title">Employee Management System</h1>
      <p className="main-employee-app-description">
        Both Mood Tracker and Employee Registration apps are displayed below on
        the same page:
      </p>

      <div className="main-employee-app-content">
        <MoodApp />
        <RegistrationApp />
      </div>
    </div>
  );
}
