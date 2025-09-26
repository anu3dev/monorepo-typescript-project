import { AppProps } from '@ems/type';
import RegistrationApp from './RegistrationApp';

export default function App({ isStandAlone }: AppProps) {
  return <RegistrationApp isStandAlone={isStandAlone} />;
}
