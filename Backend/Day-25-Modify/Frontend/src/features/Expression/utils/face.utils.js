import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

// to reduce load from CPU
let lastDetectionTime = 0;
const DETECTION_INTERVAL = 2000;

export const init = async ({ landmarkerRef }) => {
  if (landmarkerRef.current) return;

  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm",
  );

  landmarkerRef.current = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1,
  });
};

export const detect = ({ landmarkerRef, videoRef, setExpression }) => {
  if (videoRef.current.readyState !== 4) return;
  const now = Date.now();
  if (now - lastDetectionTime < DETECTION_INTERVAL) return;
  lastDetectionTime = now;

  if (!landmarkerRef.current || !videoRef.current) return;

  const results = landmarkerRef.current.detectForVideo(
    videoRef.current,
    videoRef.current.currentTime * 1000,
  );

  if (results.faceBlendshapes?.length > 0) {
    const blendshapes = results.faceBlendshapes[0].categories;

    const getScore = (name) =>
      blendshapes.find((b) => b.categoryName === name)?.score || 0;

    const smileLeft = getScore("mouthSmileLeft");
    const smileRight = getScore("mouthSmileRight");
    const jawOpen = getScore("jawOpen");
    const browUp = getScore("browInnerUp");
    const frownLeft = getScore("mouthFrownLeft");
    const frownRight = getScore("mouthFrownRight");

    let currentExpression = "neutral";

    if (smileLeft > 0.5 && smileRight > 0.5) {
      currentExpression = "happy";
    } else if (jawOpen > 0.2 && browUp > 0.2) {
      currentExpression = "suprised";
    } else if (frownLeft > 0.3 && frownRight > 0.3) {
      currentExpression = "sad";
    }

    setExpression(currentExpression);

    return currentExpression;
  }
};
