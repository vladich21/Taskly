import "@app/styles/app.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "@app/router/router"; // предположим, что твой роутер находится в директории src/router

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
