import styles from "./Task.module.css";

const Task = (props) => {
  return (
    <div className={styles.container}>
      <p>Task id: {props.taskId}.</p>
      <p>Title: {props.title}.</p>
      <p>Description: {props.description}.</p>
      <p>Assigned: {props.assigned}.</p>
      <p>Reporter: {props.reporter}.</p>
      <p>Type: {props.type}.</p>
      <p>Estimation: {props.estimation}.</p>
    </div>
  );
};

export default Task;
