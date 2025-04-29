export interface Project {
  id: number;
  title: string;
  statusColor: string;
  groupId: number | null; // null если проект без группы
}
