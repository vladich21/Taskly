import { useDroppable } from "@dnd-kit/core";
import { Group } from "@entities/Group/model/types";
import { useAppDispatch } from "@shared/hooks/hooks";
import { moveProjectToGroup } from "@entities/Project/model/projectSlice";
import { useEffect } from "react";
import styles from "./AddGroup.module.scss";

interface DroppableGroupProps {
  group: Group;
  children: React.ReactNode;
}

export const DroppableGroup = ({ group, children }: DroppableGroupProps) => {
  const { setNodeRef, isOver, active } = useDroppable({
    id: `group-${group.id}`,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOver && active?.id && active.id.toString().startsWith("project-")) {
      const projectId = Number(active.id.toString().replace("project-", ""));
      dispatch(moveProjectToGroup({ projectId, groupId: group.id }));
    }
  }, [isOver, active?.id, dispatch, group.id]);

  return (
    <div
      ref={setNodeRef}
      className={`${styles.groupItem} ${isOver ? styles.activeDrop : ""}`}
    >
      {children}
    </div>
  );
};
