import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserPosts = () => {
  const { id } = useParams();
  const { name } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  });
  return (
    <div>
      <h4>Article par {name}</h4>

      {posts.map((post) => {
        return (
          <Card key={post.id}>
            <h2> {post.title}</h2>
            <p>{post.body}</p>
            <Button>
              <Link to={"/comments/" + post.id}> Voir l'article</Link>
            </Button>
          </Card>
        );
      })}
    </div>
  );
};

export default UserPosts;
