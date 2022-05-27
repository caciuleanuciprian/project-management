import axios from "axios";

import Project from "./Project";

import { useState, useEffect } from "react";

import styles from "./ProjectList.module.css";

const ProjectList = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [fetched, setFetched] = useState(false);
  const fetchProjects = () => {
    axios
      .get(`${process.env.REACT_APP_API_LINK}/projects/getProjects`)
      .then((res) => res.data)
      .then((data) => {
        setProjectsList(data);
        setFetched(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProjects();
  }, [fetched]);
  console.log(projectsList);
  return (
    <div className={styles.container}>
      {fetched ? (
        projectsList.map((element) => {
          return (
            <Project
              key={element._id}
              title={element.title}
              description={element.description}
              tasks={element.tasks}
              members={element.members}
            />
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProjectList;
