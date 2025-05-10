import { Header } from "@widgets/Header/index";
import { HeroBanner } from "@widgets/Hero/index";
import { TodoList } from "@widgets/ToDoList";
import { MyDay } from "@widgets/MyDay";
import { SevenDays } from "@widgets/SevenDays";
import { Calendar } from "@widgets/Calendar";
import { Testimonials } from "@widgets/Testimonials";
import { DownloadDevices } from "@widgets/DownloadDevices";
import { Footer } from "@widgets/Footer";

import styles from "./Lending.module.scss";
import { useRef } from "react";
import { ScrollToTop } from "@shared/components/ui/ScrollToTop";

const LendingPage = () => {
  const myDayRef = useRef<HTMLDivElement>(null);
  const sevenDaysRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.container}>
        <Header />
        <HeroBanner
          onScrollToMyDay={() =>
            myDayRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          onScrollToSevenDays={() =>
            sevenDaysRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          onScrollToCalendar={() =>
            calendarRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <TodoList />
        <div ref={myDayRef}>
          <MyDay />
        </div>
        <div ref={sevenDaysRef}>
          <SevenDays />
        </div>
        <div ref={calendarRef}>
          <Calendar />
        </div>
        <Testimonials />
        <DownloadDevices />
      </div>
      <ScrollToTop size={40} />
      <Footer />
    </>
  );
};

export default LendingPage;
