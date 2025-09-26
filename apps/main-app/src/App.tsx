import './styles.scss';
import {
  Navigation,
  Footer,
  ProgressIndicator,
} from '../../../packages/ui/src';
import AppRoutes from './routes/AppRoutes';

export default function MainEmployeeApp() {
  return (
    <div className="main-employee-app">
      <Navigation />
      <ProgressIndicator />
      <AppRoutes />
      <Footer />
    </div>
  );
}
