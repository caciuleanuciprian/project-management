import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./Task";

import styles from "./TaskList.module.css";

const TaskList = () => {
  const [list, setList] = useState([]);
  const [fetched, setFetched] = useState(false);
  const fetchTasks = () => {
    axios
      .get(`${process.env.REACT_APP_API_LINK}/tasks/getTasks`)
      .then((res) => res.data)
      .then((data) => {
        setList(data);
        setFetched(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTasks();
  }, [fetched]);

  return (
    <div className={styles.container}>
      {fetched ? (
        list.map((element) => {
          return (
            <Task
              key={element._id}
              taskId={element._id}
              title={element.title}
              description={element.description}
              assigned={element.assigned}
              reporter={element.reporter}
              type={element.type}
              estimation={element.estimation}
            />
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default TaskList;
