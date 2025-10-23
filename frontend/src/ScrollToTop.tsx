import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Optional: if you have a fixed header, offset it
          const headerOffset = 80; // adjust according to your header height
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });}, 100); 
      }
    }
  }, [location]);

  return null;
}

export default ScrollHandler;
