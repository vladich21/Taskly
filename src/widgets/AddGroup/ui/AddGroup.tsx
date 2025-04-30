// src/widgets/AddGroup/ui/AddGroup.tsx

import { useAppSelector, useAppDispatch } from "@shared/hooks/hooks";
import styles from "./AddGroup.module.scss";
import { DroppableGroup } from "./DroppableGroup";

export const AddGroup = () => {
  const groups = useAppSelector((state) => state.group.groups);
  const projects = useAppSelector((state) => state.project.projects);

  if (groups.length === 0) return null;

  return (
    <div className={styles.groupList}>
      {groups.map((group) => (
        <DroppableGroup key={group.id} group={group}>
          <div className={styles.folderIcon}>📁 {group.title}</div>

          <div className={styles.groupProjects}>
            {projects
              .filter((project) => project.groupId === group.id)
              .map((project) => (
                <div key={project.id} className={styles.projectInGroup}>
                  <span
                    className={styles.status}
                    style={{ backgroundColor: project.statusColor }}
                  ></span>
                  {project.title}
                </div>
              ))}
          </div>
        </DroppableGroup>
      ))}
    </div>
  );
};
