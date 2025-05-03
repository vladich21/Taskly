// widgets/group-list/ui/DroppableGroup.tsx
import { useDroppable } from "@dnd-kit/core";
import styles from "./CreateGroup.module.scss";

interface DroppableGroupProps {
  id: number;
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

export const DroppableGroup = ({
  id,
  children,
  className,
  onClick,
}: DroppableGroupProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: `group-${id}`,
  });
  console.log(111);
  return (
    <div
      ref={setNodeRef}
      className={`${className} ${isOver ? styles.highlight : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
