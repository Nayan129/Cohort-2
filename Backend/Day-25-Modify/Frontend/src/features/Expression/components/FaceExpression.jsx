import { useEffect, useRef, useState, useCallback } from "react";
import { init, detect } from "../utils/face.utils";
import "../styles/faceExpression.scss";

export default function FaceExpression({ onClick }) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {
    const start = async () => {
      await init({ landmarkerRef, videoRef, streamRef });
    };

    start();

    return () => {
      landmarkerRef.current?.close();

      videoRef.current?.srcObject?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const handleClick = useCallback(() => {
    const result = detect({ landmarkerRef, videoRef, setExpression });

    if (!result) return;

    onClick(result);
  }, [onClick]);

  return (
    <div className="face-exp">
      <video ref={videoRef} playsInline autoPlay muted />
      <h2 className="detect">{expression}</h2>

      <button className="detect-btn" onClick={handleClick}>
        Detect Expression
      </button>
    </div>
  );
}
