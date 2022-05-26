import Register from "./components/Users/Register";
import Login from "./components/Users/Login";

import TaskList from "./components/Tasks/TaskList";
import CreateTaskForm from "./components/Tasks/CreateTaskForm";

import CreateProjectForm from "./components/Projects/CreateProjectForm";
import ProjectList from "./components/Projects/ProjectList";

import Navigation from "./components/UI/Navigation";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Navigation />
      <div className={styles.container}>
        <Login />
        <Register />
        <CreateTaskForm />
        <TaskList />
        <CreateProjectForm />
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
