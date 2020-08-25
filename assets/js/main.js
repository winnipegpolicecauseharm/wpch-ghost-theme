const mq = window.matchMedia( "(max-width: 768px)" );


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
            $(".header").addClass("header-box-shadow");
            if(mq.matches) {
        	$(".header").addClass("active");
        	$(".header").addClass("header-box-shadow");
        }

        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
           $(".header").removeClass("header-box-shadow");
        }
    });
});