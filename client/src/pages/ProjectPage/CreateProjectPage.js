import { Fragment } from "react";
import CreateProjectForm from "../../components/Projects/CreateProjectForm";
import Navigation from "../../components/UI/Navigation";
import styles from "./CreateProjectPage.module.css";

const CreateProjectPage = () => {
  return (
    <Fragment>
      <Navigation />
      <div className={styles.createProjectContainer}>
        <div className={styles.createProjectMiddleContainer}>
          <p className={styles.createProjectTitle}>Create a new Project</p>
          <CreateProjectForm />
        </div>
      </div>
    </Fragment>
  );
};

export default CreateProjectPage;
