import { AppCard, notify } from '@ems/ui';
import { RegistrationAppProps } from '@ems/type';

export default function RegistrationApp({
  isStandAlone,
}: RegistrationAppProps) {
  const save = async () => {
    try {
      notify('success', 'Registration saved (dummy)');
    } catch (e: unknown) {
      notify('error', e instanceof Error ? e.message : 'Failed');
    }
  };

  return (
    <AppCard
      heading="📋 Registration"
      subHeading="Employee Registration"
      handleButtonClick={save}
      buttonText="Register Employee"
      isStandAlone={isStandAlone}
      standaloneInfo={{
        appName: 'Registration App',
        command: 'npm run start:registration',
        port: 5175,
      }}
    />
  );
}
