import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Loader from "../UI/Loader";
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
  console.log(list);
  return (
    <Fragment>
      {fetched ? (
        list.length > 0 ? (
          <div className={styles.container}>
            {list.map((element) => {
              return (
                <Task
                  key={element._id}
                  id={element._id}
                  title={element.title}
                  description={element.description}
                  assigned={element.assigned}
                  reporter={element.reporter}
                  type={element.type}
                  estimation={element.estimation}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.container}>
            <p className={styles.issuesParagraph}>There are no tasks.</p>
          </div>
        )
      ) : (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
    </Fragment>
  );
};

export default TaskList;
