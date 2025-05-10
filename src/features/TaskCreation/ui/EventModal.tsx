// // components/Calendar/EventModal.tsx
// import { useDispatch } from "react-redux";
// import { addTask } from "@features/AutoPlanning/model/tasksSlice";
// import { useState } from "react";

// export const EventModal = ({
//   date,
//   onClose,
// }: {
//   date: string;
//   onClose: () => void;
// }) => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState("");

//   const handleSubmit = () => {
//     dispatch(
//       addTask({
//         id: uuidv4(),
//         title,
//         date,
//         isCompleted: false,
//       })
//     );
//     onClose();
//   };

//   return (
//     <div className="modal">
//       <input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Название задачи"
//       />
//       <button onClick={handleSubmit}>Добавить</button>
//     </div>
//   );
// };
