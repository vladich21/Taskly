import { useDroppable } from "@dnd-kit/core";
import { Group } from "@entities/Group/model/types";
import { useAppDispatch } from "../../../shared/hooks/hooks";
import { moveProjectToGroup } from "../../../entities/Project/model/projectSlice";
import styles from "./AddGroup.module.scss";
import { useEffect } from "react";

interface DroppableGroupProps {
  group: Group;
  children: React.ReactNode;
}

export const DroppableGroup = ({ group, children }: DroppableGroupProps) => {
  const { setNodeRef, isOver, active } = useDroppable({
    id: group.id,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOver && active?.id) {
      dispatch(
        moveProjectToGroup({ projectId: Number(active.id), groupId: group.id })
      );
    }
  }, [isOver, active?.id]);

  return (
    <div
      ref={setNodeRef}
      className={`${styles.groupItem} ${isOver ? styles.activeDrop : ""}`}
      data-id={group.id}
    >
      {children}
    </div>
  );
};
