import { useEffect, useState } from "react";

import axios from "axios";

const Login = () => {
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
    document.cookie = `id=${fetchedData._id}; max-age=3600; path=/`;
    document.cookie = `username=${fetchedData.username}; max-age=3600; path=/`;
    // Add redirect to Home with React Router
  };

  const getRequest = async () => {
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
      .catch((error) => alert(error));
  };
  return (
    <form>
      <label>Username</label>
      <input
        onChange={usernameHandler}
        name="username"
        type="username"
        placeholder="Username..."
      ></input>
      <label>Password</label>
      <input
        onChange={passwordHandler}
        name="password"
        type="password"
        placeholder="Password..."
      ></input>
      <button
        type="button"
        onClick={() => {
          userHandler();
          getRequest();
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
