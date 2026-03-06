import React, { Suspense } from "react";
import FaceExpression from "../../Expression/components/FaceExpression";
const Player = React.lazy(() => import("../components/Player"));
import { useSong } from "../hooks/useSong";
const Home = () => {
  const { handleGetSong } = useSong();
  return (
    <>
      <FaceExpression
        onClick={(expression) => {
          if (!expression) return;

          handleGetSong({ mood: expression });
        }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Player />
      </Suspense>
    </>
  );
};

export default Home;
