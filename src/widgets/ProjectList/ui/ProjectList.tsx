import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hooks/hooks";
import { addProject } from "@entities/Project/model/projectSlice";
import { useDraggable } from "@dnd-kit/core"; // Для перетаскивания
import styles from "./ProjectList.module.scss";
import { DroppableGroup } from "../../AddGroup/ui/DroppableGroup";
// import { DroppableGroup } from "../AddGroup/ui/DroppableGroup"; // Предположим, что этот компонент существует

export const ProjectList = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector((state) => state.group.groups);
  const projects = useAppSelector(
    (state) => state.project.projects.filter((p) => p.groupId === null) // только проекты без группы
  );

  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleAddProject = () => {
    const title = newProjectTitle.trim();
    if (title) {
      const newProject = {
        id: Date.now(),
        title: title,
        statusColor: "active", // по умолчанию статус активный
        groupId: null, // новый проект без группы
      };
      dispatch(addProject(newProject));
      setNewProjectTitle("");
      setIsInputVisible(false);
    }
  };

  return (
    <div className={styles.projectList}>
      <div className={styles.sectionHeader}>
        <div className={styles.label}>
          <span>Pros</span>
        </div>
        <button onClick={() => setIsInputVisible((prev) => !prev)}>＋</button>
      </div>

      {isInputVisible && (
        <div className={styles.addProjectInput}>
          <input
            type="text"
            placeholder="New project name"
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddProject();
            }}
          />
        </div>
      )}

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <DraggableProjectItem key={project.id} project={project} />
        ))}
      </div>

      <div className={styles.groupsContainer}>
        {groups.map((group) => (
          <DroppableGroup key={group.id} group={group}>
            <div className={styles.folderIcon}>📁 {group.title}</div>
          </DroppableGroup>
        ))}
      </div>
    </div>
  );
};

const DraggableProjectItem = ({
  project,
}: {
  project: { id: number; title: string };
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: project.id.toString(), // обязательно id как строка
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={styles.projectItem}
    >
      {project.title}
    </div>
  );
};
