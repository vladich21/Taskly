// widgets/Header/ui/Header.tsx
import { Link } from "react-router-dom";
import { Logo } from "@shared/components/ui/Logo/Logo";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>

        {/* Навигация */}
        <nav className={styles.nav}>
          <Link to="/possibilities" className={styles.navLink}>
            Possibilities <span className={styles.dropdownArrow}>▼</span>
          </Link>
          <Link to="/personal" className={styles.navLink}>
            Personal
          </Link>
          <Link to="/teams" className={styles.navLink}>
            For teams
          </Link>
          <Link to="/pricing" className={styles.navLink}>
            Pricing
          </Link>
        </nav>

        {/* Кнопки справа */}
        <div className={styles.actions}>
          <Link to="/login" className={styles.loginBtn}>
            Login
          </Link>
          <Link to="/signup" className={styles.signupBtn}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};
