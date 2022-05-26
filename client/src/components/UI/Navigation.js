import styles from "./Navigation.module.css";

import NavigationNode from "./NavigationNode";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faCodePullRequest } from "@fortawesome/free-solid-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navigation = () => {
  const [isInside, setIsInside] = useState();
  console.log(isInside);
  return (
    <nav
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className={isInside ? styles.sidebar : styles.sidebarToggle}
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        className={isInside ? styles.barsToggle : styles.bars}
      />
      <ul className={isInside ? styles.menu : styles.menuToggle}>
        <p className={styles.section}>ANALYTICS</p>
        <NavigationNode icon={faTableColumns} text="Dashboard" />
        <NavigationNode icon={faChartLine} text="Performance" />
        <p className={styles.section}>CONTENT</p>
        <NavigationNode icon={faBug} text="Issues" />
        <NavigationNode icon={faCodeBranch} text="Branches" />
        <NavigationNode icon={faCodePullRequest} text="Pull requests" />
        <NavigationNode icon={faTerminal} text="Terminal" />
        <p className={styles.section}>CUSTOMIZATION</p>
        <NavigationNode icon={faCalendar} text="Calendar" />
        <NavigationNode icon={faPeopleGroup} text="Members" />
        <p className={styles.section}>ACCOUNT</p>
        <NavigationNode icon={faUser} text="Profile" />
        <NavigationNode icon={faRightFromBracket} text="Logout" />
      </ul>
    </nav>
  );
};

export default Navigation;
