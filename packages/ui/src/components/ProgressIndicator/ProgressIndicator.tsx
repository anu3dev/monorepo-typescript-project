import React from 'react';
import { useScrollPosition } from '@ems/hook';

export const ProgressIndicator: React.FC = () => {
  const progressIndicatorPosition = useScrollPosition();

  return (
    <div
      className="progress-indicator"
      style={{ width: `${progressIndicatorPosition}%` }}
    ></div>
  );
};
