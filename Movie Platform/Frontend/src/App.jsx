import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
