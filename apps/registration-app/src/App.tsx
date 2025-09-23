import { AppProps } from '@ems/types';
import RegistrationApp from './RegistrationApp';

export default function App({ isStandAlone }: AppProps) {
  return <RegistrationApp isStandAlone={isStandAlone} />;
}
