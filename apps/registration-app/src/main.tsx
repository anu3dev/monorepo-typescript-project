import { createRoot } from 'react-dom/client';
import App from './App';

import './registrationApp.scss';

createRoot(document.getElementById('root')!).render(
  <App isStandAlone={true} />
);
