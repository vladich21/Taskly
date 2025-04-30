// store/slices/tasksSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, CalendarSettings } from "@entities/Task/model/types";

interface TasksState {
  tasks: Task[];
  calendarSettings: CalendarSettings;
}

const initialState: TasksState = {
  tasks: [],
  calendarSettings: {
    dailyWorkingHours: 8,
    startDate: new Date().toISOString().split("T")[0],
    skipWeekends: true, // Включено по умолчанию
  },
};
const getNextWorkingDay = (date: Date, skipWeekends: boolean) => {
  const nextDay = new Date(date);
  if (!skipWeekends) {
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  }

  do {
    nextDay.setDate(nextDay.getDate() + 1);
  } while (nextDay.getDay() === 0 || nextDay.getDay() === 6); // 0 - воскресенье, 6 - суббота

  return nextDay;
};

const resetTaskDates = (state: TasksState) => {
  state.tasks.forEach((task) => {
    if (!task.isCompleted) {
      task.date = undefined;
    }
  });
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push({
        ...action.payload,
        duration: action.payload.duration || action.payload.storyPoints || 1,
        date: undefined,
        isCompleted: false,
      });
    },

    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
        // Если задача завершена, снимаем дату выполнения
        if (task.isCompleted) {
          task.date = undefined;
        }
      }
    },

    toggleWeekends: (state) => {
      state.calendarSettings.skipWeekends =
        !state.calendarSettings.skipWeekends;
    },

    autoScheduleTasks: (state) => {
      const { dailyWorkingHours, startDate, skipWeekends } =
        state.calendarSettings;

      resetTaskDates(state);

      let currentDate = new Date(startDate);
      let remainingHours = dailyWorkingHours;

      // Проверяем, не начали ли мы с выходного дня
      if (
        skipWeekends &&
        (currentDate.getDay() === 0 || currentDate.getDay() === 6)
      ) {
        currentDate = getNextWorkingDay(currentDate, skipWeekends);
      }

      const unscheduledTasks = state.tasks.filter(
        (task) => !task.date && !task.isCompleted
      );

      const sortedTasks = [...unscheduledTasks].sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        if (priorityOrder[b.priority] !== priorityOrder[a.priority]) {
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        }
        if (a.deadline && b.deadline) {
          return (
            new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
          );
        }
        const aHasDeps = a.dependsOn?.length || 0;
        const bHasDeps = b.dependsOn?.length || 0;
        return aHasDeps - bHasDeps;
      });

      const canScheduleTask = (task: Task) => {
        if (!task.dependsOn?.length) return true;
        return state.tasks
          .filter((t) => task.dependsOn?.includes(t.id))
          .every((t) => t.isCompleted || t.date);
      };

      for (const task of sortedTasks) {
        if (!canScheduleTask(task)) continue;

        if (remainingHours < task.duration) {
          currentDate = getNextWorkingDay(currentDate, skipWeekends);
          remainingHours = dailyWorkingHours;
        }

        task.date = currentDate.toISOString().split("T")[0];
        remainingHours -= task.duration;
      }
    },
  },
});

export const {
  addTask,
  autoScheduleTasks,
  toggleWeekends,
  toggleTaskCompletion,
} = tasksSlice.actions;
export default tasksSlice.reducer;
