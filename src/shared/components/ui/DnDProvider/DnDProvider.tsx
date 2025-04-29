import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { useState } from "react";
// import { moveProjectToGroup } from "@entities/Project/model/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/providers/store";
import styles from "@widgets/ProjectList/ui/ProjectList.module.scss";

interface Props {
  children: React.ReactNode;
}

const DndProvider = ({ children }: Props) => {
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState<number | null>(null);
  const projects = useSelector((state: RootState) => state.project.projects);

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    // if (over) {
    //   dispatch(moveProjectToGroup({ projectId: active.id, groupId: over.id }));
    // }
    setActiveId(null);
  };

  const activeProject = projects.find((p) => p.id === activeId);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {children}
      <DragOverlay>
        {activeProject ? (
          <div className={styles.projectItem}>
            <span
              className={styles.status}
              // style={{ backgroundColor: activeProject.statusColor }}
            ></span>
            {activeProject.title}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DndProvider;
