/* global chrome */

chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
  let test = document.getElementById(":qi");
  console.log("test", test);
  test.innerText = response;
  // test.textContent = response;
  // const app = document.createElement("div");
  // app.id = "my-extension-root";
  // app.textContent = response;
  // document.body.appendChild(app);
  // document.body.appendChild(app);
});
