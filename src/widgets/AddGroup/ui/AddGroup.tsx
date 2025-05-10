// import { useState } from "react";
// import { useAppSelector } from "@shared/hooks/hooks";
// import { DroppableGroup } from "./DroppableGroup";
// import { ChevronDown, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import styles from "./AddGroup.module.scss";

// export const AddGroup = () => {
//   const groups = useAppSelector((state) => state.group.groups);
//   const projects = useAppSelector((state) => state.project.projects);
//   const [isExpanded] = useState(true);

//   if (groups.length === 0) return null;

//   return (
//     <div className={styles.groupList}>
//       <AnimatePresence>
//         {isExpanded && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className={styles.groupsContainer}
//           >
//             {groups.map((group) => (
//               <GroupWithToggle
//                 key={group.id}
//                 group={group}
//                 projects={projects}
//               />
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const GroupWithToggle = ({
//   group,
//   projects,
// }: {
//   group: { id: number; title: string };
//   projects: any[];
// }) => {
//   const [isGroupExpanded, setIsGroupExpanded] = useState(true);

//   return (
//     <DroppableGroup group={group}>
//       <div
//         className={styles.groupHeader}
//         onClick={() => setIsGroupExpanded(!isGroupExpanded)}
//       >
//         <button className={styles.dropdownIcon}>
//           {isGroupExpanded ? (
//             <ChevronDown size={16} />
//           ) : (
//             <ChevronRight size={16} />
//           )}
//         </button>
//         <span className={styles.folderIcon}>📁 {group.title}</span>
//       </div>
//       <AnimatePresence>
//         {isGroupExpanded && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className={styles.groupProjects}
//           >
//             {projects
//               .filter((project) => project.groupId === group.id)
//               .map((project) => (
//                 <motion.div
//                   key={project.id}
//                   className={styles.projectInGroup}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 >
//                   <span className={styles.projectDot}>•</span>
//                   {project.title}
//                 </motion.div>
//               ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </DroppableGroup>
//   );
// };

import { useAppSelector, useAppDispatch } from "@shared/hooks/hooks";
import { DroppableGroup } from "./DroppableGroup";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toggleGroupExpansion } from "@entities/Group/model/groupSlice";
import styles from "./AddGroup.module.scss";

export const AddGroup = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector((state) => state.group.groups);
  const projects = useAppSelector((state) => state.project.projects);

  if (groups.length === 0) return null;

  return (
    <div className={styles.groupList}>
      <AnimatePresence>
        {groups.map((group) => (
          <DroppableGroup key={group.id} group={group}>
            <div className={styles.groupContainer}>
              <div
                className={styles.groupHeader}
                onClick={() => dispatch(toggleGroupExpansion(group.id))}
              >
                <button className={styles.dropdownIcon}>
                  {group.isExpanded ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
                <span className={styles.folderIcon}>📁 {group.title}</span>
              </div>

              <AnimatePresence>
                {group.isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={styles.groupProjects}
                  >
                    {projects
                      .filter((project) => project.groupId === group.id)
                      .map((project) => (
                        <motion.div
                          key={project.id}
                          className={styles.projectInGroup}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <span className={styles.projectDot}>•</span>
                          {project.title}
                        </motion.div>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </DroppableGroup>
        ))}
      </AnimatePresence>
    </div>
  );
};
