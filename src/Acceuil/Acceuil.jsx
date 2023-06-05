import React, { useState, useEffect } from "react";

import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Acceuil = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return users.slice(0, 6).map((user) => {
    return (
      <>
        <Link to={"/posts/" + user.id}>
          <Button key={user.id}>{user?.name}</Button>
        </Link>
      </>
    );
  });
};

export default Acceuil;
