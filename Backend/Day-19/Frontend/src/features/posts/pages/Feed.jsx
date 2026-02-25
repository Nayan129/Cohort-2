import "../styles/feed.scss";
import Post from "../components/post";
import { usePost } from "../hooks/usePost";
import { useEffect } from "react";
import Nav from "../../shared/components/Nav";

const Feed = () => {
  const { feed, loading, handleGetFeed } = usePost();

  useEffect(() => {
    if (!feed || feed.length === 0) {
      handleGetFeed();
    }
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>Feed is Loading....</h1>
      </main>
    );
  }

  return (
    <main className="feed-page">
      <div className="feed">
        <Nav className="navbar" />
        <div className="posts">
          {feed.map((post) => (
            <Post key={post._id} user={post.user} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Feed;
