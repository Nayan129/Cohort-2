import { useContext, useEffect } from "react";
import { PostContext } from "../post.context";

import { getFeed } from "../services/post.api";
import { createPost } from "../services/post.api";

export const usePost = () => {
  const context = useContext(PostContext);
  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
    try {
      setLoading(true);
      const data = await getFeed();
      setFeed(data?.posts || []);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async () => {
    loading(true);
    const data = await createPost();
    setFeed([data.post, ...feed]);
    setLoading(false);
  };

  // this useEffect we use for hydration

  useEffect(() => {
    handleGetFeed();
  }, []);

  return { loading, feed, post, handleGetFeed, handleCreatePost };
};
