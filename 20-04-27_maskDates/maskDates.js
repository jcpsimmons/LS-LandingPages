const maskPdpStockMessage = () => {
  const addOrdinal = (n) => {
    // takes number, returns number with ordinal
    // takes 3, returns 3rd
    return `${n}${
      ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th"
    }`;
  };

  const createText = () => {
    var weekdays = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    );

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date("May 3 2020");

    if (date.getDay() == 5 || date.getDay() == 6) {
      date.setDate(date.getDate() + (7 - date.getDay()));
      //   return the text string
      return `<span id="face_mask_ships">&nbsp;Ships Monday <b>${
        monthNames[date.getMonth()]
      } ${addOrdinal(date.getDate())}</b>.</span>`;
    }

    date.setDate(date.getDate() + 2);
    return `<span id="face_mask_ships">&nbsp;Ships ${
      weekdays[date.getDay()]
    } <b>${monthNames[date.getMonth()]} ${addOrdinal(
      date.getDate()
    )}</b></span>`;
  };

  let el;

  if (document.querySelector(".qtyLeft.stock-info")) {
    //   3,2,1 left
    el = document.querySelector(".qtyLeft.stock-info");
  } else if (document.querySelector(".instock.stock-info")) {
    //   normal in-stock
    el = document.querySelector(".instock.stock-info");
  } else {
    //   break function if neither exists (probably out of stock)
    return;
  }

  el.insertAdjacentHTML("beforeend", createText());
};

maskPdpStockMessage();

// `ships monday may 4th`;
// <span id="face_mask_ships">&nbsp;Ships Monday <b>May 4th</b>.</span>
