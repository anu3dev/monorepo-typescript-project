import React from 'react';
import { AppCardProps } from '@ems/type';
import { Button } from '@ems/ui';
import { NotificationProvider } from '@ems/ui';

export const AppCard: React.FC<AppCardProps> = ({
  heading,
  subHeading,
  handleButtonClick,
  buttonText,
  isStandAlone = false,
  standaloneInfo,
}) => {
  return (
    <NotificationProvider>
      <div className="ems-app-card-container">
        <h2 className="ems-app-card-header">{heading}</h2>
        <div className="ems-app-card-content">
          <h3>{subHeading}</h3>
          <Button onClick={handleButtonClick}>{buttonText}</Button>
        </div>

        {!isStandAlone && standaloneInfo && (
          <div className="ems-app-card-standalone-info">
            <span className="standalone-emoji">🚀</span>
            <span className="standalone-text">Standalone:</span>
            <code>{standaloneInfo.command}</code>
            <span className="port-info">:{standaloneInfo.port}</span>
          </div>
        )}
      </div>
    </NotificationProvider>
  );
};
