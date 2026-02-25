import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export async function getFeed() {
  const response = await api.get("/posts/feed");
  return response.data;
}

export async function createPost(imageFile, caption) {
  const formData = new FormData();

  // here we sending image and caption from forntend to backend database
  formData.append("image", imageFile);
  formData.append("caption", caption);

  const response = await api.post("/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export async function toogleLike(postId) {
  const response = await api.post("/posts/like/" + postId);
  return response.data;
}
