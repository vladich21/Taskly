// features/drag-and-drop/lib/useDroppableArea.ts
import { useDroppable } from "@dnd-kit/core";

export const useDroppableArea = (id: string) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return {
    setNodeRef,
    isOver,
  };
};
