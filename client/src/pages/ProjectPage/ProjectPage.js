import axios from "axios";
import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader";
import Navigation from "../../components/UI/Navigation";

import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  const [data, setData] = useState();
  const location = useLocation();

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_LINK}${location.pathname}`)
      .then((res) => res.data)
      .then((data) => setData(data));
  };

  if (data === undefined) {
    fetchData();
  }

  return (
    <Fragment>
      <Navigation />
      <div className={styles.projectContainer}>
        {data === undefined ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : (
          <div>
            <h1 className={styles.projectTitle}>{data?.title}</h1>
            <p className={styles.projectParagraph}>Project {data?._id}</p>
            <p className={styles.projectParagraph}>{data?.description}</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ProjectPage;
