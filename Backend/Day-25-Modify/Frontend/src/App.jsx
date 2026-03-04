import "./features/shared/global.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./app.routes";
import { AuthProvider } from "./features/auth/auth.context";
import Protected from "./features/auth/components/Protected";
import { SongContextProvider } from "./features/home/song.context";
const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <SongContextProvider>
          <RouterProvider router={router} />
        </SongContextProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
