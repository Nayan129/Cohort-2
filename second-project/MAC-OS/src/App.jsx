import "./app.scss";
import Dock from "./Components/Dock";
import Navbar from "./Components/Navbar";
import MacWindow from "./Components/windows/MacWindow";
const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <MacWindow />
    </main>
  );
};

export default App;
