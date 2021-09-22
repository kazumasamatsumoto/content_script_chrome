/* global chrome */
import "./App.css";
import { useEffect } from "react";

function App() {
  // ユーザー操作とか任意のタイミングで以下の関数を叩く
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        key: "sample", // 任意のkey名とvalueで良い
      });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
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
