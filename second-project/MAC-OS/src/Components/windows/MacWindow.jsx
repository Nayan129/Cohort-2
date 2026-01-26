import { Rnd } from "react-rnd";
import "./window.scss";
const MacWindow = ({ children }) => {
  return (
    <Rnd
      default={{
        width: "45vw",
        height: "55vh",
        x: 150,
        y: 60,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>nayanbhusari - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
