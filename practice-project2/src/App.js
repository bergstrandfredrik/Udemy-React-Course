import Modal from "./UI/modal";
import UserInput from "./components/UserInput";
import UsersList from "./components/UsersList";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Modal />
      <UserInput />
      <UsersList />
    </div>
  );
}

export default App;
