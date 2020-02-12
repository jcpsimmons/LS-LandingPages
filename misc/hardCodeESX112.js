$(document).ready(function() {
  var pn = window.location.pathname;
  var lastDash = pn.lastIndexOf("-");
  var pID = pn.substring(lastDash + 1);
  var pTitle = pn
    .substring(0, lastDash)
    .replace("/pdp-", "")
    .replace(/-/g, " ");
  var brAPI =
    "https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=8438674518839&url=test&request_type=mlt&rows=12&start=0&pid=" +
    pID +
    "&title=" +
    pTitle +
    "&fl=pid,title,thumb_image,url,sale_price";

  window.$.get(brAPI, function(data) {
    var recommendedItems = data.response.docs;
    if (recommendedItems.length > 4) {
      if (utag_data.site_type == "mobile") {
        constructSliderMobile(recommendedItems);
      } else {
        constructSlider(recommendedItems);
      }
    }
  });

  function constructSliderMobile(productList) {
    var productHtml = "",
      recommendedProductWrapper;
    for (var i = 0; i < productList.length; i++) {
      var optimzeImg = productList[i].thumb_image.replace(
        "w=446&h=296&mode=pad",
        "width=230&height=155"
      );
      productHtml +=
        '<div class="col-xs-3"><a href="' +
        productList[i].url +
        '"><img src="' +
        optimzeImg +
        '" alt="' +
        productList[i].title +
        '" class="img-responsive "></a> </div>';
    }
    recommendedProductWrapper =
      '<section id="recommendedItems_box"> <section class="container no-padding board"><div id="recommendedItems"> <div id="recommendedItems_slider" class="mobile-carousel-component">' +
      productHtml +
      " </div> </div> </section> </section>";

    $(".pna-title").after(recommendedProductWrapper);
    runSlickSliderMobile();
  }

  function runSlickSliderMobile() {
    window.$("#recommendedItems_slider").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: false,
      arrows: false,
      autoplay: false
    });
  }

  function constructSlider(productList) {
    var productHtml = "",
      recommendedProductWrapper;
    for (var i = 0; i < productList.length; i++) {
      var optimzeImg = productList[i].thumb_image.replace(
        "w=446&h=296&mode=pad",
        "width=230&height=155"
      );
      productHtml +=
        '<div class="col-xs-3"><a href="' +
        productList[i].url +
        '" class="product-linked-image"><img src="' +
        optimzeImg +
        '" alt="' +
        productList[i].title +
        '" class="img-responsive "></a> </div>';
    }
    recommendedProductWrapper =
      '<section id="recommendedItems_box"> <section class="container no-padding board"><div id="recommendedItems"> <div id="recommendedItems_slider" class="row carousel-component">' +
      productHtml +
      " </div> </div> </section> </section>";

    $(".pna-title").after(recommendedProductWrapper);
    runSlickSlider();
  }

  function runSlickSlider() {
    window.$("#recommendedItems_slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows: true,
      autoplay: false
    });
  }
});
