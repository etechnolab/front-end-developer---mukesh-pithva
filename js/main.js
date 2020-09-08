
'use strict';
$(window).load(function() {
    $('.loader').delay(500).fadeOut('slow');
});


$(document).ready(function() {

    'use strict';
    /* ==============================================
     /*   wow
      =============================================== */
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();
    /* ==============================================
        STICKY HEADER
        =============================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
    /* --------------------------------------------------------
     COUNTER JS
     ----------------------------------------------------------- */

    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });

    $(".countdown")
        .countdown("2021/01/22", function(event) {
            $(this).html(
                event.strftime('<div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>')
            );
        });

    /* ==============================================
     SLIDER
     =============================================== */
    $(".cover_slider").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayHoverPause:false,
        dots:true,
        nav:false,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dotsContainer: '.cover_dots'
    });

    $(".brand_carousel").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:450,
        autoplayHoverPause:false,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3

            },
            1000:{
                items:4

            }
        },
        items:5
    });
    /* ------------------------------------- */
    /* Animated progress bars
     /* ------------------------------------- */

    var waypoints = $('.progress_container').waypoint(function() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 1000
        });
    },{
        offset: '50%'
    });


});

$(function(){
  $(".dropdown").hover(     

    function() {
        $('.dropdown-menu.first', this).stop( true, true ).fadeIn("fast");
        $(this).toggleClass('show');
        // $('b', this).toggleClass("caret caret-up");                
    },
    function() {
        $('.dropdown-menu.first', this).stop( true, true ).fadeOut("fast");
        $(this).toggleClass('show');
        $('b', this).toggleClass("caret caret-up");                
    });
});