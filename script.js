document.addEventListener("goalLoad", function (obj) {
  let current = obj.detail.amount.current;
  let target = obj.detail.amount.target;
  let progress = (current / target) * 100;

  $("#blood").css("width", progress + "%");
});
