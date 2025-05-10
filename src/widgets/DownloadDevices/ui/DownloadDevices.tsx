import styles from "./downloaddevices.module.scss";
import googleSvg from "@shared/assets/icons/lending/download_google.svg";
import appleSvg from "@shared/assets/icons/lending/download_apple.svg";
import devices from "@shared/assets/images/devices.png";

export const DownloadDevices = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.download}>
        <h2>Use Taskly on all devices</h2>
        <p>Our app can be used anytime on all devices, try it for free.</p>
        <div className={styles.download__button}>
          <img src={googleSvg} alt="google image" />
          <img src={appleSvg} alt="google image" />
        </div>
        <div className={styles.download__image}>
          <img src={devices} alt="devices" />
        </div>
        <p className={styles.download__text}>
          Are you ready to organize your work and life?
        </p>
        <button className={styles.download__button_start}>
          Try Tuskly for free
        </button>
      </div>
    </section>
  );
};
