/* global chrome */

chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
  let test = document.getElementsByTagName("h1")[0];
  console.log("test", test);
  console.log(test.textContent);
  test.textContent = response;
  const app = document.createElement("div");
  app.id = "my-extension-root";
  app.textContent = response;
  document.body.appendChild(app);
  // document.body.appendChild(app);
});
