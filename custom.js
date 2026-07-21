// 替换 "On this page" 为 "页内目录"
(function () {
  function replaceOnThisPage() {
    var spans = document.querySelectorAll("span");
    for (var i = 0; i < spans.length; i++) {
      var el = spans[i];
      if (el.children.length === 0 && el.textContent.trim() === "On this page") {
        el.textContent = "目录";
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", replaceOnThisPage);
  } else {
    replaceOnThisPage();
  }

  // 用 MutationObserver 处理 SPA 页面切换
  var observer = new MutationObserver(function () {
    replaceOnThisPage();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
