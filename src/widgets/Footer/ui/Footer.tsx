import logoWhite from "@shared/assets/icons/logo-white.svg";
import styles from "./footer.module.scss";
import telegram from "@shared/assets/icons/telegram.svg";
import facebook from "@shared/assets/icons/facebook.svg";
import instagram from "@shared/assets/icons/instagram.svg";
import linkedin from "@shared/assets/icons/linkedin.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__column}>
          <div className={styles.logo}>
            <img src={logoWhite} alt="logo" />
          </div>
          <p className={styles.email}>taskly@gmail.com</p>
          <div className={styles.socials}>
            <img src={telegram} alt="telegram" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>

        <div className={styles.footer__column}>
          <h4>Calendar</h4>
          <ul>
            <li>About Calendar</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Post a review</li>
          </ul>
        </div>

        <div className={styles.footer__column}>
          <h4>Possibilities</h4>
          <ul>
            <li>To-do list</li>
            <li>My day</li>
            <li>7 days</li>
            <li>Calendar</li>
          </ul>
        </div>

        <div className={styles.footer__column}>
          <h4>Use cases</h4>
          <ul>
            <li>Personal</li>
            <li>For teams</li>
          </ul>
        </div>

        <div className={styles.footer__column}>
          <h4>Privacy Policy</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className={styles.footer__column}>
          <h4>Language</h4>
          <select>
            <option>English</option>
            <option>Русский</option>
          </select>
        </div>

        <div className={styles.footer__column}>
          <h4>Get the app</h4>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
            alt="Google Play"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
          />
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p>© 2025 Copyright: Taskly. All rights reserved.</p>
      </div>
    </footer>
  );
};
