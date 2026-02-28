import { useEffect, useRef, useState } from "react";
import { init, detect } from "../utils/face.utils";
import "../styles/faceExpression.scss";

export default function FaceExpression() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  //this stream,videoRef,landmarkRef we have to send in props ans setExpression also

  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {
    const start = async () => {
      await init({ landmarkerRef, videoRef, streamRef });
    };

    start();

    return () => {
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="face-exp">
      <video ref={videoRef} playsInline />
      <h2 className="detect">{expression}</h2>
      <button
        className="detect-btn"
        onClick={() => detect({ landmarkerRef, videoRef, setExpression })}
      >
        Detect expression
      </button>
    </div>
  );
}
