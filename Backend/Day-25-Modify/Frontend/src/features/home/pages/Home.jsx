import FaceExpression from "../../Expression/components/FaceExpression";
import Player from "../components/Player";
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
      <Player />
    </>
  );
};

export default Home;
