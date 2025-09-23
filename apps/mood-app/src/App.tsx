import { AppProps } from '@ems/types';
import MoodApp from './MoodApp';

export default function App({ isStandAlone }: AppProps) {
  return <MoodApp isStandAlone={isStandAlone} />;
}
