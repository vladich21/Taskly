// src/entities/Group/model/groupSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Group } from "./types";

interface GroupState {
  groups: Group[];
}

const initialState: GroupState = {
  groups: [],
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<string>) => {
      const newGroup: Group = {
        id: Date.now(), // уникальный id
        title: action.payload,
      };
      state.groups.unshift(newGroup); // добавляем в начало списка
    },
  },
});

export const { addGroup } = groupSlice.actions;
export default groupSlice.reducer;
