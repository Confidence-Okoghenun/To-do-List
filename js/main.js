let lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    this.classList.toggle("completed");
  });
}

let spans = document.querySelectorAll("span");
for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", function(event) {
    fadeOut(this.parentNode);
    event.stopPropagation();
  });
}
function fadeOut(element) {
  var fadeEffect = setInterval(function() {
    if (!element.style.opacity) {
      element.style.opacity = 1;
    }
    if (element.style.opacity < 0.1) {
      clearInterval(fadeEffect);
      element.remove();
    } else {
      element.style.opacity -= 0.1;
    }
  }, 100);
}
