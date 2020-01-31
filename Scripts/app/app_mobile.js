window.addEventListener(
  "load",
  function () {
    if (window.jQuery) {
      var bodyTarget = $("#hp_body");
      // Side to side Top Layer Attributes
      var sideToside_banner_01 = {
        left_box_link: "/inspiration/celebrity-designer/magnolia-home",
        left_img_src: "/globalassets/images/home/2019/09/img-tile-MH.jpg",
        left_img_alt: "Magnolia Home By Joanna Gaines",
        left_img_title_txt: "Magnolia Home by Joanna Gaines",
        left_img_cta_txt: "Shop her Collection &rsaquo;",
        right_box_link:
          "/inspiration/celebrity-designer/nate-berkus-and-jeremiah-brent/furniture",
        right_img_src: "/globalassets/images/home/2019/09/R-Block-so_v2.jpg",
        right_img_alt: "Nate + Jeremiah For Living Spaces",
        right_img_title_txt: "N+J Fall 2019",
        right_img_cta_txt: "Shop the collection &rsaquo;"
      };

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
            "Itâ€™s not bulky at all. Super comfy and stylish. Highly recommend!",
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

      var sideToside_banner_02 = {
        left_box_link:
          "/departments/mattresses/foundations/adjustable-bases/revive",
        left_img_src: "/globalassets/images/home/2019/09/L-Block.jpg",
        left_img_alt: "The Power of Sleep",
        left_img_title_txt: "The Power of Sleep",
        left_img_cta_txt: "Meet Our New Adjustable Bases &rsaquo;",
        right_box_link:
          "/departments/furniture/living-room/sofas-and-sectionals/sectional-sofas?sale_price=%5b*+TO+800%5d",
        right_img_src: "/globalassets/images/home/2019/03/R-Block.jpg",
        right_img_alt: "Sectional Sofas",
        right_img_title_txt: "Sectional Sofas under $800",
        right_img_cta_txt: "Shop Now &rsaquo;"
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
            "Living Spaces takes pride in the quality and variety of their products. They have knowledgeable and accessible staff to answer questions when a customer visits the store. Their prices are very competitive. Itâ€™s an awesome store.",
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

      // Create Side to Side top Layer-mobile
      function createSideToSide_01() {
        var sideToside_banner_01_html =
          '<section class="container ls_hp_container banner_2_container"> <div class="upper_banner_2"> <a href="' +
          sideToside_banner_01.left_box_link +
          '"> <img class="img-responsive lazy" alt="' +
          sideToside_banner_01.left_img_alt +
          '"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          sideToside_banner_01.left_img_src +
          '"> <div class="cta_box"> <span class="banner_title ls_hp_title">' +
          sideToside_banner_01.left_img_title_txt +
          '</span> <p class="banner_cta">' +
          sideToside_banner_01.left_img_cta_txt +
          '</p> </div> </a> </div> <div class="lower_banner_2"> <a href="' +
          sideToside_banner_01.right_box_link +
          '"> <img class="img-responsive lazy" alt="' +
          sideToside_banner_01.right_img_alt +
          '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          sideToside_banner_01.right_img_src +
          '"> <div class="cta_box"> <span class="banner_title ls_hp_title">' +
          sideToside_banner_01.right_img_title_txt +
          '</span> <p class="banner_cta">' +
          sideToside_banner_01.right_img_cta_txt +
          "</p> </div> </a> </div> </section>";
        bodyTarget.append(sideToside_banner_01_html);
      }

      //Create Brand Story - mobile
      function createBrandStory() {
        var brandStoryHtml =
          '<section class="container ls_hp_container ls_checkList_container"> <h2 class="ls_hp_title">Enjoy fast, fun and easy shopping</h2> <div class="shopping_exp_link"> <div> <span class="round_border">1</span> </div> <div class="shopping_exp_text"> <h3>Shop Online or In Store</h3> <p>Find everything you need anywhere you go.</p> <a href="/departments/furniture">Start your search &rsaquo;</a> </div> </div> <div class="shopping_exp_link"> <div> <span class="round_border">2</span> </div> <div class="shopping_exp_text"> <h3>Follow Our Checklist</h3> <p>Discover how to pick the right pieces for your home.</p> <a href="/inspiration/ideas-advice/guides/essential-shopping-checklist">Get informed &rsaquo;</a> </div> </div> <div class="shopping_exp_link"> <div> <span class="round_border">3</span> </div> <div class="shopping_exp_text"> <h3>Buy Today, Enjoy Tonight</h3> <p>Get your pieces fast with same-day delivery options.</p> <a href="/delivery">Check eligibility &rsaquo;</a> </div> </div> </section>';
        bodyTarget.append(brandStoryHtml);
      }

      //Create Revive Layer - mobile
      function createReviveLayer() {
        var reviveLayerHtml =
          '<section class="container ls_hp_container ls_revive_container"> <a href="/departments/mattresses"> <div class="ls_revive_title_box"> <img class="img-responsive lazy center-block" alt="revive logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="/globalassets/images/lp/2018/10/revive_logo.png"> <h2 class="ls_hp_title">A Simple + Personal <br>Mattress Shopping Experience</h2> </div> <div id="revive_slider"> <div class="ls_revive_box"> <span class="round_border">1</span> <p>Work with certified, non-commissioned sleep experts</p> </div> <div class="ls_revive_box"> <span class="round_border">2</span> <p>Shop a curated line of national brands + exclusive mattresses</p> </div> <div class="ls_revive_box"> <span class="round_border">3</span> <p>Enjoy guaranteed lowest prices + 30-day price matching</p> </div> </div> <img alt="revive sleep center" class="img-responsive lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="/globalassets/images/home/2018/10/revive-L.jpg"> </a> </section>';
        bodyTarget.append(reviveLayerHtml);
      }

      //Create Small Spaces Layer - mobile
      function createSmallSpacesLayer() {
        var smallSpacesHtml =
          '<section class="container ls_hp_container ls_small_space_container"> <h2 class="ls_hp_title">Small is the New Cool</h2> <p>Enjoy maximum function in minimal square feet with clever designs + creative solutions.</p> <a href="/inspiration/lifestyle/small-space-living">Shop Small Space Furniture &rsaquo;</a> <div id="ls_smallSpaces_slider" class="ls_department_large_box"> <div class="ls_smallSpaces_box"> <a href="/departments/furniture/living-room/sofa-beds?small_spaces=Yes"> <div class="ls_smallSpaces_img_box"> <div class="ls_smallSpace_cta"> <span class="ls_hp_cta">Shop Sofa Beds</span> </div> <img class="img-responsive lazy" alt="Sofa Beds" src="/globalassets/images/home/2018/10/smallspaces_sofa_bed_460x380.jpg?quality=20" data-src="/globalassets/images/home/2018/10/smallspaces_sofa_bed_460x380.jpg"> </div> <div class="ls_smallSpace_svg_wrapper"> </div> </a> </div> <div class="ls_smallSpaces_box"> <a href="/departments/featured/related-searches/lift-top-coffee-table"> <div class="ls_smallSpaces_img_box"> <div class="ls_smallSpace_cta"> <span class="ls_hp_cta">Shop Lift-Top Coffee Tables</span> </div> <img class="img-responsive lazy" alt="Coffee Tables" src="/globalassets/images/home/2018/10/smallspaces_lift_table_460x380.jpg?quality=20" data-src="/globalassets/images/home/2018/10/smallspaces_lift_table_460x380.jpg"> </div> <div class="ls_smallSpace_svg_wrapper"> </div> </a> </div> <div class="ls_smallSpaces_box"> <a href="/departments/furniture/living-room/sofas-and-sectionals/ottomans?small_spaces=Yes"> <div class="ls_smallSpaces_img_box"> <div class="ls_smallSpace_cta"> <span class="ls_hp_cta">Shop Storage Ottomans</span> </div> <img class="img-responsive lazy" alt="Storage Ottomans" src="/globalassets/images/home/2018/10/smallspaces_ottoman_460x380.jpg?quality=20" data-src="/globalassets/images/home/2018/10/smallspaces_ottoman_460x380.jpg"> </div> <div class="ls_smallSpace_svg_wrapper"> </div> </a> </div> </div> </section>';
        bodyTarget.append(smallSpacesHtml);
      }

      //Create Must Read Tips - mobile
      function createMustReadTips() {
        var mustReadTipsHtml =
          '<section class="container ls_hp_container ls_mustRead_container"> <h2 class="ls_hp_title">Must-Read Tips</h2> <div class="ls_mustRead_box"> <a href="' +
          mustReadTips_layer.layer_01.layer_link +
          '"> <div class="ls_mustRead_img"> <img class="img-responsive lazy visible-xs" role="presentation" alt="' +
          mustReadTips_layer.layer_01.img_alt +
          '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          mustReadTips_layer.layer_01.img_src +
          '"> </div> <div class="ls_mustRead_text"> <p>' +
          mustReadTips_layer.layer_01.layer_title +
          '</p> </div> <div class="ls_mustRead_icon"> <span class="round_angle_arrow_black"><i class="fa fa-angle-right" aria-hidden="true"></i></span> </div> </a> </div> <div class="ls_mustRead_box"> <a href="' +
          mustReadTips_layer.layer_02.layer_link +
          '"> <div class="ls_mustRead_img"> <img class="img-responsive lazy visible-xs" role="presentation" alt="' +
          mustReadTips_layer.layer_02.img_alt +
          '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          mustReadTips_layer.layer_02.img_src +
          '"> </div> <div class="ls_mustRead_text"> <p>' +
          mustReadTips_layer.layer_02.layer_title +
          '</p> </div> <div class="ls_mustRead_icon"> <span class="round_angle_arrow_black"><i class="fa fa-angle-right" aria-hidden="true"></i></span> </div> </a> </div> <div class="ls_mustRead_box"> <a href="' +
          mustReadTips_layer.layer_03.layer_link +
          '"> <div class="ls_mustRead_img"> <img class="img-responsive lazy visible-xs" role="presentation" alt="' +
          mustReadTips_layer.layer_03.img_alt +
          '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          mustReadTips_layer.layer_03.img_src +
          '"> </div> <div class="ls_mustRead_text"> <p>' +
          mustReadTips_layer.layer_03.layer_title +
          '</p> </div> <div class="ls_mustRead_icon"> <span class="round_angle_arrow_black"><i class="fa fa-angle-right" aria-hidden="true"></i></span> </div> </a> </div> <div class="ls_mustRead_box"> <a href="' +
          mustReadTips_layer.layer_04.layer_link +
          '"> <div class="ls_mustRead_img"> <img class="img-responsive center-block lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          mustReadTips_layer.layer_04.img_src +
          '" alt="' +
          mustReadTips_layer.layer_04.img_alt +
          '"> </div> <div class="ls_mustRead_text"> <p>' +
          mustReadTips_layer.layer_04.layer_title +
          '</p> </div> <div class="ls_mustRead_icon"> <span class="round_angle_arrow_black"><i class="fa fa-angle-right" aria-hidden="true"></i></span> </div> </a> </div> </section>';
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

      //Create Best Seller layer - mobile
      function createBestSellers() {
        var bestSellerHtml =
          ' <section class="ls_hp_container container ls_bestSellers"> <h2 class="ls_hp_title">Shop <i class="fa fa-heart" aria-hidden="true"></i> Bestsellers</h2> <div id="bestSellers_slider" class="row ls_bestSellers_wrapper ls_department_large_box"> <div class="ls_bestSellers_slider_box"> <div class="ls_bestSellers_box"> <a href="' +
          bestsellers_layer.product_01.product_url +
          '"> <img alt="' +
          bestsellers_layer.product_01.img_alt +
          '" class="img-responsive lazy ls_tile_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          bestsellers_layer.product_01.img_src +
          '"> <div class="ls_bestSellers_bubble"> <div title="5 out of 5" class="ratings"><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span></div> <p>' +
          bestsellers_layer.product_01.product_review +
          "</p> <strong>" +
          bestsellers_layer.product_01.userName +
          '</strong> </div> </a> </div> </div> <div class="ls_bestSellers_slider_box"> <div class="ls_bestSellers_box"> <a href="' +
          bestsellers_layer.product_02.product_url +
          '"> <img alt="' +
          bestsellers_layer.product_02.img_alt +
          '" class="img-responsive lazy ls_tile_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          bestsellers_layer.product_02.img_src +
          '"> <div class="ls_bestSellers_bubble"> <div title="5 out of 5" class="ratings"><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span></div> <p>' +
          bestsellers_layer.product_02.product_review +
          "</p> <strong>" +
          bestsellers_layer.product_02.userName +
          '</strong> </div> </a> </div> </div> <div class="ls_bestSellers_slider_box"> <div class="ls_bestSellers_box"> <a href="' +
          bestsellers_layer.product_03.product_url +
          '"> <img alt="' +
          bestsellers_layer.product_03.img_alt +
          '" class="img-responsive lazy ls_tile_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          bestsellers_layer.product_03.img_src +
          '"> <div class="ls_bestSellers_bubble"> <div title="5 out of 5" class="ratings"><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span></div> <p>' +
          bestsellers_layer.product_03.product_review +
          "</p> <strong>" +
          bestsellers_layer.product_03.userName +
          '</strong> </div> </a> </div> </div> <div class="ls_bestSellers_slider_box"> <div class="ls_bestSellers_box"> <a href="' +
          bestsellers_layer.product_04.product_url +
          '"> <img alt="' +
          bestsellers_layer.product_04.img_alt +
          '" class="img-responsive lazy ls_tile_img"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          bestsellers_layer.product_04.img_src +
          '"> <div class="ls_bestSellers_bubble"> <div title="5 out of 5" class="ratings"><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span></div> <p>' +
          bestsellers_layer.product_04.product_review +
          "</p> <strong>" +
          bestsellers_layer.product_04.userName +
          '</strong> </div> </a> </div> </div> <div class="ls_bestSellers_slider_box"> <div class="ls_bestSellers_box"> <a href="' +
          bestsellers_layer.product_04.product_url +
          '"> <img alt="' +
          bestsellers_layer.product_04.img_alt +
          '" class="img-responsive lazy ls_tile_img"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          bestsellers_layer.product_04.img_src +
          '"> <div class="ls_bestSellers_bubble"> <div title="5 out of 5" class="ratings"><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span><span aria-hidden="true" class="fa fa-star"></span></div> <p>' +
          bestsellers_layer.product_04.product_review +
          "</p> <strong>" +
          bestsellers_layer.product_04.userName +
          "</strong> </div> </a> </div> </div> </div> </section>";
        bodyTarget.append(bestSellerHtml);
      }

      //Create Side to Side Banner 02 - mobile
      function createSideToSide_02() {
        var sideTosideHtml =
          '<section class="container ls_hp_container banner_1_container"> <div class="upper_banner_1"> <a href="' +
          sideToside_banner_02.left_box_link +
          '"> <img class="img-responsive lazy" alt="' +
          sideToside_banner_02.left_img_alt +
          '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          sideToside_banner_02.left_img_src +
          '"> <div class="cta_box"> <span class="banner_title ls_hp_title">' +
          sideToside_banner_02.left_img_title_txt +
          '</span> <p class="banner_cta">' +
          sideToside_banner_02.left_img_cta_txt +
          '</p> </div> </a> </div> <div class="lower_banner_1"> <a href="' +
          sideToside_banner_02.right_box_link +
          '"> <img class="img-responsive lazy" alt="' +
          sideToside_banner_02.right_img_alt +
          '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          sideToside_banner_02.right_img_src +
          '"> <div class="cta_box"> <span class="banner_title ls_hp_title">' +
          sideToside_banner_02.right_img_title_txt +
          '</span> <p class="banner_cta">' +
          sideToside_banner_02.right_img_cta_txt +
          "</p> </div> </a> </div> </section>";
        bodyTarget.append(sideTosideHtml);
      }
      //Create FR Event Banner - Mobile
      function createFRBanner() {
        var fRHtml =
          '<section id="fr2018_banner" class="special_banner"> <a href="/event/firerelief"> <div class="ss_img"> <img class="img-responsive lazy" alt="revive mattress" src="/globalassets/images/lp/2018/09/0918_fr_03.jpg?quality=20" data-src="/globalassets/images/lp/2018/09/0918_fr_03.jpg"> <p>&nbsp;<strong>California Fire Relief</strong>  <br>Free Mattresses for Victims &rsaquo;</p> </div> </a> </section>';
        bodyTarget.append(fRHtml);
      }

      //Create store Reviews
      function createStoreReview() {
        var storeReviewHtml =
          '<section class="container ls_hp_container ls_reviews_container"> <div id="ls_reviews_slider" class="ls_reviews_row ls_department_large_box"> <div class="ls_reviews_wrapper"> <div class="ls_reviews_box"> <img alt="' +
          store_review_layer.review_01.img_alt +
          '" class="ls_people_img img-responsive lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          store_review_layer.review_01.img_src +
          '"> <p>' +
          store_review_layer.review_01.text +
          "</p> <strong>" +
          store_review_layer.review_01.name +
          '</strong> </div> </div> <div class="ls_reviews_wrapper"> <div class="ls_reviews_box"> <img alt="' +
          store_review_layer.review_02.img_alt +
          '" class="ls_people_img img-responsive lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          store_review_layer.review_02.img_src +
          '"> <p>' +
          store_review_layer.review_02.text +
          "</p> <strong>" +
          store_review_layer.review_02.name +
          '</strong> </div> </div> <div class="ls_reviews_wrapper"> <div class="ls_reviews_box"> <img alt="' +
          store_review_layer.review_03.img_alt +
          '" class="ls_people_img img-responsive lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" data-src="' +
          store_review_layer.review_03.img_src +
          '"> <p>' +
          store_review_layer.review_03.text +
          "</p> <strong>" +
          store_review_layer.review_03.name +
          "</strong> </div> </div> </div> </section>";
        bodyTarget.append(storeReviewHtml);
      }

      //Create get design + advice

      function createDesignAdvice() {
        var designAdviceHtml =
          '<section class="container ls_hp_container ls_design_ideas_block"> <h2 class="ls_hp_title">Get Design Ideas + Advice</h3> <div id="design_ideas_block" class="ls_department_large_box"> <div class="ls_design_ideas_box"> <a href="/inspiration/ideas-advice/styles"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-style.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-style.jpg"> <span class="dib_title">Styles</span> </a> </div> <div class="ls_design_ideas_box"> <a href="/inspiration/ideas-advice/guides"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-guid.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-guid.jpg"> <span class="dib_title">Guides</span> </a> </div> <div class="ls_design_ideas_box"> <a href="/inspiration/ideas-advice/how-tos"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-how-to.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-how-to.jpg"> <span class="dib_title">How Tos</span> </a> </div> <div class="ls_design_ideas_box"> <a href="/inspiration/ideas-advice/decor-tips"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-decor.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-decor.jpg"> <span class="dib_title">Decor Tips</span> </a> </div> <div class="ls_design_ideas_box"> <a href="/inspiration/ideas-advice/kids-teens"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-kids.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-kids.jpg"> <span class="dib_title">Kids + Teens</span> </a> </div> <div class="ls_design_ideas_box"> <a href="/inspiration/ideas-advice/behind-the-design"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-behind.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-behind.jpg"> <span class="dib_title"> Behind the Design</span> </a> </div> <div class="ls_design_ideas_box"> <a href="/inspiration/ideas-advice/shopping-basics"> <img class="img-responsive lazy center-block" role="presentation" alt="" src="/globalassets/images/home/2018/10/blog-shopping.jpg?quality=20" data-src="/globalassets/images/home/2018/10/blog-shopping.jpg"> <span class="dib_title"> Shopping Basics</span> </a> </div> </div> </section>';
        bodyTarget.append(designAdviceHtml);
      }

      function init() {
        createSideToSide_01();
        createBrandStory();
        createReviveLayer();
        createSmallSpacesLayer();
        createMustReadTips();
        createCategoryLink();
        injectOlapic();
        initOlapic();
        createBestSellers();
        createSideToSide_02();
        createFRBanner();
        createStoreReview();
        createDesignAdvice();

        let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
        let active = false;

        const lazyLoad = function () {
          if (active === false) {
            active = true;
            setTimeout(function () {
              lazyImages.forEach(function (lazyImage) {
                if (
                  lazyImage.getBoundingClientRect().top <= window.innerHeight &&
                  lazyImage.getBoundingClientRect().bottom >= 0 &&
                  getComputedStyle(lazyImage).display !== "none"
                ) {
                  lazyImage.src = lazyImage.dataset.src;
                  lazyImage.classList.remove("lazy");

                  lazyImages = lazyImages.filter(function (image) {
                    return image !== lazyImage;
                  });

                  if (lazyImages.length === 0) {
                    document.removeEventListener("scroll", lazyLoad);
                    window.removeEventListener("resize", lazyLoad);
                    window.removeEventListener("orientationchange", lazyLoad);
                  }
                }
              });

              active = false;
            }, 200);
          }
        };

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
      }

      init();

      var currentUrl = window.location.href;
      if (currentUrl.indexOf("appversion") > 0) {
        setCookie("lsf-app-view", true, 365);
      }
      // Append Heroes and initialize Hero Slider
      $("#ls_hero_event").append(
        '<!-- MOBILE SECONDARY --> <div class="ls_hero_slider banner-tester-util"> <a href="/departments/mattresses/promotions"> <picture> <source media="(min-width: 768px)" srcset="/globalassets/images/home/2020/02/0203_revive_presidentsday_hp_hero_mobile.jpg?w=780"> <source media="(min-width: 576px)" srcset="/globalassets/images/home/2020/02/0203_revive_presidentsday_hp_hero_mobile.jpg?w=576"> <source media="(min-width: 414px)" srcset="/globalassets/images/home/2020/02/0203_revive_presidentsday_hp_hero_mobile.jpg?w=414"> <img src="/globalassets/images/home/2020/02/0203_revive_presidentsday_hp_hero_mobile.jpg" class="img-responsive" alt="Revive Presidents Day Event"> </picture> <p class="sr-only">Revive presidents day event. Save big, sleep better. Tempur-pedic stearns and foster save up to $800 on select sets Shop our deals.</p> </a> </div> '
      );

      $("#ls_hero_event").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
      });

      $("#shop_departments").removeClass("ls_department_large_box");
      $("#shop_departments").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        autoplay: false
      });
      $("#shop_departments_v2").removeClass("ls_department_large_box");
      $("#shop_departments_v2").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        autoplay: false
      });
      $("#revive_slider").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: false
      });
      $("#ls_smallSpaces_slider").removeClass("ls_department_large_box");
      $("#ls_smallSpaces_slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: false
      });
      $("#bestSellers_slider").removeClass("ls_department_large_box");
      $("#bestSellers_slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: false
      });
      $("#ls_reviews_slider").removeClass("ls_department_large_box");
      $("#ls_reviews_slider").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: false
      });
      $("#design_ideas_block").removeClass("ls_department_large_box");
      $("#design_ideas_block").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: false
      });
    }
  },
  false
);
