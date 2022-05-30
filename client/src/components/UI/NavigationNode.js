import styles from "./Navigation.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const NavigationNode = (props) => {
  const navigate = useNavigate();
  return props.implemented ? (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      onClick={() => {
        navigate(props.link);
      }}
      className={styles.linkBtn}
    >
      <li className={styles.sidebarLi}>
        <div>
          <FontAwesomeIcon icon={props.icon} className={styles.sidebarIcon} />
          <span className={styles.textBtn}>{props.text}</span>
        </div>
      </li>
    </a>
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className={styles.linkBtn}>
      <li className={styles.sidebarLiNotImplemented}>
        <div>
          <FontAwesomeIcon icon={props.icon} className={styles.sidebarIcon} />
          <span className={styles.textBtn}>{props.text}</span>
        </div>
      </li>
    </a>
  );
};

export default NavigationNode;
