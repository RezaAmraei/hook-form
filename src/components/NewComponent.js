import React, { useState } from "react";
import User from "./User";
const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [user, setUser] = useState({});

  const handleFirstName = (value) => {
    setFirstName(value);
    if (value.length < 2) {
      setFirstNameError("First Name must be longer than 2 characters");
    } else if (value.length > 2) {
      setFirstNameError("");
    }
  };
  const handleLastName = (e) => {};
  const handleEmail = (value) => {
    setEmail(value);
    if (value.length < 5) {
      setEmailError("Email must be longer than 5  characters");
    } else if (value.length > 5) {
      setEmailError("");
    }
  };
  const handlePassword = (value) => {
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be longer than 8 characters");
    } else if (value.length > 8) {
      setPasswordError("");
    }
  };
  const handleConfirmPassword = (value) => {
    setConfirm(value);
    if (value !== password) {
      setConfirmError("PAsswords must match!");
    } else if (value == password) {
      setConfirmError("");
    }
  };

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
          {JSON.stringify(firstName)}
          <input
            //onChange={handleFirstName}
            onChange={(e) => handleFirstName(e.target.value)}
            value={firstName}
          />
          {firstNameError ? <p>{firstNameError}</p> : ""}
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
          <input
            //onChange={handleEmail}
            onChange={(e) => handleEmail(e.target.value)}
            value={email}
          />
          {emailError ? <p>{emailError}</p> : ""}
        </div>
        <div>
          <label>Password : </label>
          <input
            //onChange={handlePassword}
            onChange={(e) => handlePassword(e.target.value)}
            value={password}
          />
          {passwordError ? <p>{passwordError}</p> : ""}
        </div>
        <div>
          <label>Confirm Password : </label>
          <input
            // onChange={handleConfirmPassword}
            onChange={(e) => handleConfirmPassword(e.target.value)}
            value={confirm}
          />
          {confirmError ? <p>{confirmError}</p> : ""}
        </div>
        <input type="submit" />
      </form>

      {user.firstName && <User user={user} />}
    </div>
  );
};

export default Form;
