import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "@features/AutoPlanning/model/tasksSlice";
import { RootState } from "@app/providers/store";
import styles from "./TaskForm.module.scss";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(2);
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [deadline, setDeadline] = useState("");
  const [selectedDependencies, setSelectedDependencies] = useState<string[]>(
    []
  );

  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  // Получаем список задач для выпадающего списка (исключая завершенные)
  const availableTasks = tasks.filter((task) => !task.isCompleted);

  const handleSubmit = () => {
    dispatch(
      addTask({
        id: Date.now().toString(),
        title,
        duration,
        priority,
        deadline: deadline || undefined,
        dependsOn:
          selectedDependencies.length > 0 ? selectedDependencies : undefined,
      })
    );
    // Сбрасываем форму
    setTitle("");
    setDuration(2);
    setDeadline("");
    setSelectedDependencies([]);
  };

  const toggleDependency = (taskId: string) => {
    setSelectedDependencies((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <div className={styles.taskForm}>
      <h3>Создать новую задачу</h3>

      <div className={styles.formGroup}>
        <label>Название задачи:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Что нужно сделать?"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Длительность (часы):</label>
          <input
            type="number"
            min="1"
            max="8"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Приоритет:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as any)}
          >
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Дедлайн (если есть):</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Зависит от:</label>
        <div className={styles.dependenciesList}>
          {availableTasks.map((task) => (
            <label key={task.id} className={styles.dependencyItem}>
              <input
                type="checkbox"
                checked={selectedDependencies.includes(task.id)}
                onChange={() => toggleDependency(task.id)}
              />
              <span>
                {task.title} ({task.priority}, {task.duration}h)
                {task.date && ` [${new Date(task.date).toLocaleDateString()}]`}
              </span>
            </label>
          ))}
          {availableTasks.length === 0 && (
            <div className={styles.noTasks}>Нет активных задач для выбора</div>
          )}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className={styles.submitButton}
        disabled={!title.trim()}
      >
        Добавить задачу
      </button>
    </div>
  );
};
