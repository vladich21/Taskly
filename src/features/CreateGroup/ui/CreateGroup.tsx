import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hooks/hooks";
import { addGroup } from "@entities/Group/model/groupSlice";
import styles from "./CreateGroup.module.scss";
import { DropDownIcon } from "@shared/components/ui";

export const CreateGroup = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector((state) => state.group.groups);

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const toggleInput = () => {
    setIsInputVisible((prev) => !prev);
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      dispatch(addGroup(inputValue.trim()));
      setInputValue("");
      setIsInputVisible(false);
    }
  };

  return (
    <div className={styles.addGroup}>
      <div className={styles.sectionHeader}>
        <div className={styles.label}>
          <DropDownIcon
            className={`${styles.dropdownIcon} ${isOpen ? styles.open : ""}`}
            onClick={toggleDropdown}
            onMouseDown={(e) => e.preventDefault()}
          />
          <span>Add group</span>
        </div>
        <button onClick={toggleInput}>＋</button>
      </div>

      {isInputVisible && isOpen && (
        <div className={styles.inputWrapper}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Group name"
            autoFocus
          />
        </div>
      )}

      {/* Можно убрать отображение списка групп здесь! 
          Отображение теперь будет в виджете */}
    </div>
  );
};
