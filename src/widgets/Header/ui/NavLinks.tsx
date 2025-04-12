import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/contact", label: "Contact" },
];

export const NavLinks = () => {
  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};
