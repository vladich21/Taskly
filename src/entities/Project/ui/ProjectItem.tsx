import { useState } from "react";
import { DropDownIcon } from "@shared/components/ui";
import styles from "./ProjectList.module.scss";

export const ProjectItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.GroupProject}>
        <div className={styles.sectionHeader}>
          <div className={styles.label}>
            <DropDownIcon
              className={`${styles.dropdownIcon} ${isOpen ? styles.open : ""}`}
              onClick={toggleDropdown} // переключаем только список
              onMouseDown={(e) => e.preventDefault()}
            />
            <span>Projects</span>
          </div>
          <button>＋</button>
        </div>
      </div>
    </>
  );
};
