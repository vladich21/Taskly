// // utils/api.ts
// export const fetchTasks = async (userId: string) => {
//   const response = await fetch(`/api/tasks?userId=${userId}`);
//   return await response.json();
// };

// // В tasksSlice.ts добавьте асинхронный thunk:
// export const fetchTasks = createAsyncThunk(
//   "tasks/fetchTasks",
//   async (userId: string) => {
//     return await api.fetchTasks(userId);
//   }
// );
