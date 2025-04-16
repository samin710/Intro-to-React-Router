import React, { userId } from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetail = () => {
  const user = useLoaderData();
  //   console.log(user);
  const { userId } = useParams();
  console.log(userId);
  const { name, website } = user;
  return (
    <div>
      <h3>User Details here</h3>
      <h4>Name: {name}</h4>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetail;
