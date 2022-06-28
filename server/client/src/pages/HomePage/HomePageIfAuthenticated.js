import { Fragment } from "react";
import Navigation from "../../components/UI/Navigation";
import ProjectList from "../../components/Projects/ProjectList";

import styles from "./HomePage.module.css";

const HomePageIfAuthenticated = (props) => {
  return (
    <Fragment>
      <Navigation />
      <div className={styles.authBody}>
        <div className={styles.authContainer}>
          <p className={styles.authTitle}>
            Welcome,{" "}
            <span className={styles.currentUser}>
              {props.currentAuthenticatedUser}
            </span>
          </p>
          <ProjectList />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePageIfAuthenticated;
