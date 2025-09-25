import './styles.scss';

import { Navigation, Footer } from '../../../packages/ui/src';
import AppRoutes from './routes/AppRoutes';

export default function MainEmployeeApp() {
  return (
    <div className="main-employee-app">
      <Navigation />
      <AppRoutes />
      <Footer />
    </div>
  );
}
