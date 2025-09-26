import { createRoot } from 'react-dom/client';
import App from './App';

import './moodApp.scss';

createRoot(document.getElementById('root')!).render(
  <App isStandAlone={true} />
);
