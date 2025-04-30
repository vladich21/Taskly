export interface Project {
  id: number;
  title: string;
  statusColor: "active" | "completed";
  groupId: number | null; // null если проект не в папке
}
