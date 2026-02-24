import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Feed from "./features/posts/pages/feed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="landing">Welcome to Instagram Clone Project</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
]);
