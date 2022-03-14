import { useEffect } from "react";

/**
 * useScrollToTop - hook
 */
const useScrollToTop = () => {
  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);
};

export { useScrollToTop };
