import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/UI/Loader";

import styles from "./LogoutPage.module.css";

const LogoutPage = () => {
  const navigate = useNavigate();
  const removeCookie = () => {
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  };

  if (document.cookie !== "") {
    removeCookie();
  }

  const redirectWithDelay = () => {
    setTimeout(() => {
      if (document.cookie === "") {
        navigate("/");
      }
    }, 3000);
  };

  useEffect(() => {
    redirectWithDelay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.cookie]);
  return (
    <div className={styles.logoutContainer}>
      <Loader />
    </div>
  );
};

export default LogoutPage;
