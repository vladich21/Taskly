import { Sidebar } from "@widgets/Sidebar";
import { TaskBoard } from "@widgets/TaskBoard";
import styles from "./TodoListPage.module.scss";

const TodoListPage = () => {
  return (
    <div className={styles.page}>
      <Sidebar />
      <TaskBoard />
    </div>
  );
};

export default TodoListPage;
