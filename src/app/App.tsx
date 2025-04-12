import "../shared/assets/styles/app.scss";
import { Routes, Route } from "react-router-dom";
import { LendingPage } from "@pages/LendingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LendingPage />} />
    </Routes>
  );
};

export default App;
