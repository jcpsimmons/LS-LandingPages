const injectAndSlick = () => {
    var injectionPoint = $('#EmployeePhotoSlider')

    // Links to all the image - smashes to HTML. replace the data-img attr with the link to the modal image
    var images = ['https://via.placeholder.com/200.jpg', 'https://via.placeholder.com/200.jpg', 'https://via.placeholder.com/200.jpg', 'https://via.placeholder.com/200.jpg', 'https://via.placeholder.com/200.jpg', 'https://via.placeholder.com/200.jpg', 'https://via.placeholder.com/200.jpg', 'https://via.placeholder.com/200.jpg', 'https://via.placeholder.com/200.jpg', 'https://via.placeholder.com/200.jpg'].map((imageLink) => {
        return `<img class='img-responsive' alt='Employee photos' src='${imageLink}' data-img='${imageLink}' data-toggle="modal" data-target="#myModal" role='button' onclick="window.modalSpawn(this)"/>`
    }).join("")

    injectionPoint.empty()
    injectionPoint.append(images)
    injectionPoint.slick({
        infinite: true,
        slidesToShow: 6,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    })

    // Gets the data-img attr and makes a modal
    window.modalSpawn = (e) => {
        console.log(e.dataset.img)
    }

}


const jqwait = setInterval(() => {
    if (window.jQuery) {
        injectAndSlick()
        window.clearInterval(jqwait)
    }
}, 50)
