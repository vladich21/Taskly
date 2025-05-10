import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@shared/components/ui/Logo/ui/Logo";
import styles from "./header.module.scss";
import cn from "classnames";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest(`.${styles.mobileMenu}`) &&
        !event.target.closest(`.${styles.burger}`)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>

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

        <div className={styles.actions}>
          <Link to="/login" className={styles.loginBtn}>
            Login
          </Link>
          <Link to="/signup" className={styles.signupBtn}>
            Sign up
          </Link>
        </div>

        <button
          className={cn(styles.burger, { [styles.open]: menuOpen })}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={cn(styles.mobileMenu, { [styles.open]: menuOpen })}>
        <Link to="/possibilities" onClick={() => setMenuOpen(false)}>
          Possibilities
        </Link>
        <Link to="/personal" onClick={() => setMenuOpen(false)}>
          Personal
        </Link>
        <Link to="/teams" onClick={() => setMenuOpen(false)}>
          For teams
        </Link>
        <Link to="/pricing" onClick={() => setMenuOpen(false)}>
          Pricing
        </Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>
          Login
        </Link>
        <Link to="/signup" onClick={() => setMenuOpen(false)}>
          Sign up
        </Link>
      </div>
    </header>
  );
};
