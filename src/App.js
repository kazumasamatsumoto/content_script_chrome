/* global chrome */
import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState("");
  const [email, setEmail] = useState("");
  const [urlLink, setUrlLink] = useState("");
  const sample = { email: users, url: urlLink };

  const handleSubmit = (event) => {
    event.preventDefault();
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, sample);
    });
  };

  const addUsers = (address) => {
    if (users === "") {
      setUsers(address);
    } else {
      setUsers(users + ", " + address);
    }
    setEmail("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <label>
          Email:
          <input
            type="text"
            name="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={() => addUsers(email)}>addUser</button>
        </label>
        <br />
        <br />
        <label>
          URL:
          <input
            type="text"
            name="name"
            value={urlLink}
            onChange={(e) => setUrlLink(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button onClick={(e) => handleSubmit(e)}>send</button>
        <p>{users.length}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
