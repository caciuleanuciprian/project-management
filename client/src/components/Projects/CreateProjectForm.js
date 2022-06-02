import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./CreateProjectForm.module.css";

import { NotificationManager } from "react-notifications";

const CreateProjectForm = () => {
  const [project, setProject] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const projectHandler = () => {
    setProject({
      title: title,
      description: description,
    });
  };

  useEffect(() => {
    projectHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description]);

  const submitTask = () => {
    axios
      .post(`${process.env.REACT_APP_API_LINK}/projects/createProject`, project)
      .then((res) =>
        NotificationManager.success("Project added succesfully.", "", 3000)
      )
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
        placeholder="Title"
        className={styles.input}
      ></input>
      <textarea
        type="text"
        value={description}
        name="description"
        onChange={descriptionHandler}
        placeholder="Description"
        className={styles.textarea}
      ></textarea>
      <button type="button" onClick={submitTask} className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default CreateProjectForm;
