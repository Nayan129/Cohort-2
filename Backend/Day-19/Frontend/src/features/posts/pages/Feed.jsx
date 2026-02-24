import "../styles/feed.scss";
import Post from "../components/post";

const Feed = () => {
  return (
    <main>
      <div className="feed">
        <div className="posts">
          <Post />
        </div>
      </div>
    </main>
  );
};

export default Feed;
