import React, { useState } from "react";

import Modal from "./UI/modal";
import UserInput from "./components/UserInput";
import UsersList from "./components/UsersList";

import "./index.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (user) => {
    setUsersList([...usersList, user]);
  };

  const RemoveUserHandler = (index) => {
    usersList.splice(index, 1);
    setUsersList([...usersList]);
  };
  return (
    <div className="container">
      <Modal />
      <UserInput userInput={AddUserHandler} />
      <UsersList listOfUser={usersList} removeUser={RemoveUserHandler} />
    </div>
  );
}

export default App;
