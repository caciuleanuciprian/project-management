import Register from "../../components/Users/Register";

import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div>
      <div className={styles.registerBody}>
        <div className={styles.registerContainer}>
          <p className={styles.registerParagraph}>Register</p>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
