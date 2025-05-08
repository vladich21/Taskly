import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hooks/hooks";
import { addGroup } from "@entities/Group/model/groupSlice";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./CreateGroup.module.scss";

export const CreateGroup = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector((state) => state.group.groups);
  const [groupName, setGroupName] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleAddGroup = () => {
    const title = groupName.trim();
    if (title) {
      dispatch(addGroup(title));
      setGroupName("");
      setIsInputVisible(false);
    }
  };

  return (
    <div className={styles.createGroup}>
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
          <span>Groups</span>
        </div>
        <button onClick={() => setIsInputVisible((prev) => !prev)}>
          <Plus size={16} />
        </button>
      </div>

      {isInputVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={styles.inputWrapper}
        >
          <input
            type="text"
            placeholder="New group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddGroup();
            }}
            autoFocus
          />
        </motion.div>
      )}
    </div>
  );
};
