import HeroPerson from "@shared/assets/images/personx2Tiny.png";
import styles from "./Hero.module.scss";
import MyDay from "@shared/assets/icons/lending/myday.svg";
import sevendays from "@shared/assets/icons/lending/7days.svg";
import Calendar from "@shared/assets/icons/lending/calendarsvg.svg";
import { useNavigate } from "react-router-dom";

type HeroBannerProps = {
  onScrollToMyDay: () => void;
  onScrollToSevenDays: () => void;
  onScrollToCalendar: () => void;
};

export const HeroBanner = ({
  onScrollToMyDay,
  onScrollToSevenDays,
  onScrollToCalendar,
}: HeroBannerProps) => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1>Organize your work and life</h1>
        <p>
          Simple and universal task planning for any of your tasks: <br />
          manage your time and effectively achieve your goals
        </p>
        <button
          className={styles.hero__button}
          onClick={() => navigate("/todo-list")}
        >
          Start for free
        </button>
        <div className={styles.hero__features}>
          <div className={styles.feature_card}>
            <div className={styles.feature_card__img} onClick={onScrollToMyDay}>
              <img src={MyDay} alt="My Day" />
              <div className={styles.feature_card__text}>My Day</div>
            </div>
          </div>
          <div className={styles.feature_card}>
            <div
              className={styles.feature_card__img}
              onClick={onScrollToSevenDays}
            >
              <img src={sevendays} alt="7 Days" />
              <div className={styles.feature_card__text}>7 Days</div>
            </div>
          </div>
          <div className={styles.feature_card}>
            <div
              className={styles.feature_card__img}
              onClick={onScrollToCalendar}
            >
              <img src={Calendar} alt="Calendar" />
              <div className={styles.feature_card__text}>Calendar</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero__image}>
        <img src={HeroPerson} alt="Person illustration" />
      </div>
    </section>
  );
};
