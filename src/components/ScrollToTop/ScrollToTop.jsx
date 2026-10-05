import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView();
        return;
      }
    }

    window.scrollTo({
      top: 0,
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
