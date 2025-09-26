import { AppCard, notify } from '@ems/ui';
import { MoodAppProps } from '@ems/type';

export default function MoodApp({ isStandAlone }: MoodAppProps) {
  const save = async () => {
    try {
      notify('success', 'Mood saved (dummy)');
    } catch (e: unknown) {
      notify('error', e instanceof Error ? e.message : 'Failed');
    }
  };

  return (
    <AppCard
      heading="🎭 Mood Tracker"
      subHeading="Employee Mood"
      handleButtonClick={save}
      buttonText="Save Mood"
      isStandAlone={isStandAlone}
      standaloneInfo={{
        appName: 'Mood App',
        command: 'npm run start:mood',
        port: 5174,
      }}
    />
  );
}
