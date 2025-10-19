import { RegistrationAppProps } from '@ems/type';

import { ComingSoon, PageLayoutA } from '@ems/ui';

export default function RegistrationApp({
  isStandAlone,
}: RegistrationAppProps) {
  return (
    <div className="registration-container">
      <PageLayoutA>
        <ComingSoon isStandAlone={isStandAlone} />
      </PageLayoutA>
    </div>
  );
}
