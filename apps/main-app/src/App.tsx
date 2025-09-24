import React from 'react';
import './styles.scss';
import { Navigation, Footer, TechnicalSkills } from '../../../packages/ui/src';

import MoodApp from '../../mood-app/src/MoodApp';
import RegistrationApp from '../../registration-app/src/RegistrationApp';

export default function MainEmployeeApp() {
  // Technical skills data
  const skillsData = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'Redux' },
        { name: 'Accessibility (WCAG/a11y)' },
      ],
    },
    {
      title: 'Build & Tooling',
      skills: [
        { name: 'Webpack' },
        { name: 'Vite' },
        { name: 'Babel' },
        { name: 'ESLint' },
        { name: 'Prettier' },
        { name: 'NPM' },
      ],
    },
    {
      title: 'DevOps & CI/CD',
      skills: [
        { name: 'Jenkins' },
        { name: 'SonarQube' },
        { name: 'Fortify' },
        { name: 'Black Duck' },
        { name: 'AEGIS' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java' },
        { name: 'Spring Boot' },
        { name: 'Node.js (Basic)', isLearning: true },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Splunk' },
        { name: 'Kibana' },
        { name: 'Site Cat' },
        { name: 'Git' },
        { name: 'JIRA' },
        { name: 'VS Code' },
        { name: 'Confluence' },
        { name: 'Netlify' },
        { name: 'Render' },
        { name: 'Neon' },
      ],
    },
  ];
  return (
    <div className="main-employee-app">
      <Navigation />

      <main className="main-employee-app-container">
        <h1 className="main-employee-app-title">🚀 Code. Create. Conquer.</h1>
        <div className="developer-intro">
          <h2 className="developer-name">Hi, I'm Anurag Kumar</h2>
          <p className="developer-role">
            Senior Frontend Developer & Team Lead
          </p>
          <p className="developer-description">
            9+ years of expertise in React, JavaScript, and TypeScript with
            banking domain specialization. Currently leading frontend teams
            while building scalable, accessible web applications. Expanding into
            full-stack development with Java Spring Boot and modern cloud
            technologies.
          </p>
          <div className="tech-highlights">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Team Leadership</span>
            <span className="tech-tag">Banking Domain</span>
            <span className="tech-tag">Spring Boot</span>
          </div>
        </div>

        <TechnicalSkills categories={skillsData} />

        <p className="main-employee-app-description">
          Explore my collection of utility tools showcasing modern web
          development practices, team leadership experience, and full-stack
          capabilities across frontend and backend technologies.
        </p>

        <div className="coming-soon-section">
          <h2>🚀 Available Tools</h2>
          <p>Start exploring with our current applications:</p>
          <div className="main-employee-app-content">
            <MoodApp />
            <RegistrationApp />
            <div className="ems-app-card-container">
              <div className="ems-app-card">
                <div className="ems-app-card-header">
                  <h2 className="ems-app-card-title">🛠️ More Tools</h2>
                </div>
                <div className="ems-app-card-content">
                  <p>
                    Additional productivity tools coming soon to enhance your
                    workflow.
                  </p>
                  <button className="ems-button" disabled>
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="upcoming-tools">
          <h2>🔮 Coming Soon</h2>
          <div className="tools-grid">
            <div className="tool-preview">📊 Polls & Surveys</div>
            <div className="tool-preview">📅 Interview Scheduler</div>
            <div className="tool-preview">🎬 Movie Ticket Booking</div>
            <div className="tool-preview">🛠️ More Utilities</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
