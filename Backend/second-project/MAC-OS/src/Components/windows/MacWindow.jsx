import { Rnd } from "react-rnd";
import "./window.scss";
const MacWindow = ({ children, width = "46vw", height = "55vh" }) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
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
