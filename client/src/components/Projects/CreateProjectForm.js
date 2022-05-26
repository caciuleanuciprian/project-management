import axios from "axios";
import { useEffect, useState } from "react";

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
    <form>
      <label>Title</label>
      <input
        type="text"
        value={title}
        name="title"
        onChange={titleHandler}
      ></input>
      <label>Description</label>
      <input
        type="text"
        value={description}
        name="description"
        onChange={descriptionHandler}
      ></input>
      <button type="button" onClick={submitTask}>
        Submit
      </button>
    </form>
  );
};

export default CreateProjectForm;
