import React from 'react';
import { AppCardProps } from '../../../../types';
import { Button } from '../Button/Button';
import { NotificationProvider } from '../Notification/Notification';
import './AppCard.scss';

export const AppCard: React.FC<AppCardProps> = ({
  heading,
  subHeading,
  handleButtonClick,
  buttonText,
}) => {
  return (
    <NotificationProvider>
      <div className="ems-app-card-container">
        <h2 className="ems-app-card-header">{heading}</h2>
        <div className="ems-app-card-content">
          <h3>{subHeading}</h3>
          <Button onClick={handleButtonClick}>{buttonText}</Button>
        </div>
      </div>
    </NotificationProvider>
  );
};
