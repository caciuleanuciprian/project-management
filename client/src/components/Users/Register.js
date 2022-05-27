import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../UI/Loader";

import styles from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(false);
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const roleHandler = (event) => {
    setRole(event.target.value);
  };

  const registerUser = () => {
    setUser({
      username: username,
      password: password,
      email: email,
      role: role,
    });
  };

  useEffect(() => {
    registerUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, password, email, role]);

  const postRequest = () => {
    setFetching(true);
    axios
      .post(`${process.env.REACT_APP_API_LINK}/users/createUser`, user)
      .then((res) => res)
      .then((error) => {
        if (!error) {
          navigate("/login");
        }
      })
      .catch((error) => {
        alert(error.response.data);
        setFetching(false);
      });
  };
  return (
    <form className={styles.registerForm}>
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
      <input
        className={styles.input}
        onChange={emailHandler}
        name="email"
        type="email"
        placeholder="Email..."
      ></input>
      <select
        className={styles.input}
        onChange={roleHandler}
        name="role"
        defaultValue=""
      >
        <option value="" disabled>
          Role *if known
        </option>
        <option value="Project Manager">Project Manager</option>
        <option value="Product Owner">Product Owner</option>
        <option value="SCRUM Master">SCRUM Master</option>
        <option value="Developer">Developer</option>
      </select>
      {fetching ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            registerUser();
            postRequest();
          }}
        >
          Register
        </button>
      )}
    </form>
  );
};

export default Register;
