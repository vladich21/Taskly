export interface Task {
  id: string;
  title: string;
  description?: string;
  duration: number; // в часах
  storyPoints?: number; // опциональные story points
  priority: "low" | "medium" | "high";
  deadline?: string; // Дата в формате ISO (YYYY-MM-DD)
  dependsOn?: string[]; // Массив id задач, от которых зависит текущая
  date?: string; // Запланированная дата выполнения (YYYY-MM-DD)
  isCompleted: boolean;
}

export interface CalendarSettings {
  dailyWorkingHours: number;
  startDate: string; // Дата в формате ISO (YYYY-MM-DD)
  skipWeekends: boolean;
}
