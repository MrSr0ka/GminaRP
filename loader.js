// $(document).ready(function () {
//   $(".pageLoader").delay(1300).fadeIn(500);
// });

function loader() {
  document.ready = document.getElementById("pageLoader").style.display = "none";
}
setTimeout(loader, 800);

var modal = document.getElementById("modalEscape");

var btn = document.addEventListener("keypress", (e) => {
  if (e) {
    modal.style.display = "flex";
  }
});
