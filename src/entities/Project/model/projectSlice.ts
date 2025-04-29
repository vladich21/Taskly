// src/entities/Project/model/projectSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Project = {
  id: number;
  title: string;
  groupId: number | null;
  statusColor: string;
};

type ProjectState = {
  projects: Project[];
};

const initialState: ProjectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (
      state,
      action: PayloadAction<{
        title: string;
        statusColor: string;
        groupId: number | null;
      }>
    ) => {
      const newProject: Project = {
        id: Date.now(),
        title: action.payload.title,
        groupId: action.payload.groupId,
        statusColor: action.payload.statusColor,
      };
      state.projects.push(newProject);
    },
    moveProjectToGroup: (
      state,
      action: PayloadAction<{ projectId: number; groupId: number }>
    ) => {
      const { projectId, groupId } = action.payload;
      const project = state.projects.find((p) => p.id === projectId);
      if (project) {
        project.groupId = groupId;
      }
    },
  },
});

export const { addProject, moveProjectToGroup } = projectSlice.actions;
export default projectSlice.reducer;
