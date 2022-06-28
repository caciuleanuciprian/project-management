import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./Login.module.css";
import Loader from "../UI/Loader";

import { NotificationManager } from "react-notifications";

const Login = () => {
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(false);
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const userHandler = () => {
    setUser({
      username: username,
      password: password,
    });
  };

  useEffect(() => {
    userHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, password]);

  const redirectHome = (fetchedData) => {
    NotificationManager.success(
      "Login succesfully. You will be redirected to homepage.",
      "",
      3000
    );
    document.cookie = `id=${fetchedData._id}; max-age=3600; path=/`;
    document.cookie = `username=${fetchedData.username}; max-age=3600; path=/`;
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const getRequest = async () => {
    setFetching(true);
    await axios
      .get(`${process.env.REACT_APP_API_LINK}/users/getUser/${username}`)
      .then((res) => res.data)
      .then((data) => {
        if (data?.password === user.password) {
          redirectHome(data);
        } else {
          throw new Error("Username or password do not match.");
        }
      })
      .catch((error) => {
        NotificationManager.error(
          `Username or password is incorrect!`,
          "",
          3000
        );
        setFetching(false);
      });
  };
  return (
    <form className={styles.loginForm}>
      <input
        className={styles.input}
        onChange={usernameHandler}
        name="username"
        type="username"
        placeholder="Username..."
      ></input>
      <input
        className={styles.input}
        onChange={passwordHandler}
        name="password"
        type="password"
        placeholder="Password..."
      ></input>
      {fetching ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            userHandler();
            getRequest();
          }}
        >
          Login
        </button>
      )}
    </form>
  );
};

export default Login;
