/* global chrome */

chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
  const app = document.createElement("div");
  app.id = "my-extension-root";
  app.textContent = response;
  document.body.appendChild(app);
});

chrome.runtime.sendMessage("Hello world");
