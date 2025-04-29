// types/taskTypes.ts
export interface Task {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  duration: number; // В часах
  storyPoints?: number; // Для совместимости
  deadline?: string;
  dependsOn?: string[];
  date?: string;
  isCompleted?: boolean;
}

export interface CalendarSettings {
  dailyWorkingHours: number;
  startDate: string;
  skipWeekends: boolean; // Новая настройка
}
