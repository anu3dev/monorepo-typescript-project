import { useState } from 'react';

/**
 * document.documentElement.clientHeight -> visible page height.
 * document.documentElement.scrollHeight -> page total height including scroll.
 * document.documentElement.scrollTop -> page scroll position from top.
 * @returns it will return % value which can be directly added to width styling
 */

const useScrollPosition = () => {
  // won't work without usestate as it won't able to render the event after every change
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

export const PageScrollIndicator = () => {
  const progressIndicatorPosition = useScrollPosition();

  return (
    <div
      className="progress-indicator"
      // this is how we can write inline css
      style={{ width: `${progressIndicatorPosition}%` }}
    ></div>
  );
};
