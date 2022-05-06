import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default User;
