import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../pages/Landing";
import { Register } from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "register",
        element: <Register />,
    }
]);

export const AppRouter = () => <RouterProvider router={router} />;