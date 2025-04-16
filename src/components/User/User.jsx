import React, { Suspense, useState } from "react";
import { Link, Navigate } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  // console.log(user);
  const { name, email, phone, id } = user;
  const userStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };
  const [showInfo, setShoInfo] = useState(false);
  const [visiteHome, setVisitHome] = useState(false)
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());
  if(visiteHome){
    return <Navigate to={"/"}></Navigate>
  }
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>
        <small>{phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={() => setShoInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"}
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loading....</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}
      <button onClick={()=>setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default User;
