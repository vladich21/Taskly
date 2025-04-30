import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/providers/store";
import {
  autoScheduleTasks,
  toggleWeekends,
  toggleTaskCompletion,
} from "@features/AutoPlanning/model/tasksSlice";
import { Task } from "@entities/Task/model/types";
import styles from "./Calendar.module.scss";
import { useState, useRef, useEffect } from "react";
import { TaskForm } from "@features/TaskCreation/ui/TaskForm";
import { Modal } from "@shared/components/ui/Modal/Modal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const dispatch = useDispatch();
  const { tasks, calendarSettings } = useSelector(
    (state: RootState) => state.tasks
  );
  const [isScheduling, setIsScheduling] = useState(false);
  const [expandedTasks, setExpandedTasks] = useState<Record<string, boolean>>(
    {}
  );
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const daysContainerRef = useRef<HTMLDivElement>(null);

  // Группируем задачи по дням (исключая завершенные)
  const groupedTasks = tasks.reduce((acc, task) => {
    if (task.isCompleted) return acc;
    const dateKey = task.date || "unscheduled";
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(task);
    return acc;
  }, {} as Record<string, Task[]>);

  // Сортируем даты
  const sortedDates = Object.keys(groupedTasks)
    .filter((date) => date !== "unscheduled")
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  // Отображаем 3 дня: текущий + по 1 с каждой стороны
  const visibleDates = sortedDates.slice(currentDayIndex, currentDayIndex + 3);

  const handleAutoSchedule = async () => {
    setIsScheduling(true);
    try {
      await dispatch(autoScheduleTasks());
      setCurrentDayIndex(0); // Сброс на первый день после планирования
    } finally {
      setIsScheduling(false);
    }
  };

  const toggleTaskDetails = (taskId: string) => {
    setExpandedTasks((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const scrollToDay = (direction: "left" | "right") => {
    if (direction === "left" && currentDayIndex > 0) {
      setCurrentDayIndex(currentDayIndex - 1);
    } else if (
      direction === "right" &&
      currentDayIndex < sortedDates.length - 3
    ) {
      setCurrentDayIndex(currentDayIndex + 1);
    }
  };

  // Прокручиваем контейнер при изменении текущего дня
  useEffect(() => {
    if (daysContainerRef.current) {
      daysContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, [currentDayIndex]);

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.controls}>
        <button
          onClick={() => setIsTaskFormOpen(true)}
          className={styles.addTaskButton}
        >
          + Добавить задачу
        </button>

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

      <div className={styles.daysWrapper}>
        <div className={styles.buttonNavigations}>
          <button
            className={`${styles.navigationButton} ${styles["navigationButton--left"]}`}
            onClick={() => scrollToDay("left")}
            disabled={currentDayIndex === 0}
          >
            <ChevronLeft size={35} />
          </button>
          <button
            className={`${styles.navigationButton} ${styles["navigationButton--right"]}`}
            onClick={() => scrollToDay("right")}
            disabled={currentDayIndex >= sortedDates.length - 3}
          >
            <ChevronRight size={35} />
          </button>
        </div>
        <div className={styles.daysContainer} ref={daysContainerRef}>
          {visibleDates.map((date, index) => (
            <div
              key={date}
              className={`${styles.dayCard} ${
                index === 1 ? styles.active : ""
              }`}
            >
              <div className={styles.dayHeader}>
                <div className={styles.dayDate}>
                  <div className={styles.dayName}>
                    {new Date(date).toLocaleDateString("ru-RU", {
                      weekday: "long",
                    })}
                  </div>
                  <div className={styles.dayNumber}>
                    {new Date(date).toLocaleDateString("ru-RU", {
                      day: "numeric",
                    })}
                  </div>
                  <div className={styles.monthName}>
                    {new Date(date).toLocaleDateString("ru-RU", {
                      month: "long",
                    })}
                  </div>
                </div>
                <span className={styles.dayHours}>
                  Часов:{" "}
                  {groupedTasks[date].reduce(
                    (sum, task) => sum + task.duration,
                    0
                  )}{" "}
                  / {calendarSettings.dailyWorkingHours}
                </span>
              </div>
              <div className={styles.tasksList}>
                {groupedTasks[date]
                  .sort((a, b) => {
                    const priorityOrder = { high: 3, medium: 2, low: 1 };
                    return (
                      priorityOrder[b.priority] - priorityOrder[a.priority]
                    );
                  })
                  .map((task) => (
                    <div
                      key={task.id}
                      className={`${styles.taskCard} ${
                        task.isCompleted ? styles.completed : ""
                      }`}
                    >
                      <div className={styles.taskContent}>
                        <div
                          className={`${styles.taskPriority} ${
                            styles[task.priority]
                          }`}
                        ></div>
                        <div
                          className={styles.taskMain}
                          onClick={() => toggleTaskDetails(task.id)}
                        >
                          <input
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={(e) => {
                              e.stopPropagation();
                              dispatch(toggleTaskCompletion(task.id));
                            }}
                          />
                          <span className={styles.taskTitle}>
                            {task.title}
                            {task.dependsOn && task.dependsOn.length > 0 && (
                              <span className={styles.dependencyIndicator}>
                                {" "}
                                ⛓
                              </span>
                            )}
                            {task.deadline && (
                              <span className={styles.deadlineIndicator}>
                                {" "}
                                📅
                              </span>
                            )}
                          </span>
                          <span className={styles.taskMeta}>
                            {task.duration}ч
                            <span className="priority-icon">
                              {task.priority === "high"
                                ? " 🔴"
                                : task.priority === "medium"
                                ? " 🟡"
                                : " 🟢"}
                            </span>
                          </span>
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
                            {task.dependsOn && task.dependsOn.length > 0 && (
                              <div className={styles.detailRow}>
                                <span>Зависит от:</span>
                                <div className={styles.dependenciesList}>
                                  {task.dependsOn.map((depId) => {
                                    const depTask = tasks.find(
                                      (t) => t.id === depId
                                    );
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
                    </div>
                  ))}
              </div>
              {/* <div className={styles.tasksList}>
                {groupedTasks[date]
                  .sort((a, b) => {
                    const priorityOrder = { high: 3, medium: 2, low: 1 };
                    return (
                      priorityOrder[b.priority] - priorityOrder[a.priority]
                    );
                  })
                  .map((task) => (
                    <div
                      key={task.id}
                      className={`${styles.taskCard} ${
                        task.isCompleted ? styles.completed : ""
                      } ${styles[task.priority]}`}
                      onClick={() => toggleTaskDetails(task.id)}
                    >
                      <div
                        className={`${styles.taskPriority} ${
                          styles[task.priority]
                        }`}
                      ></div>
                      <div className={styles.taskMain}>
                        <input
                          type="checkbox"
                          checked={task.isCompleted}
                          onChange={(e) => {
                            e.stopPropagation();
                            dispatch(toggleTaskCompletion(task.id));
                          }}
                          className={styles.taskCheckbox}
                        />
                        <span className={styles.taskTitle}>{task.title}</span>
                        <span className={styles.taskMeta}>
                          {task.duration}ч •{" "}
                          {task.priority === "high"
                            ? "🔴"
                            : task.priority === "medium"
                            ? "🟡"
                            : "🟢"}
                        </span>
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
                        </div>
                      )}
                    </div>
                  ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isTaskFormOpen} onClose={() => setIsTaskFormOpen(false)}>
        <TaskForm onSuccess={() => setIsTaskFormOpen(false)} />
      </Modal>
    </div>
  );
};

export default Calendar;
