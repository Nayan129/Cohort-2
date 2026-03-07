import { useEffect, useRef, useState, useCallback } from "react";
import { init, detect } from "../utils/face.utils";
import "../styles/faceExpression.scss";

export default function FaceExpression({ onClick }) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Click Detect");
  const [modelLoaded, setModelLoaded] = useState(false);

  // start camera only
  useEffect(() => {
    const startCamera = async () => {
      streamRef.current = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      videoRef.current.srcObject = streamRef.current;
      await videoRef.current.play();
    };

    startCamera();

    return () => {
      landmarkerRef.current?.close();

      videoRef.current?.srcObject?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const handleClick = useCallback(async () => {
    // load model only once
    if (!modelLoaded) {
      await init({ landmarkerRef, videoRef, streamRef });
      setModelLoaded(true);
    }

    const result = detect({
      landmarkerRef,
      videoRef,
      setExpression,
    });

    if (!result) return;

    onClick(result);
  }, [modelLoaded, onClick]);

  return (
    <div className="face-exp">
      <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
        width="480"
        height="320"
      />

      <h2 className="detect">{expression}</h2>

      <button className="detect-btn" onClick={handleClick}>
        Detect Expression
      </button>
    </div>
  );
}

