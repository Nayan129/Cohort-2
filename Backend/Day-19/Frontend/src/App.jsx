import { RouterProvider } from "react-router";
import { router } from "./appRouter";
import "./features/shared/globle.scss";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
