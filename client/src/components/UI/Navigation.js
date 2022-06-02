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
        <NavigationNode
          implemented={true}
          icon={faTableColumns}
          text="Dashboard"
          link="/"
        />
        <NavigationNode
          implemented={false}
          icon={faChartLine}
          text="Performance"
        />
        <p className={styles.section}>CONTENT</p>
        <NavigationNode
          implemented={true}
          icon={faBug}
          text="Issues"
          link="/issues"
        />
        <NavigationNode
          implemented={false}
          icon={faCodeBranch}
          text="Branches"
        />
        <NavigationNode
          implemented={false}
          icon={faCodePullRequest}
          text="Pull requests"
        />
        <NavigationNode implemented={false} icon={faTerminal} text="Terminal" />
        <p className={styles.section}>CUSTOMIZATION</p>
        <NavigationNode implemented={false} icon={faCalendar} text="Calendar" />
        <NavigationNode
          implemented={false}
          icon={faPeopleGroup}
          text="Members"
        />
        <p className={styles.section}>ACCOUNT</p>
        <NavigationNode implemented={true} icon={faUser} text="Profile" />
        <NavigationNode
          implemented={true}
          icon={faRightFromBracket}
          text="Logout"
          link="/logout"
        />
      </ul>
    </nav>
  );
};

export default Navigation;
