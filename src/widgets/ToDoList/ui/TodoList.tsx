import styles from "@widgets/ToDoList/ui/todo.module.scss";
import arrow from "@shared/assets/icons/Arrow_white.svg";

export const TodoList = () => {
  return (
    <div>
      <h2>To-do list</h2>
      <p className="d">Now you don't have to keep everything in your head</p>
      <p>
        A to-do list easily helps you organize your time and achieve your goals
      </p>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.step__circle}>1</div>
          <div className={styles.step__text}>
            Organize your to-dos into lists
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.step__circle}>2</div>
          <div className={styles.step__text}>
            Setting deadlines for your goals
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.step__circle}>3</div>
          <div className={styles.step__text}>
            The ability to prioritize your goals
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
