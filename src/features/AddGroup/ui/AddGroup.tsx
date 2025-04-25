import { useState } from "react";
import styles from "./AddGroup.module.scss";
import DropDown from "@shared/assets/icons/sidebar/dropDown.svg";
import { useCreateGroupMutation } from "@entities/Group/api/groupApi";

export const AddGroup = () => {
  const [createGroup] = useCreateGroupMutation();
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    if (value.trim()) {
      await createGroup({ name: value });
      setValue("");
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.addGroup}>
      <div className={styles.sectionHeader}>
        <div className={styles.label}>
          <img src={DropDown} alt="dropdown" />
          <span>Add group</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>＋</button>
      </div>

      {isOpen && (
        <div className={styles.inputWrapper}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Group name"
          />
        </div>
      )}
    </div>
  );
};
