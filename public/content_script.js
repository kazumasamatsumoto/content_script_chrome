/* global chrome */

chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
  // アドレスを変更する方法
  // 挿入設定
  let test = document.getElementById(":pi").children[0];
  console.log(test);
  var reference = test.children[0];

  // 挿入データ
  var newEle = document.createElement("div");
  var spanEle = document.createElement("span");
  var newEle2 = document.createElement("div");
  var newEle3 = document.createElement("div");
  var inputEle = document.createElement("input");

  // クラス追加
  newEle.classList.add("vR");
  spanEle.classList.add("vN");
  spanEle.classList.add("bfK");
  spanEle.classList.add("a3q");
  spanEle.setAttribute("email", "kazumasa.matsumoto62@gmail.com");
  spanEle.setAttribute("data-hovercard-id", "kazumasa.matsumoto62@gmail.com");
  spanEle.setAttribute("data-hovercard-owner-id", "114");
  spanEle.setAttribute("email", "kazumasa.matsumoto62@gmail.com");

  // spanの中
  newEle2.setAttribute("translate", "no");
  newEle2.classList.add("vT");
  newEle2.innerText = "kazumasa.matsumoto62@gmail.com";
  spanEle.appendChild(newEle2);

  // spanの中その２
  newEle3.classList.add("vM");
  spanEle.appendChild(newEle3);

  newEle.appendChild(spanEle);

  // inputElementの追加
  inputEle.setAttribute("name", "to");
  inputEle.setAttribute("type", "hidden");
  inputEle.setAttribute("value", "kazumasa.matsumoto62@gmail.com");
  newEle.appendChild(inputEle);

  // 挿入します
  test.insertBefore(newEle, reference.nextSibling);

  // test.children[0].children[1].innerHtml = "<div>sample</div>";
  // メールアドレスの宛先の加工innerHTML
  // textareaの上に
  // メール送信ができるか。
  // responseをオブジェクトにして
  // それぞれのキーで取得する
  // URLをコピーするタイミングでメールに転記

  // メール本文を変更する方法
  // let test = document.getElementById(":qi");
  // console.log("test", test);
  // test.innerText = response.url;

  // test.textContent = response;
  // const app = document.createElement("div");
  // app.id = "my-extension-root";
  // app.textContent = response;
  // document.body.appendChild(app);
  // document.body.appendChild(app);
});
