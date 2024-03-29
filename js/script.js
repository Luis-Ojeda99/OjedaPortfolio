$(window).on("load", function() {
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
})

$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Developer", "Web Developer", "Systems consultant"],
        typeSpeed: 90,
        loop: true,
        startDelay: 1500,
        showCursor: false
    });

    // Carousel function for the skills section.
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        items: 4,
        smartSpeed: 800,
        pagination:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:3
            },
            1366:{
                items:4
            }
        }
    });
   
    var skillsTopOffset = $(".skillsSection").offset().top;
   

    $(window).on("scroll", function() {
        if(window.scrollY > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                size:148,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

    });

    // Fancybox functionality for the portfolio projects
    $("[data-fancybox]").fancybox();


    //function to change the "current" filter once one of the options is clicked.
    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });


    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({
            scrollTop: targetPosition - 50
        }, "slow");
    });

    const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() +"px");
            body.addClass("fixedNav");
		}
		else {
            body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}
});