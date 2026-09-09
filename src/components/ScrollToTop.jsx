import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Give the page a moment to render before scrolling to the anchor
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Offset for the sticky header height (~72px)
        const headerOffset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      // No hash — scroll to top on route change
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
