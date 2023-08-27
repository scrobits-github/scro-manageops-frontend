import ErrorPage from "../pages/error";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Project from "../pages/project";
import Team from "../pages/team";
import Clients from "../pages/clients";

export function LoggedOutRouteConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>{" "}
    </>
  );
}
export function LoggedInRouteConfig() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/project" element={<Project />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
