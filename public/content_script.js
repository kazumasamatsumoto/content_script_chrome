/* global chrome */

chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
  let textareaAddress = document.getElementById(":pv");
  textareaAddress.innerText = response.email;
  let textareaContent = document.getElementById(":qi");
  textareaContent.innerText = response.url;
});

// アドレスを変更する方法
// 挿入設定
// メールアドレスの宛先の加工innerHTML
// textareaの上に
// メール送信ができるか。
// responseをオブジェクトにして
// それぞれのキーで取得する
// URLをコピーするタイミングでメールに転記
