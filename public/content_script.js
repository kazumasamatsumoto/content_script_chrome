/* global chrome */

chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
  const test = document.getElementById("wO nr l1");
  console.log("test", test);
  const app = document.createElement("div");
  app.id = "my-extension-root";
  app.textContent = response;
  test.insertBefore(app);
  // document.body.appendChild(app);
});
