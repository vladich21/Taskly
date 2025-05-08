import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "./types";
import { ProjectStatusColor } from "../../../shared/types/project";

interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: {
      reducer(state, action: PayloadAction<Project>) {
        state.projects.push(action.payload);
      },
      prepare(title: string, groupId: number | null = null) {
        return {
          payload: {
            id: Date.now(),
            title,
            groupId,
            statusColor: "active" as ProjectStatusColor,
          },
        };
      },
    },
    moveProjectToGroup: (
      state,
      action: PayloadAction<{ projectId: number; groupId: number | null }>
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
