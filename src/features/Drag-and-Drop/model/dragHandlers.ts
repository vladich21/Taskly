import { DragEndEvent } from "@dnd-kit/core";
import { moveProjectToGroup } from "@entities/Project/model/projectSlice";
import type { AppDispatch } from "@app/providers/store";

export const handleDragEnd = (event: DragEndEvent, dispatch: AppDispatch) => {
  const { active, over } = event;

  if (!over) return;

  if (active.id !== over.id) {
    const projectId =
      typeof active.id === "string"
        ? Number(active.id.replace("project-", ""))
        : active.id;

    const groupId =
      typeof over.id === "string" && over.id.startsWith("group-")
        ? Number(over.id.replace("group-", ""))
        : -1;

    dispatch(moveProjectToGroup({ projectId, groupId }));
  }
};
