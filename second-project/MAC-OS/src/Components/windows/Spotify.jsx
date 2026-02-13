import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";
const Spotify = ({ windowName, setWindowState }) => {
  return (
    <MacWindow
      width="30vw"
      windowName={windowName}
      setWindowState={setWindowState}
    >
      <div className="spotify-window">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?theme=0"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
    </MacWindow>
  );
};

export default Spotify;
