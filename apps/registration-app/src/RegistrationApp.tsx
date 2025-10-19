import { ComingSoon, PageLayoutA } from '@ems/ui';
import './registrationApp.scss';
import { RegistrationAppProps } from '@ems/type';

export default function RegistrationApp({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isStandAlone,
}: RegistrationAppProps) {
  return (
    <div className="registration-container">
      <PageLayoutA>
        <ComingSoon />
      </PageLayoutA>
    </div>
  );
}
