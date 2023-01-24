import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/UI/Loader";
import Navigation from "../../components/UI/Navigation";

import Task from "../../components/Tasks/Task";

import styles from "./ProjectPage.module.css";
const tasksArray = [];
const ProjectPage = () => {
  const [data, setData] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const fetchProjectData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_LINK}${location.pathname}`)
      .then((res) => res.data)
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  const fetchTasks = async (task) => {
    await axios
      .get(`${process.env.REACT_APP_API_LINK}/tasks/${task}`)
      .then((res) => res.data)
      .then((data) => {
        tasksArray.push(data);
        console.log(data);
      });
  };

  if (data === undefined) {
    fetchProjectData();
  }

  useEffect(() => {
    if (data !== undefined) {
      data.tasks.forEach((task) => {
        fetchTasks(task);
      });
    }
  }, [data]);

  console.log(tasksArray);

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
                {tasksArray.map((task) => {
                  if (task.status === "backlog") {
                    return (
                      <Task
                        key={task._id}
                        id={task._id}
                        title={task.title}
                        description={task.description}
                        assigned={task.assigned}
                        reporter={task.reporter}
                        type={task.type}
                        estimation={task.estimation}
                      />
                    );
                  }
                  return null;
                })}
              </div>
              <div className={styles.column}>
                <p className={styles.columnTitle}>Development</p>
                {tasksArray.map((task) => {
                  if (task.status === "development") {
                    return (
                      <Task
                        key={task._id}
                        id={task._id}
                        title={task.title}
                        description={task.description}
                        assigned={task.assigned}
                        reporter={task.reporter}
                        type={task.type}
                        estimation={task.estimation}
                      />
                    );
                  }
                  return null;
                })}
              </div>
              <div className={styles.column}>
                <p className={styles.columnTitle}>Code Review</p>
                {tasksArray.map((task) => {
                  if (task.status === "codeReview") {
                    return (
                      <Task
                        key={task._id}
                        id={task._id}
                        title={task.title}
                        description={task.description}
                        assigned={task.assigned}
                        reporter={task.reporter}
                        type={task.type}
                        estimation={task.estimation}
                      />
                    );
                  }
                  return null;
                })}
              </div>
              <div className={styles.column}>
                <p className={styles.columnTitle}>Merged</p>
                {tasksArray.map((task) => {
                  if (task.status === "merged") {
                    return (
                      <Task
                        key={task._id}
                        id={task._id}
                        title={task.title}
                        description={task.description}
                        assigned={task.assigned}
                        reporter={task.reporter}
                        type={task.type}
                        estimation={task.estimation}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ProjectPage;
