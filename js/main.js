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
  let fadeEffect = setInterval(function() {
    if (!element.style.opacity) {
      element.style.opacity = 1;
    }
    if (element.style.opacity < 0.1) {
      clearInterval(fadeEffect);
      element.remove();
    } else {
      element.style.opacity -= 0.1;
    }
  }, 50);
}

document
  .querySelector("input[type=text]")
  .addEventListener("keypress", function(event) {
    if (event.which === 13) {
      let todoText = this.value;
      this.value = "";
      let newTodo = document.createElement("li");
      let newSpan = document.createElement("span");
      newSpan.innerHTML = '<i class="fa fa-trash"></i>';
      newTodo.innerHTML = todoText;
      newTodo.insertAdjacentElement("afterbegin", newSpan);
      document.querySelector("ul").appendChild(newTodo);

      newTodo.addEventListener("click", function() {
        this.classList.toggle("completed");
      });

      newSpan.addEventListener("click", function(event) {
        fadeOut(this.parentNode);
        event.stopPropagation();
      });
    }
  });

document.querySelector(".fa-plus").addEventListener("click", function() {
  document.querySelector("input[type=text]").classList.toggle("display");
});
