import sevendays from "@shared/assets/icons/7days-big.svg";
import styles from "./sevendays.module.scss";
export const SevenDays = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sevenday}>
        <div className={styles.sevenday__header}>
          <h2>7 Days</h2>
          <p>
            Planning 7 days ahead allows you to effectively distribute tasks,
            providing a structured approach to achieving your weekly goals
          </p>
        </div>
      </div>
      <div className={styles.sevenday__content}>
        <div className={styles.sevenday__cards}>
          <div className={styles.sevenday__card}>
            <div className={styles.sevenday__dot} />
            <div>
              <h3 className={styles.sevenday__card_title}>
                Reviewing tasks for the week
              </h3>
              <p className={styles.sevenday__card_text}>
                Take control of your week by reviewing tasks with ease! Break
                your goals into manageable steps to make the most of each
                productive day!
              </p>
            </div>
          </div>
          <div className={styles.sevenday__card}>
            <div className={styles.sevenday__dot} />
            <div>
              <h3 className={styles.sevenday__card_title}>
                Clean and simple design
              </h3>
              <p className={styles.sevenday__card_text}>
                Experience clarity with our clean and simple design! Seamlessly
                organize your tasks with an intuitive layout that enhances your
                efficiency.
              </p>
            </div>
          </div>
          <div className={styles.sevenday__card}>
            <div className={styles.sevenday__dot} />
            <div>
              <h3 className={styles.sevenday__card_title}>
                Changing weekly tasks
              </h3>
              <p className={styles.sevenday__card_text}>
                Simplify your tasks! Easily update, rearrange, or delete tasks
                to keep your to-do list organized and focus on your week's
                priorities.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sevenday__image}>
          <img src={sevendays} alt="My day illustration" />
        </div>
      </div>
    </section>
  );
};
