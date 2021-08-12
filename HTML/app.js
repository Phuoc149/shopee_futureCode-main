$(".carousel").carousel({
  interval: 2000,
});
$(".carousel").carousel("prev");

// chat
function chat() {
  const c = document.getElementById("chat-main");
  c.classList.toggle("display");
}
//
$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = "views/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});
