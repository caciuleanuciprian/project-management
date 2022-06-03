import { Fragment, useState } from "react";
import Navigation from "../../components/UI/Navigation";
import styles from "./ProfilePage.module.css";
import axios from "axios";
import Loader from "../../components/UI/Loader";
import Task from "../../components/Tasks/Task";

const ProfilePage = () => {
  const getUsernameCookie = () => {
    var username = "username=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(username) == 0)
        return c.substring(username.length, c.length);
    }
    return null;
  };

  const [currentUser, setCurrentUser] = useState(getUsernameCookie());
  const [data, setData] = useState();

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_LINK}/users/getUser/${currentUser}`)
      .then((res) => res.data)
      .then((data) => setData(data));
  };

  if (data === undefined) {
    fetchData();
  }

  return (
    <Fragment>
      <Navigation />
      <div className={styles.profileBody}>
        <div className={styles.profileContainer}>
          <div className={styles.profileInfoContainer}>
            <p className={styles.profileTitle}>Profile Page</p>
            {data === undefined ? (
              <div className={styles.loader}>
                <Loader />
              </div>
            ) : (
              <div className={styles.profileInfo}>
                <p className={styles.profileField}>
                  <span className={styles.profileUsername}>
                    {data.username}
                  </span>{" "}
                  - {data.role}
                </p>
                <p className={styles.profileField}>{data.email}</p>
                <p className={styles.profileField}>hyperlink to project</p>
                <p className={styles.profileField}>Hiring Date: 01/01/1970</p>
                <p className={styles.profileField}>
                  Dismissal Date: 01/01/1971
                </p>
                <hr className={styles.delimiter}></hr>
                <div className={styles.profileTasks}>
                  <p className={styles.profileTasksTitle}>Tasks</p>
                  <p className={styles.profileTasksOpened}>Opened</p>
                  <div className={styles.profileTasksContainer}>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                  </div>
                  <p className={styles.profileTasksClosed}>Closed</p>
                  <div className={styles.profileTasksContainer}>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                    <div className={styles.profileTaskElement}>
                      <Task />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfilePage;
