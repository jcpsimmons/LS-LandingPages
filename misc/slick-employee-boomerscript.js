"use strict";

var injectAndSlick = function injectAndSlick() {
    var injectionPoint = $("#EmployeePhotoSlider"); // Configure Brandfolder Links

    var imageLinks = [
        "https://cdn.brandfolder.io/XQW73PF4/as/q56vv4-bkjfnc-3nfzka/Team_LS_Photos_for_Webpage.jpg?width=200&height=200"
    ];

    for (var i = 2; i < 12; i++) {
        imageLinks.push("".concat(imageLinks[0], "&position=").concat(i));
    } // Links to all the image - smashes to HTML. replace the data-img attr with the link to the modal image

    var images = imageLinks
        .map(function (imageLink) {
            return "<img class='img-responsive' alt='Employee photos' src='"
                .concat(imageLink, "' data-img='")
                .concat(
                    imageLink.replace(/200/gi, "500"),
                    '\' data-toggle="modal" data-target="#PhotoModal" role=\'button\' onclick="window.modalSpawn(this)"/>'
                );
        })
        .join("");
    injectionPoint.empty();
    injectionPoint.append(images);
    injectionPoint.slick({
        infinite: true,
        slidesToShow: 6,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    }); // Triggered by photo click
    // Gets the data-img attr and makes a modal

    window.modalSpawn = function (e) {
        document.querySelector("#PhotoModal img").src = e.dataset.img;
    }; // Triggered by x click on modal

    window.closeModal = function () {
        $("#PhotoModal").modal("hide");
    }; // ADA Compliance - trigger modal with keypress

    $("#EmployeePhotoSlider img").keydown(function (e) {
        if (e.keyCode === 13) $(this).trigger("click");
    }); // Close modal with ESC key

    $(document).on("keydown", function (event) {
        if (event.key == "Escape") {
            $("#PhotoModal").modal("hide");
        }

        if (
            event.key == "Enter" &&
            document.querySelector("#PhotoModal i.fa-times:focus")
        ) {
            window.closeModal();
        }
    });
};

var jqwait = setInterval(function () {
    if (window.jQuery) {
        injectAndSlick();
        window.clearInterval(jqwait);
    }
}, 50);
