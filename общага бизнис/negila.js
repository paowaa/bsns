addEventListener("contextmenu", (event) => {
  event.preventDefault();

  alert("ПЛАТИТЬ ДЕНЬГИ = ПОЛУЧАТЬ КАРТИНКА");
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});
