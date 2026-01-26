import "./app.scss";
import Dock from "./Components/Dock";
import Navbar from "./Components/Navbar";
import Github from "./Components/windows/Github";
import MacWindow from "./Components/windows/MacWindow";
import Note from "./Components/windows/Note";
import Resume from "./Components/windows/Resume";
const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <Github />
      <Note />
      <Resume />
    </main>
  );
};

export default App;
