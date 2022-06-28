import { Fragment } from "react";
import Navigation from "../../components/UI/Navigation";
import TaskList from "../../components/Tasks/TaskList";
import styles from "./IssuesPage.module.css";

const IssuesPage = () => {
  return (
    <Fragment>
      <Navigation />
      <div className={styles.issuesBody}>
        <div className={styles.issuesContainer}>
          <p className={styles.issuesTitle}>Issues Page</p>
          <div className={styles.issuesTaskList}>
            <TaskList />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default IssuesPage;
