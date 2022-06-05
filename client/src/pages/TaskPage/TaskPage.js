import { Fragment, useState } from "react";
import Navigation from "../../components/UI/Navigation";
import Loader from "../../components/UI/Loader";

import styles from "./TaskPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import UpdateTaskForm from "../../components/Tasks/UpdateTaskForm";

const TaskPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState();

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_LINK}/tasks/${location.state}`)
      .then((res) => res.data)
      .then((data) => setData(data));
  };

  if (data === undefined) {
    fetchData();
  }

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
            <button
              className={styles.backBtn}
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
            <h1 className={styles.createTaskTitle}>Update task: {data?._id}</h1>
            <UpdateTaskForm data={data} />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default TaskPage;
