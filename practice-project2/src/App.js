import React, { useState } from "react";

import Modal from "./UI/modal";
import UserInput from "./components/UserInput";
import UsersList from "./components/UsersList";

import "./index.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (user) => {
    console.log(user);

    setUsersList(user);
  };

  return (
    <div className="container">
      <Modal />
      <UserInput userInput={AddUserHandler} />
      <UsersList listOfUser={usersList} />
    </div>
  );
}

export default App;
