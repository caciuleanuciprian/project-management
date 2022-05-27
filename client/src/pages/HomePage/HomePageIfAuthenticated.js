import { Fragment } from "react";
import Navigation from "../../components/UI/Navigation";
import ProjectList from "../../components/Projects/ProjectList";

import styles from "./HomePage.module.css";

const HomePageIfAuthenticated = () => {
  return (
    <Fragment>
      <Navigation />
      <div className={styles.authBody}>
        <div className={styles.authContainer}>
          <h1>Homepage</h1>
          <ProjectList />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePageIfAuthenticated;
