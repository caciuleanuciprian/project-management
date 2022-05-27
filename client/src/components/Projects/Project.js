import styles from "./Project.module.css";

import techImg from "../../images/techImg.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

// Cannot tap on buttons!

const Project = (props) => {
  const doShit = () => {
    console.log("wtf");
  };
  return (
    <div onClick={doShit} className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      {/* <p>{props.tasks}</p>
      <p>{props.members}</p> */}
      {/* <FontAwesomeIcon
        onClick={doShit}
        className={styles.settings}
        icon={faGear}
      /> */}
      <button onClick={() => doShit()}>asd</button>
    </div>
  );
};

export default Project;
