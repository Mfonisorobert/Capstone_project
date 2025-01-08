import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../pages/Landing";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { HealthTracker } from "../pages/HealthTracker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "tracker",
    element: <HealthTracker />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
