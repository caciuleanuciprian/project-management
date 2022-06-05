import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import CreateProjectPage from "../pages/ProjectPage/CreateProjectPage";
import LogoutPage from "../pages/LogoutPage/LogoutPage";
import CreateTaskPage from "../pages/TaskPage/CreateTaskPage";
import IssuesPage from "../pages/IssuesPage/IssuesPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import TaskPage from "../pages/TaskPage/TaskPage";
import UpdateProjectPage from "../pages/ProjectPage/UpdateProjectPage";

const RoutesMap = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
      <Route path="/projects/create" element={<CreateProjectPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/projects/:id/create-task" element={<CreateTaskPage />} />
      <Route path="/projects/:id/:id" element={<TaskPage />} />
      <Route path="/:id" element={<UpdateProjectPage />} />
      <Route path="/issues/:id" element={<TaskPage />} />
      <Route path="/issues" element={<IssuesPage />} />
      <Route path="/me" element={<ProfilePage />} />
    </Routes>
  );
};

export default RoutesMap;
