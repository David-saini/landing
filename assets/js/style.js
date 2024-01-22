$('.myslider-2').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 993,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
});


$('.slider-1').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
});



var titleMain = $("#animatedHeading");
var titleSubs = titleMain.find("slick-active");

if (titleMain.length) {

    titleMain.slick({
        autoplay: false,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        centerPadding: "10px",
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        vertical: true,
        speed: 1000,
        autoplaySpeed: 1000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
    });

    $(".slick-dupe").each(function (index, el) {
        $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
    });

    titleMain.slick('slickPlay');
};


AOS.init({ once: true });



var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

