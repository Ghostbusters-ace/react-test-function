import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Acceuil from "../Acceuil/Acceuil";
import UserPosts from "../Posts/UserPosts";
import PostComments from "../Comments/PostComments";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
  },
  {
    path: "/posts/:id",
    element: <UserPosts />,
  },
  {
    path: "/comments/:id",
    element: <PostComments />,
  },
]);

export default Routes;
