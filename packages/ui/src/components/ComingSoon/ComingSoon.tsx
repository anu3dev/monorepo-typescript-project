import React from 'react';
import './ComingSoon.scss';

export interface ComingSoonProps {
  title?: string;
  message?: string;
  estimatedDate?: string;
  showAnimation?: boolean;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({
  title = 'Coming Soon',
  message = "We're working hard to bring you something amazing. Stay tuned!",
  estimatedDate,
  showAnimation = true,
}) => {
  return (
    <div className="ems-coming-soon">
      <div className="ems-coming-soon__container">
        {showAnimation && (
          <div className="ems-coming-soon__animation">
            <div className="ems-coming-soon__rocket">🚀</div>
          </div>
        )}

        <h1 className="ems-coming-soon__title">{title}</h1>
        <p className="ems-coming-soon__message">{message}</p>

        {estimatedDate && (
          <div className="ems-coming-soon__date">
            <span className="ems-coming-soon__date-label">
              Expected Launch:
            </span>
            <span className="ems-coming-soon__date-value">{estimatedDate}</span>
          </div>
        )}

        <div className="ems-coming-soon__progress">
          <div className="ems-coming-soon__progress-bar">
            <div className="ems-coming-soon__progress-fill"></div>
          </div>
          <span className="ems-coming-soon__progress-text">In Development</span>
        </div>

        <div className="ems-coming-soon__features">
          <h3 className="ems-coming-soon__features-title">What to Expect:</h3>
          <ul className="ems-coming-soon__features-list">
            <li>Modern and intuitive interface</li>
            <li>Enhanced user experience</li>
            <li>Mobile-responsive design</li>
            <li>Fast and reliable performance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
