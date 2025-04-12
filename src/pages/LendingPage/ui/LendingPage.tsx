import { Header } from "@widgets/Header/index";
import { HeroBanner } from "@widgets/Hero/index";
import { TodoList } from "@widgets/ToDoList";
import { MyDay } from "@widgets/MyDay";
import { SevenDays } from "@widgets/SevenDays";
import { Footer } from "@widgets/Footer";

import styles from "./Lending.module.scss";

const LendingPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HeroBanner />
      <TodoList />
      <MyDay />
      <SevenDays />
      <Footer />
    </div>
  );
};

export default LendingPage;
