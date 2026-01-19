import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Only scroll to top when navigating to a different major section
    // This prevents jarring scroll when navigating between related pages
    const isMajorSectionChange = 
      prevPathname.current.split('/')[1] !== pathname.split('/')[1];
    
    // Always scroll to top when going to homepage
    const isHomepage = pathname === '/';
    
    if (isMajorSectionChange || isHomepage) {
      // Use smooth scroll for better UX
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
