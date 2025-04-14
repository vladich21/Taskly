import styles from "./calendar.module.scss";
import calendar from "@shared/assets/icons/calendar-big.svg";
import calendarTwo from "@shared/assets/icons/calendar-two.svg";

export const Calendar = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.calendar}>
        <div className={styles.calendar__header}>
          <h2>Calendar</h2>
          <p>
            My day is a convenient tool for planning and organizing your work
            time and personal affairs
          </p>
        </div>
        <div className={styles.calendar__content}>
          <div className={styles.calendar__image}>
            <img src={calendar} alt="Calendar illustration" />
          </div>
          <div className={styles.calendar__image_two}>
            <img src={calendarTwo} alt="Small calendar illustration" />
          </div>
          <div className={styles.calendar__cards}>
            <div className={styles.calendar__card}>
              <div className={styles.calendar__dot} />
              <div>
                <h3 className={styles.calendar__card_title}>
                  Mark important events
                </h3>
                <p className={styles.calendar__card_text}>
                  Easily mark important events such as meetings, deadlines,
                  birthdays, special occasions, and anniversaries to stay
                  organized.
                </p>
              </div>
            </div>
            <div className={styles.calendar__card}>
              <div className={styles.calendar__dot} />
              <div>
                <h3 className={styles.calendar__card_title}>
                  The small calendar
                </h3>
                <p className={styles.calendar__card_text}>
                  Allows you to quickly navigate through the months and select a
                  specific month, week or day for easy navigation.
                </p>
              </div>
            </div>
            <div className={styles.calendar__card}>
              <div className={styles.calendar__dot} />
              <div>
                <h3 className={styles.calendar__card_title}>
                  Division of days and weeks
                </h3>
                <p className={styles.calendar__card_text}>
                  Stay on top of your tasks with our Calendar feature! Readily
                  divide your days and weeks to maximize productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
