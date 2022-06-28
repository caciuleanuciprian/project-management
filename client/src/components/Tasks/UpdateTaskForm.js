import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./CreateTaskForm.module.css";

import { NotificationManager } from "react-notifications";

const UpdateTaskForm = (props) => {
  const getUsernameCookie = () => {
    var username = "username=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      // eslint-disable-next-line eqeqeq
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      // eslint-disable-next-line eqeqeq
      if (c.indexOf(username) == 0)
        return c.substring(username.length, c.length);
    }
    return null;
  };

  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(getUsernameCookie());
  const [task, setTask] = useState();
  const [title, setTitle] = useState(props.data.title);
  const [description, setDescription] = useState(props.data.description);
  const [assigned, setAssigned] = useState(props.data.assigned);
  const [reporter, setReporter] = useState(currentUser);
  const [type, setType] = useState(props.data.type);
  const [estimation, setEstimation] = useState(props.data.estimation);
  const [status, setStatus] = useState(props.data.status);

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const assignedHandler = (event) => {
    setAssigned(event.target.value);
  };
  const reporterHandler = (event) => {
    setReporter(event.target.value);
  };
  const typeHandler = (event) => {
    setType(event.target.value);
  };
  const estimationHandler = (event) => {
    setEstimation(event.target.value);
  };
  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  const taskHandler = () => {
    setTask({
      title: title,
      description: description,
      assigned: assigned,
      reporter: reporter,
      type: type,
      estimation: estimation,
      status: status,
    });
  };

  useEffect(() => {
    taskHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, assigned, reporter, type, estimation, status]);

  const submitTask = () => {
    axios
      .put(
        `${process.env.REACT_APP_API_LINK}/tasks/updateTask/${props.data._id}`,
        task
      )
      .then((res) => {
        NotificationManager.success("Task updated succesfully.", "", 3000);
        return res.data;
      })
      .then((data) => console.log(data))
      .catch((error) =>
        NotificationManager.error(`${error.response.data}`, "", 3000)
      );
  };

  return (
    <form className={styles.container}>
      <input
        type="text"
        value={title}
        name="title"
        onChange={titleHandler}
        className={styles.input}
        placeholder="Title"
      ></input>
      <textarea
        placeholder="Description"
        type="text"
        value={description}
        name="description"
        onChange={descriptionHandler}
        className={styles.textarea}
      ></textarea>
      <select
        className={styles.input}
        defaultValue={assigned}
        name="assigned"
        onChange={assignedHandler}
      >
        <option value="" disabled>
          Assigned
        </option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <input
        disabled
        placeholder="Reporter"
        className={styles.input}
        type="text"
        value={reporter}
        name="reporter"
        onChange={reporterHandler}
        style={{
          textTransform: "capitalize",
          opacity: 0.5,
        }}
      ></input>
      <select
        defaultValue={type}
        name="type"
        onChange={typeHandler}
        className={styles.input}
      >
        <option value="" disabled>
          Type
        </option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <input
        placeholder="Estimation"
        className={styles.input}
        type="text"
        value={estimation}
        name="estimation"
        onChange={estimationHandler}
      ></input>
      <select
        className={styles.input}
        defaultValue={status}
        name="status"
        onChange={statusHandler}
      >
        <option value="backlog">Backlog</option>
        <option value="development">Development</option>
        <option value="codeReview">Code Review</option>
        <option value="merged">Merged</option>
      </select>
      <button className={styles.button} type="button" onClick={submitTask}>
        Submit
      </button>
    </form>
  );
};

export default UpdateTaskForm;
