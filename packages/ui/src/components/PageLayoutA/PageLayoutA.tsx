import React from 'react';

import { PageLayoutAProps } from '@ems/type';

export const PageLayoutA: React.FC<PageLayoutAProps> = ({
  children,
  isStandAlone,
}) => {
  return (
    <div className="ems-page-layout-a">
      <div
        className={`ems-page-layout-a__box ${isStandAlone ? 'ems-page-layout-a__box__standalone' : 'ems-page-layout-a__box__main-app'}`}
      >
        {children}
      </div>
    </div>
  );
};
