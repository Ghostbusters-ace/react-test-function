import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../UI/Card";

const PostComments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);
  return (
    <div>
      <div>titre :</div>
      <article>o=body</article>
      {comments.map((comment) => {
        return (
          <Card key={comment.id}>
            <h4> {comment.email}</h4>
            <article>{comment.body}</article>
          </Card>
        );
      })}

      <Link to={"/"}>Retourner sur la page d'acceuil</Link>
    </div>
  );
};

export default PostComments;
