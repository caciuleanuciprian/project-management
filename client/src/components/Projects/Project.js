import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.tasks}</p>
      <p>{props.members}</p>
    </div>
  );
};

export default Project;
