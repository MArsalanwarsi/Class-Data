$(document).ready(function () {
  $("#plus").click(function () {
    var quantity = $("#quantity");
    if (quantity) {
      var currentValue = parseInt(quantity.val());
      quantity.val(currentValue + 1);
    }
  });

  $("#minus").click(function () {
    var quantity = $("#quantity");
    if (quantity) {
      var currentValue = parseInt(quantity.val());
      if (currentValue > 1) {
        quantity.val(currentValue - 1);
      }
    }
  });
});
