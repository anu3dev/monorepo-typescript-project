import React from 'react';

export const PageLayoutA: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return <div className="ems-page-layout-a">{children}</div>;
};
