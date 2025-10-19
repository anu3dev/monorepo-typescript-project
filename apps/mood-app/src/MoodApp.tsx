import { MoodAppProps } from '@ems/type';

import { ComingSoon, PageLayoutA } from '@ems/ui';

export default function MoodApp({ isStandAlone }: MoodAppProps) {
  return (
    <div className="mood-container">
      <PageLayoutA>
        <ComingSoon isStandAlone={isStandAlone} />
      </PageLayoutA>
    </div>
  );
}
