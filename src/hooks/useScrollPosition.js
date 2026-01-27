import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      
      if (currentScrollPosition > lastScrollPosition) {
        setScrollDirection('down');
      } else if (currentScrollPosition < lastScrollPosition) {
        setScrollDirection('up');
      }

      setScrollPosition(currentScrollPosition);
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  return { scrollPosition, scrollDirection };
};
