export interface Project {
  id: number;
  title: string;
  statusColor: "active" | "completed";
  groupId: number | null; // null если проект не в папке
}
// shared/types/project.ts
export type ProjectStatusColor = "active" | "completed" | "on-hold";
