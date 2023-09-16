import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="modal">
        <div className="modal-box">
          <p>Invalid input</p>
          <button>Back</button>
        </div>
      </div>
      <div className="box input-form">
        <form>
          <div className="input">
            <label>Username</label>
            <input />
          </div>
          <div className="input">
            <label>Age(Years)</label>
            <input type="number" />
          </div>
          <button className="button">Add User</button>
        </form>
      </div>
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
