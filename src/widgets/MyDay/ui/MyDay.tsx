import styles from "./myday.module.scss";
import myday from "@shared/assets/icons/Mydaybig.svg";
import mydayTwo from "@shared/assets/icons/Myday-two.svg";

export const MyDay = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.myday}>
        <div className={styles.myday__header}>
          <h2>My Day</h2>
          <p>
            My Day is a convenient tool for planning and organizing your work
            time and personal affairs
          </p>
        </div>
      </div>
      <div className={styles.myday__content}>
        <div className={styles.myday__cards}>
          <div className={styles.myday__card}>
            <div className={styles.myday__dot} />
            <div>
              <h3 className={styles.myday__card_title}>
                Easily edit, add and delete
              </h3>
              <p className={styles.myday__card_text}>
                Effortlessly manage your tasks with our intuitive interface!
                Easily edit, add, or delete items on your to-do list in just a
                few clicks.
              </p>
            </div>
          </div>
          <div className={styles.myday__card}>
            <div className={styles.myday__dot} />
            <div>
              <h3 className={styles.myday__card_title}>
                Variety of sorting types
              </h3>
              <p className={styles.myday__card_text}>
                Easily organize tasks by priority, due date, or category to
                focus on what's important and align your to-do list with your
                goals.
              </p>
            </div>
          </div>
          <div className={styles.myday__card}>
            <div className={styles.myday__dot} />
            <div>
              <h3 className={styles.myday__card_title}>
                Convenient user interface
              </h3>
              <p className={styles.myday__card_text}>
                Quickly add, edit, or remove tasks to keep your to-do list
                updated. Enjoy a clean design for easy navigation and focus on
                what matters most.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.myday__image}>
          <img src={myday} alt="My day illustration" />
        </div>
        <div className={styles.myday__image_two}>
          <img src={mydayTwo} alt="My day illustration next" />
        </div>
      </div>
    </section>
  );
};
