import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <span className={styles.logo}>X.Hotel_logo</span>
        <div className={styles.navItems}>
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
