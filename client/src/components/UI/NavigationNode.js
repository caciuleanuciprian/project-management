import styles from "./Navigation.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavigationNode = (props) => {
  return (
    <a href={props.text} className={styles.linkBtn}>
      <li className={styles.sidebarLi}>
        <div>
          <FontAwesomeIcon icon={props.icon} className={styles.sidebarIcon} />
          <span className={styles.textBtn}>{props.text}</span>
        </div>
      </li>
    </a>
  );
};

export default NavigationNode;
