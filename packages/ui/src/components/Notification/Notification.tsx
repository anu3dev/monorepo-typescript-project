import React, { useEffect, useState } from 'react';
import type { NotifyPayload } from '@ems/type';

export const NotificationProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [msg, setMsg] = useState<NotifyPayload | null>(null);

  useEffect(() => {
    const h = (e: Event) => {
      setMsg((e as CustomEvent).detail as NotifyPayload);
      setTimeout(() => setMsg(null), 3500);
    };
    window.addEventListener('ems:notify', h as EventListener);
    return () => window.removeEventListener('ems:notify', h as EventListener);
  }, []);

  return (
    <>
      {children}
      {msg && (
        <div
          style={{
            position: 'fixed',
            right: 20,
            top: 20,
            padding: '0.5rem 1rem',
            borderRadius: 6,
            boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
            background: msg.type === 'error' ? '#ef4444' : '#10b981',
            color: '#fff',
          }}
        >
          {msg.message}
        </div>
      )}
    </>
  );
};
