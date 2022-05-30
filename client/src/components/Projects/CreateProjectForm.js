import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./CreateProjectForm.module.css";

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
    axios.post(
      `${process.env.REACT_APP_API_LINK}/projects/createProject`,
      project
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
      <input
        type="text"
        value={description}
        name="description"
        onChange={descriptionHandler}
        placeholder="Description"
        className={styles.input}
      ></input>
      <button type="button" onClick={submitTask} className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default CreateProjectForm;
