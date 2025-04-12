import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../shared/ui/main-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <>todo list</>,
      },
      {
        path: ":id",
        element: <>todo details</>,
      },
    ],
  },
]);
