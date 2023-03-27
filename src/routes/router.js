import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import User from "../pages/User/User";
import ProtectedRoute from "../auth/ProtectedRoute";
import RedirectIfAuthenticate from "../auth/RedirectIfAuthenticate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <Login />
      </RedirectIfAuthenticate>
    )
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <User />
      </ProtectedRoute>
    )
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
