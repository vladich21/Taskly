import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hooks/hooks";
import { addProject } from "@entities/Project/model/projectSlice";
import { useDraggable } from "@dnd-kit/core";
import { Plus, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectList.module.scss";

export const ProjectList = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) =>
    state.project.projects.filter((p) => p.groupId === null)
  );
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleAddProject = () => {
    const title = newProjectTitle.trim();
    if (title) {
      dispatch(addProject(title, null));
      setNewProjectTitle("");
      setIsInputVisible(false);
    }
  };

  return (
    <div className={styles.projectList}>
      <div className={styles.sectionHeader}>
        <div
          className={styles.label}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <button className={styles.dropdownIcon}>
            {isExpanded ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
          <span>Projects</span>
        </div>
        <button onClick={() => setIsInputVisible((prev) => !prev)}>
          <Plus size={16} />
        </button>
      </div>

      <AnimatePresence>
        {isInputVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.inputWrapper}
          >
            <input
              type="text"
              placeholder="New project name"
              value={newProjectTitle}
              onChange={(e) => setNewProjectTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddProject();
              }}
              autoFocus
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.projectsContainer}
          >
            {projects.map((project) => (
              <DraggableProjectItem key={project.id} project={project} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
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
      id: `project-${project.id}`,
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    opacity: isDragging ? 0.5 : 1,
    scale: isDragging ? 1.05 : 1,
    boxShadow: isDragging ? "0 5px 10px rgba(0,0,0,0.2)" : "none",
    transition: "all 0.2s ease",
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={styles.projectItem}
      whileHover={{ scale: 1.02 }}
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {project.title}
    </motion.div>
  );
};
