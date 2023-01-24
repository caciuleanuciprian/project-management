import axios from "axios";

import Project from "./Project";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ProjectList.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Loader from "../UI/Loader";

const ProjectList = () => {
  const navigate = useNavigate();
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

  return (
    <div className={styles.container}>
      {fetched ? (
        projectsList.map((element) => {
          console.log(element);
          return (
            <Project
              key={element._id}
              id={element._id}
              title={element.title}
              description={element.description}
              tasks={element.tasks}
              members={element.members}
            />
          );
        })
      ) : (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      {fetched ? (
        <div
          onClick={() => navigate("/projects/create")}
          className={styles.containerFacade}
        >
          <h1 className={styles.titleFacade}>{"Create a new project"}</h1>
          <FontAwesomeIcon icon={faCirclePlus} className={styles.plus} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectList;
