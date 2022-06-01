// $(document).ready(function () {
//   $(".pageLoader").delay(1300).fadeIn(500);
// });

function loader() {
  document.ready = document.getElementById("pageLoader").style.display = "none";
}
setTimeout(loader, 800);

var modal = document.getElementById("modalEscape");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    openModal();
  }
});
