import React from 'react';

export const BoxLayoutA: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return <div className="ems-box-layout-a-container">{children}</div>;
};
