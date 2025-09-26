import { AppProps } from '@ems/type';
import MoodApp from './MoodApp';

export default function App({ isStandAlone }: AppProps) {
  return <MoodApp isStandAlone={isStandAlone} />;
}
