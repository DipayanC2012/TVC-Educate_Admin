import "./App.css";
import Nav from "./Component/Nav/Nav";
import PostContextProvider from "./Component/PostContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Validate from "./Component/Validate/Validate";
import Post from "./Component/Post/Post";
import ComingSoon from "./Component/ComingSoon/ComingSoon";

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
  },
  {
    path: "/validate",
    element: <Validate />,
  },
  {
     path: '/posts/:titleURL/:postId',
     element: <Post  />,
  },
  {
    path: '/soon',
    element: <ComingSoon/>
  }
]);
  return (
    <PostContextProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </PostContextProvider>

  );
}

export default App;
