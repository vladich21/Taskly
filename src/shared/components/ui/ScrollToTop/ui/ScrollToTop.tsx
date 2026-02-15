// shared/ui/ScrollToTop/ScrollToTop.tsx
import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.scss";

type ScrollToTopProps = {
  size?: number; // необязательный проп
};

export const ScrollToTop = ({ size = 40 }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        className={styles.scrollTop}
        onClick={scrollToTop}
        style={{ width: size, height: size }}
      >
        ⬆
      </button>
    )
  );
};
