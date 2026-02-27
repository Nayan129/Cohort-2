import { useEffect, useRef, useState } from "react";
import { init, detect } from "../utils/face.utils";

export default function FaceExpression() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const animationRef = useRef(null);
  let stream;
  
  //this stream,videoRef,landmarkRef we have to send in props ans setExpression also 

  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {
    init();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

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
        style={{ width: "400px", borderRadius: "12px" }}
        playsInline
      />
      <h2>{expression}</h2>
      <button onClick={detect}>Detect expression</button>
    </div>
  );
}
