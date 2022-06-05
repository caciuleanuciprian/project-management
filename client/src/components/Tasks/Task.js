import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Task.module.css";

const Task = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      className={styles.container}
      onClick={() => {
        navigate(props.id, { state: props.id });
      }}
    >
      <p className={styles.title}>{props.title}</p>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.people}>
        <p className={styles.assigned}>
          <span className={styles.smallText}>Assigned:</span>{" "}
          {props.assigned ? props.assigned : "none"}
        </p>
        <p className={styles.reporter} style={{ textTransform: "capitalize" }}>
          <span className={styles.smallText}>Reporter:</span> {props.reporter}
        </p>
      </div>
      <div className={styles.people}>
        <p className={styles.type}>
          <span className={styles.smallText}>Type:</span> {props.type}
        </p>
        <p className={styles.estimation}>
          <span className={styles.smallText}>
            Estimation: {props.estimation} SP
          </span>
        </p>
      </div>
    </div>
  );
};

export default Task;
