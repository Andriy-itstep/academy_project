document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach(function (element) {
    element.ondragstart = function () {
      return false;
    };
  });
});