import styles from "@widgets/ToDoList/ui/todo.module.scss";

export const TodoList = () => {
  return (
    <div>
      <div className={styles.todo}>
        <h2 className={styles.todo__header}>To-do list</h2>
        <p className={styles.todo__header_crossed}>
          Now you don't have to keep everything in your head
        </p>
        <p className={styles.todo__header_text}>
          A to-do list easily helps you organize your time and achieve your
          goals
        </p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.step__circle}>1</div>
          <div className={styles.step__text}>
            Organize your to-dos into lists
          </div>
          <div className={styles.step__text_next}>
            Organize tasks into lists for work, personal projects, or errands.
            This helps prioritize effectively and boosts productivity with a
            clear overview!
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.step__circle}>2</div>
          <div className={styles.step__text}>
            Setting deadlines for your goals
          </div>
          <div className={styles.step__text_next}>
            Organize tasks into lists for work, personal projects, or errands.
            This helps prioritize effectively and boosts productivity with a
            clear overview!
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.step__circle}>3</div>
          <div className={styles.step__text}>
            The ability to prioritize your goals
          </div>
          <div className={styles.step__text_next}>
            Organize tasks into lists for work, personal projects, or errands.
            This helps prioritize effectively and boosts productivity with a
            clear overview!
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.step__circle}>&uarr;</div>
          <div className={styles.step__text}>Profit</div>
        </div>
      </div>
    </div>
  );
};
