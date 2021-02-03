$(document).ready(function() {
    
// Наши выпускники (слайдер):
  $(".students--container").slick({
    infinite: true,
    dots: true,
    arrow: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
  });

//   Скролл при нажатии на меню:
    $('#about--menu').on("click", function(e){
        e.preventDefault();
            var top = $("#about").offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 700);
    });
    $('#students--menu').on("click", function(e){
        e.preventDefault();
            var top = $("#students").offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 700);
    });
    $('#contacts--menu').on("click", function(e){
        e.preventDefault();
            var top = $("#contacts").offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 700);
    });
});