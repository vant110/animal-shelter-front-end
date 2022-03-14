let img = document.getElementById("animal__image");
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal__image");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}

let modalCross = document.getElementById("modal__close");
modalCross.onclick = function() {
  modal.style.display = "none";
}