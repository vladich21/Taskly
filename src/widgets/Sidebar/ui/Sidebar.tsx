import styles from "./Sidebar.module.scss";
import { ProjectList } from "@widgets/ProjectList/ui/ProjectList";
// import AddGroup from "@widgets/AddGroup/ui/AddGroup";
import Avatar from "@shared/assets/icons/sidebar/Avatar.svg";
import { DropDownIcon, MyTaskIcon } from "@shared/components/ui";
import { SevenDaysIcon } from "@shared/components/ui";
import { CalendarIcon } from "@shared/components/ui";
// import DropDown from "@shared/assets/icons/sidebar/dropDown.svg";
import DnDProvider from "@shared/components/ui/DnDProvider/DnDProvider";
import { CreateGroup } from "../../../features/CreateGroup";
import { AddGroup } from "../../AddGroup/ui/AddGroup";

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
          <DnDProvider>
            <ProjectList />
            <CreateGroup />
            <AddGroup />
          </DnDProvider>
        </div>
      </nav>
    </aside>
  );
};
