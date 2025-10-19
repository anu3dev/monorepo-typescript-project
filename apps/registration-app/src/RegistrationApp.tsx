import { RegistrationAppProps } from '@ems/type';

import { PageLayoutA } from '@ems/ui';
import { EmployeeRegistration } from './components/EmployeeRegistration/EmployeeRegistration';

export default function RegistrationApp({
  isStandAlone,
}: RegistrationAppProps) {
  return (
    <div className="registration-container">
      <PageLayoutA isStandAlone={isStandAlone}>
        <EmployeeRegistration />
      </PageLayoutA>
    </div>
  );
}
