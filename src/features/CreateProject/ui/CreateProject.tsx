// // src/widgets/CreateProject/ui/CreateProject.tsx
// import { useState } from "react";
// import { useAppDispatch } from "@shared/hooks/hooks";
// import { addProject } from "@entities/Project/model/projectSlice";
// import { useDraggable } from "@dnd-kit/core"; // Для drag-and-drop
// import styles from "./CreateProject.module.scss";

// export const CreateProject = () => {
//   const dispatch = useAppDispatch();
//   const [newProjectTitle, setNewProjectTitle] = useState("");
//   const [newProjectColor, setNewProjectColor] = useState("#ff5733");

//   const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
//     id: `project-${Date.now()}`, // Уникальный id для каждого перетаскиваемого проекта
//   });

//   const handleAddProject = () => {
//     if (newProjectTitle.trim()) {
//       dispatch(
//         addProject({
//           title: newProjectTitle,
//           statusColor: newProjectColor,
//           groupId: null, // Проект не привязан к группе на момент создания
//         })
//       );
//       setNewProjectTitle(""); // Очистить инпут после добавления
//     }
//   };

//   return (
//     <div className={styles.createProjectForm}>
//       {/* <input
//         type="text"
//         placeholder="New Project Title"
//         value={newProjectTitle}
//         onChange={(e) => setNewProjectTitle(e.target.value)}
//         className={styles.projectInput}
//       /> */}
//       {/* <input
//         type="color"
//         value={newProjectColor}
//         onChange={(e) => setNewProjectColor(e.target.value)}
//         className={styles.colorInput}
//       /> */}
//       {/* <button onClick={handleAddProject} className={styles.addProjectButton}>
//         Add Project
//       </button> */}

//       {/* Перетаскиваемый элемент */}
//       <div
//         ref={setNodeRef}
//         {...listeners}
//         {...attributes}
//         className={`${styles.draggableProject} ${
//           isDragging ? styles.dragging : ""
//         }`}
//       >
//         {newProjectTitle && (
//           <span
//             className={styles.projectTitle}
//             style={{ backgroundColor: newProjectColor }}
//           >
//             {newProjectTitle}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };
