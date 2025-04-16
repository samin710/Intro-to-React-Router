import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  // console.log(post);
  const { id, title } = post;
  const navigate = useNavigate();

  const handleNavigate = () => {
    // navigate("/");
    navigate(`/posts/${id}`);
  };

  return (
    <div
      style={{
        border: "2px solid red",
        padding: "10px",
        borderRadius: "20px",
        margin: "10px",
      }}
    >
      <h2>{title}</h2>
      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleNavigate}>Details of {id}</button>
    </div>
  );
};

export default Post;
