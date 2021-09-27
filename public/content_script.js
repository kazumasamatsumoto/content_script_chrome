/* global chrome */

chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
  // アドレスを変更する方法
  let test = document.getElementById(":pi");
  test.children[0].children[1].innerText = response;

  // メール本文を変更する方法
  // let test = document.getElementById(":qi");
  // console.log("test", test);
  // test.innerText = response;

  // test.textContent = response;
  // const app = document.createElement("div");
  // app.id = "my-extension-root";
  // app.textContent = response;
  // document.body.appendChild(app);
  // document.body.appendChild(app);
});
