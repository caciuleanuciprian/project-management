import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/UI/Navigation";

import styles from "./CreateTaskPage.module.css";

import Loader from "../../components/UI/Loader";
import CreateTaskForm from "../../components/Tasks/CreateTaskForm";

const tasksArray = [];

const CreateTaskPage = () => {
  const [data, setData] = useState();
  const location = useLocation();

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_LINK}${location.state}`)
      .then((res) => res.data)
      .then((data) => setData(data));
  };

  if (data === undefined) {
    fetchData();
  }

  const addTaskToProject = (id) => {
    tasksArray.push(id);
    axios.put(
      `${process.env.REACT_APP_API_LINK}/projects/updateProjectWithTasks/${data._id}`,
      {
        tasks: [...data.tasks, ...tasksArray],
      }
    );
    console.log(data);
  };

  return (
    <Fragment>
      <Navigation />
      <div className={styles.createTaskContainer}>
        {data === undefined ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : (
          <div className={styles.createTaskMiddleContainer}>
            <h1 className={styles.createTaskTitle}>
              Create a new task for project: {data?.title}
            </h1>
            <CreateTaskForm sendTaskIdToParent={addTaskToProject} />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CreateTaskPage;
