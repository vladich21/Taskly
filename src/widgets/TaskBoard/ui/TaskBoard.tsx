import React from "react";
import Calendar from "@widgets/CalendarWithTasks/ui/Calendar";
import { TaskForm } from "@features/TaskCreation/ui/TaskForm";
import styles from "./TaskBoard.module.scss";

const TaskBoard = () => {
  return (
    <div className={styles.taskBoard}>
      {/* <h1>Календарный помощник</h1> */}
      {/* <div className={styles.taskFormContainer}>
        <TaskForm />
      </div> */}
      <div className={styles.calendarContainer}>
        <Calendar />
      </div>
    </div>
  );
};

export default TaskBoard;
