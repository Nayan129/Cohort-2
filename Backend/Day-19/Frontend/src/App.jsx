import { RouterProvider } from "react-router";
import { router } from "./appRouter";
import { AuthProvider } from "./features/auth/auth.context";
import { PostProvider } from "./features/posts/post.context";
import "./features/shared/globle.scss";
import Feed from "./features/posts/pages/feed";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <RouterProvider router={router} />
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
