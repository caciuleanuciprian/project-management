import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CreateProjectForm from "../../components/Projects/CreateProjectForm";
import Navigation from "../../components/UI/Navigation";
import styles from "./CreateProjectPage.module.css";

const CreateProjectPage = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Navigation />
      <div className={styles.createProjectContainer}>
        <button
          className={styles.backBtn}
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
        <div className={styles.createProjectMiddleContainer}>
          <p className={styles.createProjectTitle}>Create a new Project</p>
          <CreateProjectForm />
        </div>
      </div>
    </Fragment>
  );
};

export default CreateProjectPage;
