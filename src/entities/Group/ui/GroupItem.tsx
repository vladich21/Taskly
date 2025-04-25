import styles from "./GroupItem.module.scss";
import { useGetGroupsQuery } from "@entities/Group/api/groupApi";

export const GroupItem = () => {
  const { data: groups } = useGetGroupsQuery();

  return (
    <ul className={styles.list}>
      {groups?.map((group) => (
        <li key={group.id} className={styles.item}>
          <span className={styles.circle} /> {group.name}
        </li>
      ))}
    </ul>
  );
};
