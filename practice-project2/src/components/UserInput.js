import React, { useState } from "react";

import styles from "./UserInput.module.css";

const UserInput = (props) => {
  let user = { userName: "", userAge: "" };
  const [userInput, setUserInput] = useState(user);

  const UserInputHandler = (value, input) => {
    setUserInput({ ...userInput, [input]: value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    props.userInput(userInput);
    setUserInput(user);
  };

  return (
    <div className={styles.box}>
      <form onSubmit={SubmitHandler}>
        <div className={styles.input}>
          <label>Username</label>
          <input
            onChange={(e) => {
              UserInputHandler(e.target.value, "userName");
            }}
            value={userInput.userName}
          />
        </div>
        <div className={styles.input}>
          <label>Age(Years)</label>
          <input
            type="number"
            onChange={(e) => {
              UserInputHandler(e.target.value, "userAge");
            }}
            value={userInput.userAge}
          />
        </div>
        <button className={styles.button}>Add User</button>
      </form>
    </div>
  );
};

export default UserInput;
