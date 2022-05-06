import React, { useState } from "react";
import User from "./User";
const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [user, setUser] = useState({});

  const createUser = (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };
    setUser(newUser);
    console.log("Welcome", newUser);
  };
  console.log(firstName);
  return (
    <div>
      <form onSubmit={createUser}>
        <div>
          <label>First Name : </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <label>Last Name :</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div>
          <label>Email : </label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <label>Password : </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <label>Confirm Password : </label>
          <input onChange={(e) => setConfirm(e.target.value)} value={confirm} />
        </div>
        <input type="submit" />
      </form>

      {user.firstName && <User user={user} />}
    </div>
  );
};

export default Form;
