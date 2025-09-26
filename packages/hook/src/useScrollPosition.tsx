import { useState } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  window.addEventListener('scroll', () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

    const pageHeight = Number(scrollHeight);
    const screenHeight = Number(clientHeight);
    const scrollPositionHeight = Number(scrollTop);

    setScrollPosition(
      (scrollPositionHeight / (pageHeight - screenHeight)) * 100
    );
  });

  return scrollPosition;
};
