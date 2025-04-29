import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/providers/store";
import {
  autoScheduleTasks,
  toggleWeekends,
} from "@features/AutoPlanning/model/tasksSlice";
import { Task } from "@entities/Task/model/types";
import styles from "./Calendar.module.scss";
import { useState } from "react";

const Calendar = () => {
  const dispatch = useDispatch();
  const { tasks, calendarSettings } = useSelector(
    (state: RootState) => state.tasks
  );
  const [isScheduling, setIsScheduling] = useState(false);
  const [expandedTasks, setExpandedTasks] = useState<Record<string, boolean>>(
    {}
  );

  // Группируем задачи по дням
  const groupedTasks = tasks.reduce((acc, task) => {
    const dateKey = task.date || "unscheduled";
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(task);
    return acc;
  }, {} as Record<string, Task[]>);

  // Сортируем даты
  const sortedDates = Object.keys(groupedTasks).sort((a, b) => {
    if (a === "unscheduled") return 1;
    if (b === "unscheduled") return -1;
    return new Date(a).getTime() - new Date(b).getTime();
  });

  const handleAutoSchedule = async () => {
    setIsScheduling(true);
    try {
      await dispatch(autoScheduleTasks());
    } finally {
      setIsScheduling(false);
    }
  };

  const toggleTaskDetails = (taskId: string) => {
    setExpandedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.controls}>
        <button
          onClick={handleAutoSchedule}
          className={styles.scheduleButton}
          disabled={isScheduling}
        >
          {isScheduling ? "Планируем..." : "Автопланировать"}
        </button>

        <label className={styles.weekendToggle}>
          <input
            type="checkbox"
            checked={calendarSettings.skipWeekends}
            onChange={() => dispatch(toggleWeekends())}
          />
          Пропускать выходные
        </label>
      </div>

      <div className={styles.daysContainer}>
        {sortedDates.map((date) => (
          <div
            key={date}
            className={`${styles.dayCard} ${
              date === "unscheduled" ? styles.unscheduled : ""
            }`}
          >
            <div className={styles.dayHeader}>
              <h3>
                {date === "unscheduled"
                  ? "Незапланированные"
                  : new Date(date).toLocaleDateString("ru-RU", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}
              </h3>
              <span className={styles.dayHours}>
                Всего часов:{" "}
                {groupedTasks[date].reduce(
                  (sum, task) => sum + task.duration,
                  0
                )}{" "}
                / {calendarSettings.dailyWorkingHours}
              </span>
            </div>

            <div className={styles.tasksList}>
              {groupedTasks[date].map((task) => (
                <div
                  key={task.id}
                  className={`${styles.taskCard} ${styles[task.priority]}`}
                >
                  <div
                    className={styles.taskMain}
                    onClick={() => toggleTaskDetails(task.id)}
                  >
                    <span className={styles.taskTitle}>{task.title}</span>
                    <span className={styles.taskMeta}>
                      {task.duration}ч •{" "}
                      {task.priority === "high"
                        ? "🔴"
                        : task.priority === "medium"
                        ? "🟡"
                        : "🟢"}
                    </span>
                    {task.dependsOn && task.dependsOn?.length > 0 && (
                      <span className={styles.dependencyBadge}>
                        ⛓ {task.dependsOn.length}
                      </span>
                    )}
                  </div>

                  {expandedTasks[task.id] && (
                    <div className={styles.taskDetails}>
                      {task.deadline && (
                        <div className={styles.detailRow}>
                          <span>Дедлайн:</span>
                          <span>
                            {new Date(task.deadline).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                      {task.dependsOn && task.dependsOn?.length > 0 && (
                        <div className={styles.detailRow}>
                          <span>Зависит от:</span>
                          <div className={styles.dependenciesList}>
                            {task.dependsOn.map((depId) => {
                              const depTask = tasks.find((t) => t.id === depId);
                              return depTask ? (
                                <span
                                  key={depId}
                                  className={styles.dependencyItem}
                                >
                                  {depTask.title} ({depTask.duration}ч)
                                </span>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
