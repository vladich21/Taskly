import styles from "./Sidebar.module.scss";
import { GroupItem } from "@entities/Group/ui/GroupItem";
import { AddGroup } from "@features/AddGroup/ui/AddGroup";
import Avatar from "@shared/assets/icons/sidebar/Avatar.svg";
import { MyTaskIcon } from "@shared/components/ui";
import { SevenDaysIcon } from "@shared/components/ui";
import { CalendarIcon } from "@shared/components/ui";
import DropDown from "@shared/assets/icons/sidebar/dropDown.svg";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <img src={Avatar} alt="User avatar" className={styles.avatar} />
        <span>Username</span>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.tasks_link}>
            <MyTaskIcon />
            <span>My tasks</span>
          </li>
          <li className={styles.tasks_link}>
            <SevenDaysIcon />
            <span> Next 7 days </span>
          </li>
          <li className={styles.tasks_link}>
            <CalendarIcon />
            <span>My calendar</span>
          </li>
        </ul>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.label}>
              <img src={DropDown} alt="dropdown" />
              <span>Projects</span>
            </div>
            <button>＋</button>
          </div>
          <GroupItem />
        </div>

        <div className={styles.section}>
          <AddGroup />
        </div>
      </nav>
    </aside>
  );
};
