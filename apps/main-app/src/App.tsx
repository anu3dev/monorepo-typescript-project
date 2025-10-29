import { useState } from 'react';
import { Navigation, Footer, ProgressIndicator } from '@ems/ui';

import AppRoutes from './routes/AppRoutes';
import ChatOverlay from './components/ChatOverlay/ChatOverlay';

export default function MainEmployeeApp() {
  const [isChatOverlayOpen, setIsChatOverlayOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOverlayOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOverlayOpen(false);
  };

  return (
    <div className="main-employee-app">
      <Navigation />
      <ProgressIndicator />
      <AppRoutes />
      <Footer onOpenChat={handleOpenChat} />
      {isChatOverlayOpen && <ChatOverlay onClose={handleCloseChat} />}
    </div>
  );
}
