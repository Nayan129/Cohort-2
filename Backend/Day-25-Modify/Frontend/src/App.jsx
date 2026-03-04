import "./features/shared/global.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./app.routes";
import { AuthProvider } from "./features/auth/auth.context";
const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
};

export default App;
