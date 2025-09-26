import { AppCard } from '@ems/ui';
import { MoodAppProps } from '@ems/type';

export default function MoodApp({ isStandAlone }: MoodAppProps) {
  const handleButtonClick = async () => {};

  return (
    <AppCard
      heading="🎭 Mood Tracker"
      subHeading="Employee Mood"
      handleButtonClick={handleButtonClick}
      buttonText="Coming soon!"
      isStandAlone={isStandAlone}
      standaloneInfo={{
        appName: 'Mood App',
        command: 'npm run start:mood',
        port: 5174,
      }}
    />
  );
}
