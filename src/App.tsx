import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import ProjectsDashboard from "./pages/projects/ProjectsDashboard";
import ProjectDetails from "./pages/projects/ProjectDetails";
import DashboardLayout from "./layout/DashboardLayout";
import type { JSX } from "react";

const isAuthenticated = () => !!localStorage.getItem("pm-auth");

const PrivateRoute = ({ children }: { children: JSX.Element }) =>
  isAuthenticated() ? children : <Navigate to="/login" />;

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<ProjectsDashboard />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
}
