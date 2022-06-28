import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/UI/Loader";
import Navigation from "../../components/UI/Navigation";

import Task from "../../components/Tasks/Task";

import styles from "./ProjectPage.module.css";

import NotificationManager from "react-notifications/lib/NotificationManager";

const ProjectPage = () => {
  const [data, setData] = useState();
  const [backlogArray, setBacklogArray] = useState([]);
  const [developmentArray, setDevelopmentArray] = useState([]);
  const [codeReviewArray, setCodeReviewArray] = useState([]);
  const [mergedArray, setMergedArray] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const fetchProjectData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_LINK}${location.pathname}`)
      .then((res) => res.data)
      .then((data) => {
        setData(data);
      });
  };

  if (data === undefined) {
    fetchProjectData();
  }

  const backlogArrayHandler = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_LINK}/tasks/getTasks/backlog`)
      .then((res) => res.data)
      .then((data) => setBacklogArray(data));
  };

  const developmentArrayHandler = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_LINK}/tasks/getTasks/development`)
      .then((res) => res.data)
      .then((data) => setDevelopmentArray(data));
  };

  const codeReviewArrayHandler = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_LINK}/tasks/getTasks/codeReview`)
      .then((res) => res.data)
      .then((data) => setCodeReviewArray(data));
  };

  const mergedArrayHandler = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_LINK}/tasks/getTasks/merged`)
      .then((res) => res.data)
      .then((data) => setMergedArray(data));
  };

  useEffect(() => {
    if (data !== undefined) {
      backlogArrayHandler();
      developmentArrayHandler();
      codeReviewArrayHandler();
      mergedArrayHandler();
    }
    console.log(backlogArray, developmentArray, codeReviewArray, mergedArray);
  }, [data]);

  return (
    <Fragment>
      <Navigation />
      <div className={styles.projectContainer}>
        {data === undefined ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : (
          <div>
            <div className={styles.header}>
              <h1 className={styles.projectTitle}>{data?.title}</h1>
              <p className={styles.projectParagraph}>Project ID: {data?._id}</p>
              <p className={styles.projectParagraph}>{data?.description}</p>
              <button
                className={styles.addTaskBtn}
                type="button"
                onClick={() =>
                  navigate(`${location.pathname}/create-task`, {
                    state: location.pathname,
                  })
                }
              >
                Add Task
              </button>
            </div>
            <div className={styles.tasksList}>
              <div className={styles.column}>
                <p className={styles.columnTitle}>Backlog</p>
                {backlogArray?.length === 0 ? (
                  <div>
                    <p className={styles.projectParagraph}>
                      There are no tasks.
                    </p>
                  </div>
                ) : (
                  backlogArray?.map((task, index) => {
                    return (
                      <Task
                        key={index}
                        id={task._id}
                        title={task.title}
                        description={task.description}
                        assigned={task.assigned}
                        reporter={task.reporter}
                        type={task.type}
                        estimation={task.estimation}
                      />
                    );
                  })
                )}
              </div>
              <div className={styles.column}>
                <p className={styles.columnTitle}>Development</p>
                {developmentArray?.length === 0 ? (
                  <div>
                    <p className={styles.projectParagraph}>
                      There are no tasks.
                    </p>
                  </div>
                ) : (
                  developmentArray?.map((task, index) => {
                    return (
                      <Task
                        key={index}
                        id={task._id}
                        title={task.title}
                        description={task.description}
                        assigned={task.assigned}
                        reporter={task.reporter}
                        type={task.type}
                        estimation={task.estimation}
                      />
                    );
                  })
                )}
              </div>
              <div className={styles.column}>
                <p className={styles.columnTitle}>Code Review</p>
                {codeReviewArray?.length === 0 ? (
                  <div>
                    <p className={styles.projectParagraph}>
                      There are no tasks.
                    </p>
                  </div>
                ) : (
                  codeReviewArray?.map((task, index) => {
                    return (
                      <Task
                        key={index}
                        id={task._id}
                        title={task.title}
                        description={task.description}
                        assigned={task.assigned}
                        reporter={task.reporter}
                        type={task.type}
                        estimation={task.estimation}
                      />
                    );
                  })
                )}
              </div>
              <div className={styles.column}>
                <p className={styles.columnTitle}>Merged</p>
                {mergedArray?.length === 0 ? (
                  <div>
                    <p className={styles.projectParagraph}>
                      There are no tasks.
                    </p>
                  </div>
                ) : (
                  mergedArray?.map((task, index) => {
                    return (
                      <Task
                        key={index}
                        id={task._id}
                        title={task.title}
                        description={task.description}
                        assigned={task.assigned}
                        reporter={task.reporter}
                        type={task.type}
                        estimation={task.estimation}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ProjectPage;
