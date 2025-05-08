// src/entities/Group/model/groupSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Group } from "./types";

interface GroupState {
  groups: Group[];
}

const initialState: GroupState = {
  groups: [],
};

// const groupSlice = createSlice({
//   name: "group",
//   initialState,
//   reducers: {
//     addGroup: (state, action: PayloadAction<string>) => {
//       const newGroup: Group = {
//         id: Date.now(), // уникальный id
//         title: action.payload,
//       };
//       state.groups.unshift(newGroup); // добавляем в начало списка
//     },
//   },
// });

// export const { addGroup } = groupSlice.actions;
// export default groupSlice.reducer;
// entities/Group/model/groupSlice.ts
const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<string>) => {
      const newGroup: Group = {
        id: Date.now(),
        title: action.payload,
        isExpanded: true, // По умолчанию группы развернуты
      };
      state.groups.unshift(newGroup);
    },
    toggleGroupExpansion: (state, action: PayloadAction<number>) => {
      const group = state.groups.find((g) => g.id === action.payload);
      if (group) {
        group.isExpanded = !group.isExpanded;
      }
    },
  },
});

export const { addGroup, toggleGroupExpansion } = groupSlice.actions;
export default groupSlice.reducer;
