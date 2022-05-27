import { useNavigate } from "react-router-dom";

import styles from "./HomePage.module.css";

const HomePageIfNotAuthenticated = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.notAuthBody}>
      <div className={styles.notAuthContainer}>
        <p className={styles.notAuthParagraph}>
          In order to access this website you need to be{" "}
          <span className={styles.notAuthSpan}>authenticated</span>
        </p>
        <div className={styles.notAuthButtonsContainer}>
          <button
            className={styles.notAuthButton}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className={styles.notAuthButton}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomePageIfNotAuthenticated;
