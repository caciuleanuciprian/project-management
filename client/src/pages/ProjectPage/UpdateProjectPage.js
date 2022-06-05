import axios from "axios";
import { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UpdateProjectForm from "../../components/Projects/UpdateProjectForm";
import Navigation from "../../components/UI/Navigation";
import styles from "./CreateProjectPage.module.css";
import Loader from "../../components/UI/Loader";

const UpdateProjectPage = () => {
  const [data, setData] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_LINK}/projects/${location.state}`)
      .then((res) => res.data)
      .then((data) => setData(data));
  };

  if (data === undefined) {
    fetchData();
  }
  return (
    <Fragment>
      <Navigation />
      <div className={styles.createProjectContainer}>
        {data === undefined ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : (
          <div className={styles.createProjectMiddleContainer}>
            <button
              className={styles.backBtn}
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
            <p className={styles.createProjectTitle}>
              Update project: {location.state}
            </p>
            <UpdateProjectForm data={data} />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default UpdateProjectPage;
