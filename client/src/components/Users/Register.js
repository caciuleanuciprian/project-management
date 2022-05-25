import { useEffect, useState } from "react";

import axios from "axios";

const Register = () => {
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
    axios
      .post(`${process.env.REACT_APP_API_LINK}/users/createUser`, user)
      .then((res) => console.log(res))
      .catch((error) => alert(error.response.data));
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
      <label>Email</label>
      <input
        onChange={emailHandler}
        name="email"
        type="email"
        placeholder="Email..."
      ></input>
      <label>
        Role <span>*if known</span>
      </label>
      <select onChange={roleHandler} defaultValue="" name="role">
        <option value=""></option>
        <option value="Project Manager">Project Manager</option>
        <option value="Product Owner">Product Owner</option>
        <option value="SCRUM Master">SCRUM Master</option>
        <option value="Developer">Developer</option>
      </select>
      <button
        type="button"
        onClick={() => {
          registerUser();
          postRequest();
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Register;
