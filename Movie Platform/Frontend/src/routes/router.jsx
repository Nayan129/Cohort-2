import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../features/movies/Home";
import MovieDetails from "../features/movies/MovieDetails";
import Favorite from "../features/favorites/Favorite";
import History from "../features/history/History";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "favorites", element: <Favorite /> },
      { path: "history", element: <History /> },
    ],
  },
]);
