import { RegistrationAppProps } from '@ems/type';

import { PageLayoutA } from '@ems/ui';

export default function RegistrationApp({
  isStandAlone,
}: RegistrationAppProps) {
  return (
    <div className="registration-container">
      <PageLayoutA isStandAlone={isStandAlone}></PageLayoutA>
    </div>
  );
}
