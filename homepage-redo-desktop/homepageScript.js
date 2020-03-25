window.addEventListener(
  "load",
  function() {
    if (window.jQuery) {
      var bodyTarget = $("#hp_body");

      var mustReadTips_layer = {
        layer_01: {
          layer_link:
            "/inspiration/ideas-advice/guides/furniture-lifespan-guide-when-to-replace-your-furniture",
          img_src: "/globalassets/images/home/2018/10/blog-post-1.jpg",
          img_alt: "Article Page Replace Furniture",
          layer_title: "When to Replace Your Furniture"
        },
        layer_02: {
          layer_link:
            "/inspiration/ideas-advice/guides/essential-shopping-checklist",
          img_src: "/globalassets/images/home/2018/10/blog-post-2.jpg",
          img_alt: "Article Page Essential Shopping",
          layer_title: "Essential Shopping Checklist"
        },
        layer_03: {
          layer_link:
            "/inspiration/ideas-advice/guides/your-guide-to-sectional-sofas",
          img_src: "/globalassets/images/home/2018/10/blog-post-3.jpg",
          img_alt: "Article Sectional Sofas",
          layer_title: "Your Guide to Sectional Sofas"
        },
        layer_04: {
          layer_link:
            "/inspiration/ideas-advice/styles/2020-most-popular-decor-trends-by-state",
          img_src: "/globalassets/images/home/2019/12/winter-blog.jpg",
          img_alt: "2020 Decor Trends",
          layer_title: "2020 Decor Trends"
        }
      };

      var category_link_layer = {
        section_01: {
          link_href: "/search?term=Sectional+Sofa",
          link_text: "Sectional Sofas"
        },
        section_02: {
          link_href: "/search?term=Coffee+Table",
          link_text: "Coffee Tables"
        },
        section_03: {
          link_href: "/search?term=Dining+Set",
          link_text: "Dining Sets"
        },
        section_04: {
          link_href: "/search?term=Sofa",
          link_text: "Sofas"
        },
        section_05: {
          link_href: "/search?term=Dining+Chairs",
          link_text: "Dining Chairs"
        },
        section_06: {
          link_href: "/search?term=Queen+Beds",
          link_text: "Queen Beds"
        },
        section_07: {
          link_href: "/search?term=Sofa+Sleepers",
          link_text: "Sofa Sleepers"
        },
        section_08: {
          link_href: "/search?term=Dresser",
          link_text: "Dressers"
        },
        section_09: {
          link_href: "/search?term=Accent+Chairs",
          link_text: "Accent Chairs"
        },
        section_10: {
          link_href: "/search?term=Bookcases",
          link_text: "Bookcases"
        }
      };

      var bestsellers_layer = {
        product_01: {
          product_url: "/pdp-brisbane-oval-coffee-table-66433",
          img_alt: "brisbane oval coffee table",
          img_src: "/globalassets/images/home/2019/03/270x180-66433.jpg",
          product_review:
            "Love the look of this table! It is different and contemporary and would fit in with most decor.",
          userName: "DLPH"
        },
        product_02: {
          product_url: "/pdp-kerri-2-piece-sectional-wlaf-chaise-107150",
          img_alt: "kerri 2 piece sectional",
          img_src: "/globalassets/images/home/2019/03/270x180-107150.jpg",
          product_review:
            "This is the 3rd Sectional I purchased online without looking in the store, and they have all been wonderful.",
          userName: "AmandanSheri"
        },
        product_03: {
          product_url: "/pdp-alton-cherry-queen-platform-bed-85686",
          img_alt: "alton cherry queen",
          img_src: "/globalassets/images/home/2019/03/270x180-85686.jpg",
          product_review:
            "Great bed! Clean style. Absolutely love it, and have seen same bed in other locations for double price!",
          userName: "Nat81"
        },
        product_04: {
          product_url: "/pdp-suzy-dark-grey-wallaway-recliner-107883",
          img_alt: "dark grey wallaway recliner",
          img_src: "/globalassets/images/home/2019/03/270x180-107883.jpg",
          product_review:
            "It's not bulky at all. Super comfy and stylish. Highly recommend!",
          userName: "katesupply"
        },
        product_05: {
          product_url: "/pdp-cliff-queen-sleeper-225834",
          img_alt: "cliff queen sleeper",
          img_src: "/globalassets/images/home/2019/03/270x180-225834.jpg",
          product_review:
            "The couch fits perfectly in our small space. The bed is memory foam, which is comfortable.",
          userName: "alana"
        }
      };

      var store_review_layer = {
        review_01: {
          img_alt: "Loana",
          img_src: "/globalassets/images/home/2018/10/Ioana_headsmall.jpg",
          text:
            "My experience with Living Spaces is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Literally everything is great. Thank you!",
          name: "Loana"
        },
        review_02: {
          img_alt: "Isabel",
          img_src: "/globalassets/images/home/2018/10/customer_3.jpg",
          text:
            "Living Spaces takes pride in the quality and variety of their products. They have knowledgeable and accessible staff to answer questions when a customer visits the store. Their prices are very competitive. It's an awesome store.",
          name: "Isabel"
        },
        review_03: {
          img_alt: "Angelita",
          img_src: "/globalassets/images/home/2018/10/angelita_varieur.jpg",
          text:
            "The sales people are very helpful. I love the different designers and such a great selection to choose them. Living Spaces is the only store I buy my furniture from.",
          name: "Angelita Varieur"
        }
      };

      //Create Revive Layer
      function createReviveLayer() {
        var reviveLayerHtml =
          '<section class="revive_banner ls_mb"> <div class="row"> <div class="col-sm-12 col-xs-12 no-padding revive_banner_link"> <a href="/departments/mattresses"> <img src="/globalassets/images/home/2020/03/revive-desktop.jpg" alt="Revive Banner" class="img-responsive"> </a> </div> </div> </section>';
        bodyTarget.append(reviveLayerHtml);
      }

      //Create Small Spaces Layer
      function createSmallSpacesLayer() {
        var smallSpacesHtml =
          '<section class="ls_smallSpaces ls_mb"> <div class="ls_hp_container container ls_smallSpace"> <div class="row ls_smallSpace_wrapper"> <div class="col-lg-3 col-md-12 ls_smallSpace_box"> <div class="ls_smallSpace_text_box"> <h3 class="ls_hp_title ">Small is<Br class="visible-lg hidden-xs"> the New Cool</h3> <p>Enjoy maximum function in minimal square feet with clever designs + creative solutions.</p> <a href="/inspiration/lifestyle/small-space-living">Shop Small Space Furniture <span class="round_angle_arrow_black"><i class="fa fa-angle-right" aria-hidden="true"></i></span></a> </div> </div> <span class="mob_slider"> <div class="col-xs-4 col-lg-3 ls_smallSpace_box"> <a href="/departments/furniture/bedroom/beds/storage-beds"> <div class="ls_smallSpaces_img_box"> <div class="ls_smallSpace_cta"> <span class="ls_hp_cta">Shop Storage Beds</span> </div> <img class="img-responsive lazy" alt="Storage Beds" src="/globalassets/images/lp/2019/03/0318_smallspace_hp_layer_1.jpg?quality=20" data-src="/globalassets/images/lp/2019/03/0318_smallspace_hp_layer_1.jpg"> </div> <div class="ls_smallSpace_svg_wrapper"> </div> </a> </div> <div class="col-xs-4 col-lg-3 ls_smallSpace_box"> <a href="/departments/featured/related-searches/lift-top-coffee-table"> <div class="ls_smallSpaces_img_box"> <div class="ls_smallSpace_cta"> <span class="ls_hp_cta">Shop Lift-Top Coffee Tables</span> </div> <img class="img-responsive lazy" alt="Lift-Top Coffee Tables" src="/globalassets/images/lp/2019/03/0318_smallspace_hp_layer_2.jpg?quality=20" data-src="/globalassets/images/lp/2019/03/0318_smallspace_hp_layer_2.jpg"> </div> <div class="ls_smallSpace_svg_wrapper"> </div> </a> </div> <div class="col-xs-4 col-lg-3 ls_smallSpace_box"> <a href="/departments/furniture/living-room/sofas-and-sectionals/futons"> <div class="ls_smallSpaces_img_box"> <div class="ls_smallSpace_cta"> <span class="ls_hp_cta">Shop Convertible Sofas</span> </div> <img class="img-responsive lazy" alt="Convertible Sofas" src="/globalassets/images/lp/2019/03/0318_smallspace_hp_layer_3.jpg?quality=20" data-src="/globalassets/images/lp/2019/03/0318_smallspace_hp_layer_3.jpg"> </div> <div class="ls_smallSpace_svg_wrapper"> </div> </a> </div> </span> </div> </div> </section>';
        bodyTarget.append(smallSpacesHtml);
      }

      //Create Must Read Tips
      function createMustReadTips() {
        var mustReadTipsHtml =
          '<section class="ls_hp_container container ls_tips"> <div class="row"> <div class="col-xs-12 ls_tips_title"> <h2 class="ls_hp_title">Must-Read Tips</h2> </div> <div class="col-md-3 col-xs-6 upper-box tablet-padding"> <a href="' +
          mustReadTips_layer.layer_01.layer_link +
          '"> <div class=" ls_tips_box"> <img class="img-responsive center-block" src="' +
          mustReadTips_layer.layer_01.img_src +
          '" alt="' +
          mustReadTips_layer.layer_01.img_alt +
          '"> <div class="ls_tips_cta"> <p>' +
          mustReadTips_layer.layer_01.layer_title +
          ' <span class="round_angle_arrow_white"><i class="fa fa-angle-right" aria-hidden="true"></i></span></p> </div> </div> </a> </div> <div class="col-md-3 col-xs-6 upper-box tablet-padding"> <a href="' +
          mustReadTips_layer.layer_02.layer_link +
          '"> <div class=" ls_tips_box"> <img class="img-responsive center-block" src="' +
          mustReadTips_layer.layer_02.img_src +
          '" alt="' +
          mustReadTips_layer.layer_02.img_alt +
          '"> <div class="ls_tips_cta"> <p>' +
          mustReadTips_layer.layer_02.layer_title +
          ' <span class="round_angle_arrow_white"><i class="fa fa-angle-right" aria-hidden="true"></i></span></p> </div> </div> </a> </div> <div class="col-md-3 col-xs-6 tablet-padding"> <a href="' +
          mustReadTips_layer.layer_03.layer_link +
          '"> <div class=" ls_tips_box"> <img class="img-responsive center-block" src="' +
          mustReadTips_layer.layer_03.img_src +
          '" alt="' +
          mustReadTips_layer.layer_03.img_alt +
          '"> <div class="ls_tips_cta"> <p> ' +
          mustReadTips_layer.layer_03.layer_title +
          '<span class="round_angle_arrow_white"><i class="fa fa-angle-right" aria-hidden="true"></i></span></p> </div> </div> </a> </div> <div class="col-md-3 col-xs-6 tablet-padding"> <a href="' +
          mustReadTips_layer.layer_04.layer_link +
          '"> <div class=" ls_tips_box"> <img class="img-responsive center-block lazy" src="' +
          mustReadTips_layer.layer_04.img_src +
          '" alt="' +
          mustReadTips_layer.layer_04.img_alt +
          '"> <div class="ls_tips_cta"> <p>' +
          mustReadTips_layer.layer_04.layer_title +
          '<span class="round_angle_arrow_white"><i class="fa fa-angle-right" aria-hidden="true"></i></span></p> </div> </div> </a> </div> </div> </section>';
        bodyTarget.append(mustReadTipsHtml);
      }

      //Create Category Link Layer
      function createCategoryLink() {
        var categoryLinkHtml =
          '<section class="most_search_key"><div class="container block-related"> <ul> <li> <a href="' +
          category_link_layer.section_01.link_href +
          '" title="' +
          category_link_layer.section_01.link_text +
          '">' +
          category_link_layer.section_01.link_text +
          '</a> </li> <li> <a href="' +
          category_link_layer.section_02.link_href +
          '" title="' +
          category_link_layer.section_02.link_text +
          '">' +
          category_link_layer.section_02.link_text +
          '</a> </li> <li> <a href="' +
          category_link_layer.section_03.link_href +
          '" title="' +
          category_link_layer.section_03.link_text +
          '">' +
          category_link_layer.section_03.link_text +
          '</a> </li> <li> <a href="' +
          category_link_layer.section_04.link_href +
          '" title="' +
          category_link_layer.section_04.link_text +
          '">' +
          category_link_layer.section_04.link_text +
          '</a> </li> <li> <a href="' +
          category_link_layer.section_05.link_href +
          '" title="' +
          category_link_layer.section_05.link_text +
          '">' +
          category_link_layer.section_05.link_text +
          '</a> </li> <li> <a href="' +
          category_link_layer.section_06.link_href +
          '" title="' +
          category_link_layer.section_06.link_text +
          '">' +
          category_link_layer.section_06.link_text +
          '</a> </li> <li> <a href="' +
          category_link_layer.section_07.link_href +
          '" title="' +
          category_link_layer.section_07.link_text +
          '">' +
          category_link_layer.section_07.link_text +
          '</a> </li> <li> <a href="' +
          category_link_layer.section_08.link_href +
          '" title="' +
          category_link_layer.section_08.link_text +
          '">' +
          category_link_layer.section_08.link_text +
          '</a> </li> <li> <a href="' +
          category_link_layer.section_09.link_href +
          '" title="' +
          category_link_layer.section_09.link_text +
          '">' +
          category_link_layer.section_09.link_text +
          '</a> </li> <li> <a href="' +
          category_link_layer.section_10.link_href +
          '" title="' +
          category_link_layer.section_10.link_text +
          '">' +
          category_link_layer.section_10.link_text +
          "</a> </li> </ul> </div></section>";
        bodyTarget.append(categoryLinkHtml);
      }

      //Olapic Slider
      function injectOlapic() {
        var olapicBody =
          '<section id="olapic_wrapper" class="container board grid-small"> <div class="row"> <div class="col-xs-12"> <h3 class="subtitle"> Show off your style with @livingspaces </h3> </div> </div> <div class="row"><div id="olapic_specific_widget"></div></div> </section>';
        bodyTarget.append(olapicBody);
      }

      function initOlapic() {
        var fileRef = document.createElement("script");
        fileRef.setAttribute("type", "text/javascript");
        fileRef.setAttribute("async", "");
        fileRef.setAttribute("data-olapic", "olapic_specific_widget");
        fileRef.setAttribute(
          "data-instance",
          "08d4ebb65a759dfda7676b43f3a56ef2"
        );
        fileRef.setAttribute(
          "data-apikey",
          "14cc0b534adba3a1963a1970413f08ac64593c3f11384d04732750c587dc9de3"
        );
        fileRef.setAttribute(
          "data-viewer",
          "//www.photorank.me/assets/livingspaces/viewer2v2.html"
        );
        fileRef.setAttribute(
          "src",
          "https://photorankstatics-a.akamaihd.net/81b03e40475846d5883661ff57b34ece/static/frontend/latest/build.min.js"
        );
        document.head.appendChild(fileRef);
      }

      //Create Best Seller layer
      function createBestSellers() {
        var bestSellerHtml =
          '<section class="ls_hp_container container ls_bestSellers"> <div class="row ls_bestSellers_wrapper"> <div class="col-xs-12 ls_bestSellers_title"> <h2 class="ls_hp_title">Shop <i class="fa fa-heart" aria-hidden="true"></i> Bestsellers</h2> </div> <div class="col-ls-5 col-sm-4 col-xs-6"> <div class="ls_bestSellers_box"> <a href="' +
          bestsellers_layer.product_01.product_url +
          '"> <img alt="' +
          bestsellers_layer.product_01.img_alt +
          '" class="img-responsive ls_tile_img" src="' +
          bestsellers_layer.product_01.img_src +
          '"> <div class="ls_bestSellers_bubble"> <div title="5 out of 5" class="ratings"><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span></div> <p>' +
          bestsellers_layer.product_01.product_review +
          "</p> <strong>" +
          bestsellers_layer.product_01.userName +
          '</strong> </div> </a> </div> </div> <div class="col-ls-5 col-sm-4 col-xs-6"> <div class="ls_bestSellers_box"> <a href="' +
          bestsellers_layer.product_02.product_url +
          '"> <img alt="' +
          bestsellers_layer.product_02.img_alt +
          '" class="img-responsive ls_tile_img" src="' +
          bestsellers_layer.product_02.img_src +
          '"> <div class="ls_bestSellers_bubble"> <div title="5 out of 5" class="ratings"><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span></div> <p>' +
          bestsellers_layer.product_02.product_review +
          "</p> <strong>" +
          bestsellers_layer.product_02.userName +
          '</strong> </div> </a> </div> </div> <div class="col-ls-5 col-sm-4 col-xs-6 hidden-sm"> <div class="ls_bestSellers_box"> <a href="' +
          bestsellers_layer.product_03.product_url +
          '"> <img alt="' +
          bestsellers_layer.product_03.img_alt +
          '" class="img-responsive ls_tile_img" src="' +
          bestsellers_layer.product_03.img_src +
          '"> <div class="ls_bestSellers_bubble"> <div title="4.0 out of 5" class="ratings"><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star-o"></span></div> <p>' +
          bestsellers_layer.product_03.product_review +
          "</p> <strong>" +
          bestsellers_layer.product_03.userName +
          '</strong> </div> </a> </div> </div> <div class="col-ls-5 col-sm-4 col-xs-6 hidden-sm"> <div class="ls_bestSellers_box"> <a href="' +
          bestsellers_layer.product_04.product_url +
          '"> <img alt="' +
          bestsellers_layer.product_04.img_alt +
          '" class="img-responsive ls_tile_img" src="' +
          bestsellers_layer.product_04.img_src +
          '"> <div class="ls_bestSellers_bubble"> <div title="5 out of 5" class="ratings"><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span></div> <p>' +
          bestsellers_layer.product_04.product_review +
          "</p> <strong>" +
          bestsellers_layer.product_04.userName +
          '</strong> </div> </a> </div> </div> <div class="col-ls-5 col-sm-4 col-xs-6"> <div class="ls_bestSellers_box"> <a href="' +
          bestsellers_layer.product_05.product_url +
          '"> <img alt="' +
          bestsellers_layer.product_05.img_alt +
          '" class="img-responsive ls_tile_img" src="' +
          bestsellers_layer.product_05.img_src +
          '"> <div class="ls_bestSellers_bubble"> <div title="4.6 out of 5" class="ratings"><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span></div> <p>' +
          bestsellers_layer.product_05.product_review +
          "</p> <strong>" +
          bestsellers_layer.product_05.userName +
          "</strong> </div> </a> </div> </div> </div> </section>";
        bodyTarget.append(bestSellerHtml);
      }

      //Create store Reviews
      function createStoreReview() {
        var storeReviewHtml =
          '<section class="ls_mb ls_reviews_container"> <div class="ls_reviews_center_box"> <div class="ls_reviews ls_hp_container container"> <div class="row ls_reviews_row"> <div class="col-xs-4 ls_reviews_wrapper"> <div class="ls_reviews_box"> <span class="ls_review_quote">&ldquo;</span> <img class="ls_people_img img-responsive lazy" alt="' +
          store_review_layer.review_01.img_alt +
          '" src="' +
          store_review_layer.review_01.img_src +
          '"> <p>' +
          store_review_layer.review_01.text +
          "</p> <strong>" +
          store_review_layer.review_01.name +
          '</strong> </div> </div> <div class="col-xs-4 ls_reviews_wrapper"> <div class="ls_reviews_box"> <span class="ls_review_quote">&ldquo;</span> <img class="ls_people_img img-responsive lazy" alt="' +
          store_review_layer.review_02.img_alt +
          '" src="' +
          store_review_layer.review_02.img_src +
          '"> <p>' +
          store_review_layer.review_02.text +
          "</p> <strong>" +
          store_review_layer.review_02.name +
          '</strong> </div> </div> <div class="col-xs-4 ls_reviews_wrapper"> <div class="ls_reviews_box"> <span class="ls_review_quote">&ldquo;</span> <img class="ls_people_img img-responsive lazy" alt="' +
          store_review_layer.review_03.img_alt +
          '" src="' +
          store_review_layer.review_02.img_src +
          '"> <p>' +
          store_review_layer.review_03.text +
          "</p> <strong>" +
          store_review_layer.review_03.name +
          "</strong> </div> </div> </div> </div> </div> </section>";
        bodyTarget.append(storeReviewHtml);
      }

      //Create get design + advice

      function createDesignAdvice() {
        var designAdviceHtml =
          '<section class="container ls_hp_container ls_design_ideas_block"> <div id="design_ideas_block" class="row"> <div class="col-xs-12"> <h3 class="ls_hp_title">Get Design Ideas + Advice</h3> </div> <div class="col-sm-1 col-xs-6"> <a href="/inspiration/ideas-advice/styles"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-style.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-style.jpg"> <span class="dib_title">Styles</span> </a> </div> <div class="col-sm-1 col-xs-6"> <a href="/inspiration/ideas-advice/guides"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-guid.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-guid.jpg"> <span class="dib_title">Guides</span> </a> </div> <div class="col-sm-1 col-xs-6"> <a href="/inspiration/ideas-advice/how-tos"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-how-to.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-how-to.jpg"> <span class="dib_title">How Tos</span> </a> </div> <div class="col-sm-1 col-xs-6"> <a href="/inspiration/ideas-advice/decor-tips"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-decor.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-decor.jpg"> <span class="dib_title">Decor Tips</span> </a> </div> <div class="col-sm-1 col-xs-6"> <a href="/inspiration/ideas-advice/kids-teens"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-kids.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-kids.jpg"> <span class="dib_title">Kids + Teens</span> </a> </div> <div class="col-sm-1 col-xs-6"> <a href="/inspiration/ideas-advice/behind-the-design"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-behind.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-behind.jpg"> <span class="dib_title"> Behind the Design</span> </a> </div> <div class="col-sm-1 col-xs-6"> <a href="/inspiration/ideas-advice/shopping-basics"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-shopping.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-shopping.jpg"> <span class="dib_title"> Shopping Basics</span> </a> </div> </div> </section>';
        bodyTarget.append(designAdviceHtml);
      }

      function init() {
        createReviveLayer();
        createSmallSpacesLayer();
        createMustReadTips();
        createCategoryLink();
        injectOlapic();
        initOlapic();
        createBestSellers();
        createStoreReview();
        createDesignAdvice();
      }

      init();
      // // Append Heroes and initialize Hero Slider
      // $("#ls_hero_event").append(
      //   '<!-- DESKTOP SECONDARY --> <a href="/departments/outdoor"> <div class="ls_hero_cm"> <picture> <!--[if IE 9]><video style="display: none;"><![endif]--> <source srcset="/globalassets/images/home/2020/03/0316_OutdoorLiving_hp_hero2.jpg?w=575" media="(max-width: 575px)"> <source srcset="/globalassets/images/home/2020/03/0316_OutdoorLiving_hp_hero2.jpg?w=767" media="(max-width: 767px)"> <source srcset="/globalassets/images/home/2020/03/0316_OutdoorLiving_hp_hero2.jpg?w=991" media="(max-width: 991px)"> <source srcset="/globalassets/images/home/2020/03/0316_OutdoorLiving_hp_hero2.jpg?w=1199" media="(max-width: 1199px)"> <!--[if IE 9]></video><![endif]--> <img alt="Outdoor Living" class="img-responsive img_target" src="/globalassets/images/home/2020/03/0316_OutdoorLiving_hp_hero2.jpg"> </picture> <p class="sr-only">Outdoor Awakening - bring your backyard to life - shop new looks</p> </div> </a><!-- DESKTOP SECONDARY --> <a href="/departments/mattresses/promotions"> <div class="ls_hero_cm"> <picture> <!--[if IE 9]><video style="display: none;"><![endif]--> <source srcset="/globalassets/images/home/2020/03/0316_Revive_RestForLess_hp_hero3.jpg?w=575" media="(max-width: 575px)"> <source srcset="/globalassets/images/home/2020/03/0316_Revive_RestForLess_hp_hero3.jpg?w=767" media="(max-width: 767px)"> <source srcset="/globalassets/images/home/2020/03/0316_Revive_RestForLess_hp_hero3.jpg?w=991" media="(max-width: 991px)"> <source srcset="/globalassets/images/home/2020/03/0316_Revive_RestForLess_hp_hero3.jpg?w=1199" media="(max-width: 1199px)"> <!--[if IE 9]></video><![endif]--> <img alt="Revive Rest for Less Event" class="img-responsive img_target" src="/globalassets/images/home/2020/03/0316_Revive_RestForLess_hp_hero3.jpg"> </picture> <p class="sr-only">Revive rest for less event - save bigger, sleep better - shop now</p> </div> </a>'
      // );

      // $("#ls_hero_event").slick({
      //   infinite: true,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   dots: false,
      //   arrows: true,
      //   autoplay: true,
      //   autoplaySpeed: 4000
      // });

      $("#viewMore").click(function() {
        if ($(".ls_departments_row").height() <= 0) {
          $(".ls_departments_row").animate(
            {
              height: $("#ls_derpartments_row").height() + 20 + "px"
            },
            800,
            overflowFunc("visible")
          );
          $("#viewMore").fadeOut(500, function() {
            $(this)
              .text("View Less -")
              .fadeIn(500);
          });
          $(".ls_departments_showMore .ls_department_box a").each(function(
            index,
            element
          ) {
            $(this).attr("tabindex", "0");
          });
          $(
            ".ls_departments_showMore .ls_department_box:first-child a"
          ).focus();
        } else {
          $(".ls_departments_row").animate(
            {
              height: "0px"
            },
            800,
            overflowFunc("hidden")
          );
          $("#viewMore").fadeOut(500, function() {
            $(this)
              .text("View More +")
              .fadeIn(500);
          });
          $(".ls_departments_showMore .ls_department_box a").each(function(
            index,
            element
          ) {
            $(this).attr("tabindex", "-1");
          });
        }
      });

      function overflowFunc(val) {
        $(".ls_departments_row").css("overflow", val);
      }
    }
    $("#viewMore").keydown(function(e) {
      if (e.keyCode === 13) $(this).trigger("click");
    });
  },
  false
);
