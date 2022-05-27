import Login from "../../components/Users/Login";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginBody}>
      <div className={styles.loginContainer}>
        <p className={styles.loginParagraph}>Login</p>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
