$(document).ready(function () {
    $('.sidenav').sidenav();
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
});

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

autoplay();
$(document).ready(function () {
    $('.collapsible').collapsible();
});

$(document).ready(function () {
    $('.parallax').parallax();
});