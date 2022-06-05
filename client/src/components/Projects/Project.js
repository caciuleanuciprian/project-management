import styles from "./Project.module.css";

import techImg from "../../images/techImg.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import ReactToolTip from "react-tooltip";

const Project = (props) => {
  const navigate = useNavigate();
  const navigateToProject = () => {
    navigate(`/projects/${props.id}`, { state: props.id });
  };
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer} onClick={navigateToProject}>
        <img src={techImg} alt="Technology" className={styles.image} />
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
      </div>
      <FontAwesomeIcon
        data-tip="Settings"
        data-for="settings"
        onClick={() => navigate(props.id, { state: props.id })}
        className={styles.settings}
        icon={faGear}
      />
      <ReactToolTip
        id="settings"
        backgroundColor="#2d31fa"
        place="left"
        type="dark"
        offset={{ left: "25px" }}
      />
    </div>
  );
};

export default Project;
