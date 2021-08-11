$(".carousel").carousel({
  interval: 2000,
});
$(".carousel").carousel("prev");

// chat
function chat() {
  const c = document.getElementById("chat-main");
  c.classList.toggle("display");
}
