const accordion = document.getElementsByClassName("faq__question-container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// TABS
var x = document.getElementById("buy");
var y = document.getElementById("sell");
var z = document.getElementById("trade");
var xLabel = document.getElementById("buy_id");
var yLabel = document.getElementById("sell_id");
var zLabel = document.getElementById("trade_id");

const hide = (element) => {
  element.classList.add("hidden");
};
const inactive = (element) => {
  element.classList.remove("tab-active");
};
const active = (element) => {
  element.classList.add("tab-active");
};

function showBuy() {
  x.classList.toggle("hidden");
  active(xLabel);
  hide(y);
  inactive(yLabel);
  hide(z);
  inactive(zLabel);
}
function showTrade() {
  z.classList.toggle("hidden");
  active(zLabel);
  hide(x);
  inactive(xLabel);
  hide(y);
  inactive(yLabel);
}

function showSell() {
  y.classList.toggle("hidden");
  active(yLabel);
  hide(x);
  inactive(xLabel);
  hide(z);
  inactive(zLabel);
}
