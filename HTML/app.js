// $(".carousel").carousel({
//   interval: 2000,
// });
// $(".carousel").carousel("prev");

// chat
function chat() {
  const c = document.getElementById("chat-main");
  c.classList.toggle("display");
}
//
// $(function () {
//   var includes = $("[data-include]");
//   $.each(includes, function () {
//     var file = "views/" + $(this).data("include") + ".html";
//     $(this).load(file);
//   });
// });
//cart
let btnAdd = document.getElementById("btn+");
let money = document.getElementById("p-money");
let btnMinus = document.getElementById("btn-");
let total = document.getElementById("total");
let totalMoney = document.getElementById("total-money");
let count = 1;
btnAdd.onclick = function (e) {
  count++;
  let value = document.getElementById("inpput");
  value.value = count;
  money.textContent = count * 200 + ".000";
  total.textContent = "Tổng thanh toán ( " + count + " sản phẩm):";
  totalMoney.textContent = money.textContent;
};

btnMinus.onclick = function (e) {
  count--;
  let value = document.getElementById("inpput");
  value.value = count;
  money.textContent = count * 200 + ".000";
  total.textContent = "Tổng thanh toán (" + count + "sản phẩm):";
  totalMoney.textContent = money.textContent;
};
