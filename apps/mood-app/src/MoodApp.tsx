import { MoodAppProps } from '@ems/type';

import './moodApp.scss';
import { ComingSoon, PageLayoutA } from '@ems/ui';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function MoodApp({ isStandAlone }: MoodAppProps) {
  return (
    <div className="mood-container">
      {/* <div className="mood-container__app">Hello {`${isStandAlone}`}</div> */}
      <PageLayoutA>
        <ComingSoon />
      </PageLayoutA>
    </div>
  );
}
