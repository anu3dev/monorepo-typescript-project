import { AppCard } from '@ems/ui';
import { RegistrationAppProps } from '@ems/type';

export default function RegistrationApp({
  isStandAlone,
}: RegistrationAppProps) {
  const handleButtonClick = async () => {};

  return (
    <AppCard
      heading="📋 Registration"
      subHeading="Employee Registration"
      handleButtonClick={handleButtonClick}
      buttonText="Coming soon!"
      isStandAlone={isStandAlone}
      standaloneInfo={{
        appName: 'Registration App',
        command: 'npm run start:registration',
        port: 5175,
      }}
    />
  );
}
