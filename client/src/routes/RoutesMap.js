import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import CreateProjectPage from "../pages/ProjectPage/CreateProjectPage";
import LogoutPage from "../pages/LogoutPage/LogoutPage";
import CreateTaskPage from "../pages/TaskPage/CreateTaskPage";

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
    </Routes>
  );
};

export default RoutesMap;
