import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/UI/Loader";
import Navigation from "../../components/UI/Navigation";

import Task from "../../components/Tasks/Task";

import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  const [data, setData] = useState();
  const [tasksInfo, setTasksInfo] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_LINK}${location.pathname}`)
      .then((res) => res.data)
      .then((data) => setData(data));
  };

  if (data === undefined) {
    fetchData();
  }

  console.log(data);

  const displayTasksIfFetched = async () => {
    await data?.tasks.forEach((task) => {
      axios
        .get(`${process.env.REACT_APP_API_LINK}/tasks/${task}`)
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          tasksInfo.push(data);
        })
        .catch((error) => console.log(error));
    });
  };

  useEffect(() => {
    displayTasksIfFetched();
  }, [data]);
  console.log(tasksInfo);
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
              <p className={styles.projectParagraph}>Project {data?._id}</p>
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
                {tasksInfo.length === 0 ? (
                  <div>
                    <Loader />
                  </div>
                ) : (
                  tasksInfo?.map((task) => {
                    return (
                      <Task
                        key={task._id}
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
              </div>
              <div className={styles.column}>
                <p className={styles.columnTitle}>Code Review</p>
              </div>
              <div className={styles.column}>
                <p className={styles.columnTitle}>Merged</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ProjectPage;
