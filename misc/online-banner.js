var storeName = window.location.href
  .split("/")
  .pop()
  .replace(/-/g, " ");

closedStores = [
  "Huntington Beach",
  "Fremont",
  "Fremont dc",
  "Irvine",
  "La Mirada",
  "Millbrae",
  "San Jose",
  "Menifee",
  "Mid City Los Angeles",
  "San Leandro",
  "Monrovia",
  "Rancho Cucamonga",
  "Redondo Beach",
  "Rialto dc",
  "Van Nuys",
  "Summerlin",
  "Mission Valley",
  "Perris",
  "Vista",
  "Grand Prairie",
  "San Antonio"
].map(function(store) {
  return store.toLowerCase();
});

if (closedStores.includes(storeName)) {
  if (utag_data.site_type == "desktop") {
    document
      .querySelector(".page-title")
      .parentNode.insertAdjacentHTML(
        "afterend",
        '<div class="row" style="padding-bottom:3rem"> <div class="col-sm-12"> <a href="/"> <img src="/globalassets/images/lp/2020/03/onlineshopping_banner.jpg" alt="Online shopping information" class="img-responsive"> </a></div> </div>'
      );
  } else {
    document
      .querySelector(".map-wrapper")
      .insertAdjacentHTML(
        "afterend",
        '<div class="row" style="padding-bottom:3rem"> <div class="col-sm-12"> <a href="/"> <img src="/globalassets/images/lp/2020/03/onlineshopping_banner_mobile.jpg" alt="Online shopping information" class="img-responsive"> </a></div> </div>'
      );
  }
}

// replace store hours with closed sign
// const elem = [...document.querySelectorAll("span")].filter(el =>
//   el.textContent.includes("Store Hours")
// )[0];

// elem.parentNode.innerHTML =
//   '<span class="title">Store Hours</span><span style="background-color:#b9170f">Temporarily Closed</span>';
