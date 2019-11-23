var countDownDate = new Date(2019, 11, 21, 23, 59, 59).getTime();

// Do every second
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //   document.getElementById("demo").innerHTML =
  //     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  console.log(hours, minutes, seconds);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Sale has Ended";
  }
}, 1000);
