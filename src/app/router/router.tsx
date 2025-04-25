import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@shared/ui/main-layout";
import { TodoListPage } from "@pages/TodoListPage";
import { LendingPage } from "@pages/LendingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LendingPage />, // Главная страница (landing page)
      },
      {
        path: "/todo-list",
        element: <TodoListPage />,
      },
      {
        path: ":id",
        element: <>todo details</>,
      },
    ],
  },
]);
