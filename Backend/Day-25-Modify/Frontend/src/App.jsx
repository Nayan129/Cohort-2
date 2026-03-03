import "./features/shared/global.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./app.routes";

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
