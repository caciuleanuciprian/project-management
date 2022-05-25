import axios from "axios";
import { useEffect, useState } from "react";

const CreateTaskForm = () => {
  const [task, setTask] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [assigned, setAssigned] = useState();
  const [reporter, setReporter] = useState();
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
    axios.post(`${process.env.REACT_APP_API_LINK}/tasks/createTask`, task);
  };

  console.log(task);

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
      <label>Assigned</label>
      <select defaultValue="" name="assigned" onChange={assignedHandler}>
        <option value=""></option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <label>Reporter</label>
      <input
        type="text"
        value={reporter}
        name="reporter"
        onChange={reporterHandler}
      ></input>
      <label>Type</label>
      <select defaultValue="" name="type" onChange={typeHandler}>
        <option value=""></option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <label>Estimation</label>
      <input
        type="text"
        value={estimation}
        name="estimation"
        onChange={estimationHandler}
      ></input>
      <button type="button" onClick={submitTask}>
        Submit
      </button>
    </form>
  );
};

export default CreateTaskForm;
