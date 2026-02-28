import { useEffect, useRef, useState } from "react";
import { init, detect } from "../utils/face.utils";

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
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        style={{ width: "500px", borderRadius: "12px" }}
        playsInline
      />
      <h2>{expression}</h2>
      <button
        style={{
          width: "200px",
          borderRadius: "12px",
          padding: "15px 10px",
          background: "green",
          color: "white",
          fontWeight: "600",
          border: "none",
          cursor: "pointer",
          textAlign: "center",
        }}
        onClick={() => detect({ landmarkerRef, videoRef, setExpression })}
      >
        Detect expression
      </button>
    </div>
  );
}
