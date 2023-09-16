import Modal from "./UI/modal";
import UserInput from "./components/UserInput";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Modal />
      <UserInput />
      <ul>
        <li className="box">
          <p>Fredrik (32 years old)</p>
        </li>
        <li className="box">
          <p>Max (31 years old)</p>
        </li>
        <li className="box">
          <p>John (56 years old)</p>
        </li>
        <li className="box">
          <p>Jane (54 years old)</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
