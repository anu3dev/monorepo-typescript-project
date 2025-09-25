import './styles.scss';

import { Navigation, Footer } from '../../../packages/ui/src';
import WebsiteHome from './components/WebsiteHome/WebsiteHome';

export default function MainEmployeeApp() {
  return (
    <div className="main-employee-app">
      <Navigation />
      <WebsiteHome />
      <Footer />
    </div>
  );
}
