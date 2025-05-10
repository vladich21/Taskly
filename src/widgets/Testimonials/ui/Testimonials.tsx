import styles from "./testimonials.module.scss";
import symbol from "@shared/assets/icons/lending/“.svg";
import user1 from "@shared/assets/images/men_one.png";
import user2 from "@shared/assets/images/men_two.png";
import google from "@shared/assets/icons/lending/logo_one.svg";
import yandex from "@shared/assets/icons/lending/logo_two.svg";
import wework from "@shared/assets/icons/lending/logo_three.svg";
import microsoft from "@shared/assets/icons/lending/logo_four.svg";
import netflix from "@shared/assets/icons/lending/logo_five.svg";
import spotify from "@shared/assets/icons/lending/logo_six.svg";

const testimonials = [
  {
    text: "User-friendly interface! I love how easy it is to navigate, making my daily tasks feel manageable and straightforward.",
    name: "Alice Johnson",
  },
  {
    text: "I love the priority tagging system. It keeps me focused on what matters most daily.",
    name: "Bob Smith",
  },
  {
    text: "Regular updates keep things fresh! It feels like they really care about users’ feedback.",
    name: "Carlos Ramirez",
  },
  {
    text: "I’m more productive since using this site! It’s transformed my workflow in amazing ways.",
    name: "Diana Ross",
  },
  {
    text: "Time tracking feature is a game-changer! Helps me stay accountable and organized daily.",
    name: "Eve White",
  },
  {
    text: "The ability to group tasks is amazing! Makes managing projects so much easier and smoother.",
    name: "Frank Taylor",
  },
];

export const Testimonials = () => {
  return (
    <section className={styles.testimonialsWrapper}>
      <div className={styles.testimonials}>
        <h2 className={styles.testimonials__title}>What our users say</h2>
        <div className={styles.testimonials__cards}>
          <div className={styles.testimonials__card}>
            <div className={styles.testimonials__card_content}>
              <img src={user1} alt="Nicolas Freidman" />
              <div className={styles.testimonials__text}>
                <h3>Nicolas Freidman</h3>
                <img
                  className={styles.testimonials__img}
                  src={symbol}
                  alt="symbol"
                />
                <p className={styles.testimonials__text_one}>
                  In a world where many platforms offer similar functionalities,{" "}
                  <span className={styles.testimonials__highlight}>Taskly</span>
                  's unique approach to task prioritization truly sets it apart.
                  It’s inspiring to see a site that pushes the boundaries of
                  what productivity tools can achieve.
                </p>
                <span className={styles.testimonials__subtitle}>
                  Founder of SEO company
                </span>
              </div>
            </div>
          </div>

          <div className={styles.testimonials__card}>
            <div className={styles.testimonials__card_content}>
              <img src={user2} alt="George Addington" />
              <div className={styles.testimonials__text}>
                <h3>George Addington</h3>
                <img
                  className={styles.testimonials__img}
                  src={symbol}
                  alt="symbol"
                />
                <p>
                  It’s fascinating to see how{" "}
                  <span className={styles.testimonials__highlight}>Taskly</span>{" "}
                  has mastered the art of user interface design. The intuitive
                  layout makes task management feel effortless.
                </p>
                <span className={styles.testimonials__subtitle}>
                  Co-founder of web studio
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonials__quotes}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialText}>{item.text}</p>
              <span className={styles.testimonialName}>{item.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.testimonials__brands}>
          <img src={google} alt="Google" />
          <img src={yandex} alt="Yandex" />
          <img src={wework} alt="Wework" />
          <img src={microsoft} alt="Microsoft" />
          <img src={netflix} alt="Netflix" />
          <img src={spotify} alt="Spotify" />
        </div>
      </div>
    </section>
  );
};
