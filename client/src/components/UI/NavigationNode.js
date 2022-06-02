import styles from "./Navigation.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactToolTip from "react-tooltip";

import { Link } from "react-router-dom";

const NavigationNode = (props) => {
  return props.implemented ? (
    <Link className={styles.linkBtn} to={`${props.link}`}>
      <li className={styles.sidebarLi}>
        <div>
          <FontAwesomeIcon icon={props.icon} className={styles.sidebarIcon} />
          <span className={styles.textBtn}>{props.text}</span>
        </div>
      </li>
    </Link>
  ) : (
    <Link
      to={`#`}
      data-tip="NOT IMPLEMENTED"
      data-for="navigation"
      className={styles.linkBtn}
    >
      <li className={styles.sidebarLiNotImplemented}>
        <div>
          <FontAwesomeIcon icon={props.icon} className={styles.sidebarIcon} />
          <span className={styles.textBtn}>{props.text}</span>
        </div>
      </li>
      <ReactToolTip
        backgroundColor="#051367"
        id="navigation"
        place="right"
        offset="{'right': 10}"
        type="dark"
      />
    </Link>
  );
};

export default NavigationNode;
