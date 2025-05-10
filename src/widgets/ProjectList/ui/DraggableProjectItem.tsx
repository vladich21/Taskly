import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { Project } from "@shared/types/project"; // Используем единый тип
import styles from "./ProjectList.module.scss";

interface DraggableProjectItemProps {
  project: Project;
  onClick?: () => void;
  isSelected?: boolean;
  isNested?: boolean;
}

export const DraggableProjectItem: React.FC<DraggableProjectItemProps> = ({
  project,
  onClick,
  isSelected = false,
  isNested = false,
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: `project-${project.id}`,
      data: { project },
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`${styles.projectItem} ${isSelected ? styles.selected : ""} ${
        isNested ? styles.nested : ""
      } ${isDragging ? styles.dragging : ""}`}
      onClick={onClick}
    >
      <div className={styles.projectContent}>
        <span>{project.title}</span>
      </div>
    </div>
  );
};
