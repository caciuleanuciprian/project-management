import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./CreateTaskForm.module.css";

const CreateTaskForm = (props) => {
  const getUsernameCookie = () => {
    var username = "username=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(username) == 0)
        return c.substring(username.length, c.length);
    }
    return null;
  };

  const [currentUser, setCurrentUser] = useState(getUsernameCookie());
  const [task, setTask] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [assigned, setAssigned] = useState();
  const [reporter, setReporter] = useState(currentUser);
  const [type, setType] = useState();
  const [estimation, setEstimation] = useState();

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

  const taskHandler = () => {
    setTask({
      title: title,
      description: description,
      assigned: assigned,
      reporter: reporter,
      type: type,
      estimation: estimation,
    });
  };

  useEffect(() => {
    taskHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, assigned, reporter, type, estimation]);

  const submitTask = () => {
    axios
      .post(`${process.env.REACT_APP_API_LINK}/tasks/createTask`, task)
      .then((res) => res.data)
      .then((data) => props.sendTaskIdToParent(data._id))
      .catch((error) => console.log(error));
  };

  console.log(task);

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
        defaultValue=""
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
        defaultValue=""
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
      <button className={styles.button} type="button" onClick={submitTask}>
        Submit
      </button>
    </form>
  );
};

export default CreateTaskForm;
