var maskPdpStockMessage = function maskPdpStockMessage() {
  var addOrdinal = function addOrdinal(n) {
    // takes number, returns number with ordinal
    // takes 3, returns 3rd
    return "".concat(n).concat(["st", "nd", "rd"][((n + 90) % 100 - 10) % 10 - 1] || "th");
  };

  var createText = function createText() {
    var weekdays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();

    if (date.getDay() == 5 || date.getDay() == 6) {
      date.setDate(date.getDate() + (8 - date.getDay())); //   return the text string

      return "<span id=\"face_mask_ships\">&nbsp;Ships Monday <b>".concat(monthNames[date.getMonth()], " ").concat(addOrdinal(date.getDate()), "</b>.</span>");
    }

    date.setDate(date.getDate() + 1);
    return "<span id=\"face_mask_ships\">&nbsp;Ships Tomorrow <b>".concat(monthNames[date.getMonth()], " ").concat(addOrdinal(date.getDate()), "</b>.</span>");
  };

  var el;
  var insertText = createText();

  if (document.querySelector(".qtyLeft.stock-info")) {
    //   3,2,1 left
    insertText = ".".concat(insertText);
    el = document.querySelector(".qtyLeft.stock-info");
  } else if (document.querySelector(".instock.stock-info")) {
    //   normal in-stock
    el = document.querySelector(".instock.stock-info");
  } else {
    //   break function if neither exists (probably out of stock)
    return;
  }

  el.insertAdjacentHTML("beforeend", insertText);
}; // launch on doc ready


if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
  maskPdpStockMessage();
} else {
  document.addEventListener("DOMContentLoaded", maskPdpStockMessage);
}