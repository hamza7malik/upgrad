$(function() {

    $(".fancybox").fancybox();

    $(window).on('load', function() {
        $('body').addClass('loaded');
        new WOW({ mobile: false }).init();
        //AOS.init({ disable: 'mobile' });
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('header').addClass('fixed-header');
        } else {
            $('header').removeClass('fixed-header');
        }
    });

    //menu btn
    // menu click event
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.mainMenu').addClass('act');
        } else {
            $('.mainMenu').removeClass('act');
        }
    });

    // Height align
    if ($('.section-our-campus').length > 0) {
        var getCampus = $('.section-our-campus .campus-slide-item').height();
        $('.campus-slides').height(getCampus);
    }


    //campus single Slider 1
    if ($('#camp-single-carousel-1').length > 0) {
        $('#camp-single-carousel-1').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            asNavFor: '#camp-carousel-nav-1'
        });
    }

    //campus single Slider nav 1
    if ($('#camp-carousel-nav-1').length > 0) {
        $('#camp-carousel-nav-1').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '#camp-single-carousel-1',
            dots: true,
            centerMode: false,
            focusOnSelect: true
        });
    }

    //campus single Slider 2
    if ($('#camp-single-carousel-2').length > 0) {
        $('#camp-single-carousel-2').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            asNavFor: '#camp-carousel-nav-2'
        });
    }

    //campus single Slider nav 2
    if ($('#camp-carousel-nav-2').length > 0) {
        $('#camp-carousel-nav-2').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '#camp-single-carousel-2',
            dots: true,
            centerMode: false,
            focusOnSelect: true
        });
    }

    //Home Main Slider
    if ($('.campus-slider').length > 0) {
        $('.campus-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        });
    }


    //stories slider
    if ($('.stories-slider').length > 0) {
        $('.stories-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            cssEase: 'linear',
            autoplay: false,
            autoplaySpeed: 4000,
            asNavFor: '.rev_slider'
        });
    }


    //stories Carousel
    if ($('.rev_slider').length > 0) {
        var rev = $('.rev_slider');
        rev.on('init', function(event, slick, currentSlide) {
            var
                cur = $(slick.$slides[slick.currentSlide]),
                next = cur.next(),
                next2 = cur.next().next(),
                prev = cur.prev(),
                prev2 = cur.prev().prev();
            prev.addClass('slick-sprev');
            next.addClass('slick-snext');
            prev2.addClass('slick-sprev2');
            next2.addClass('slick-snext2');
            cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
            slick.$prev = prev;
            slick.$next = next;
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            console.log('beforeChange');
            var
                cur = $(slick.$slides[nextSlide]);
            console.log(slick.$prev, slick.$next);
            slick.$prev.removeClass('slick-sprev');
            slick.$next.removeClass('slick-snext');
            slick.$prev.prev().removeClass('slick-sprev2');
            slick.$next.next().removeClass('slick-snext2');
            next = cur.next(),
                prev = cur.prev();
            //prev2.prev().prev();
            //next2.next().next();
            prev.addClass('slick-sprev');
            next.addClass('slick-snext');
            prev.prev().addClass('slick-sprev2');
            next.next().addClass('slick-snext2');
            slick.$prev = prev;
            slick.$next = next;
            cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
        });

        rev.slick({
            speed: 1000,
            arrows: true,
            dots: false,
            focusOnSelect: false,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            infinite: true,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0',
            asNavFor: '.stories-slider',
            swipe: true,
            /*customPaging: function(slider, i) {
                return '';
            },
            /*infinite: false,*/
        });


    }

    //testimonial Carousel
    if ($('.testimonial-carousel').length > 0) {
        $('.testimonial-carousel').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        $('.testimonial-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide, prevSlide) {
            if (Math.abs(nextSlide - currentSlide) == 1) {
                direction = (nextSlide - currentSlide > 0) ? "right" : "left";
                if (direction == 'right') {
                    $('.testimonial-carousel .slick-dots li:nth-child(' + nextSlide + ')').addClass('was-act');
                } else {
                    $('.testimonial-carousel .slick-dots li:nth-child(' + currentSlide + ')').removeClass('was-act');
                }

                //console.log(direction);
            } else {
                direction = (nextSlide - currentSlide > 0) ? "left" : "right";
                //console.log('else');
            }

        });


    }

    //programs Carousel
    if ($('.programs-carousel').length > 0) {
        $('.programs-carousel').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });



        $('.programs-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide, prevSlide) {
            if (Math.abs(nextSlide - currentSlide) == 1) {
                direction = (nextSlide - currentSlide > 0) ? "right" : "left";
                if (direction == 'right') {
                    $('.programs-carousel .slick-dots li:nth-child(' + nextSlide + ')').addClass('was-act');
                } else {
                    $('.programs-carousel .slick-dots li:nth-child(' + currentSlide + ')').removeClass('was-act');
                }

                //console.log(direction);
            } else {
                direction = (nextSlide - currentSlide > 0) ? "left" : "right";
                //console.log('else');
            }

        });
    }




    $('.testimonial-carousel .testimonial-item-wrapper,.testi-arch-wrapper').on("click", function(e) {
        e.preventDefault();
        var title = $(this).attr('data-title');
        var designation = $(this).attr('data-designation');
        var content = $(this).attr('data-body');
        $('#testimonialModal .modal-title').html(title);
        $('#testimonialModal .testimonial-designation').html(designation);
        $('#testimonialModal .modal-body').html(content);
    });


    if ($('.nav-pills').length > 0) {
        $('.nav-pills .nav-link').on('click', function() {
            $('.nav-pills .nav-link').removeClass('active');
            $(this).toggleClass('active');
        });

    }

    /*-------------------------------------------------------------------------------
	  Object Map
	-------------------------------------------------------------------------------*/



    $('.object-label').on('click', function() {
        $('.object-label').not(this).find($('.object-info')).fadeOut(200);
        $(this).find('.object-info').fadeToggle(200);
    });

    $('.hwrap a.close-ticker').on('click', function() {
        $('.hwrap').slideUp(500);
    });

    $('a.search-link').on('click', function(e) {
        e.preventDefault();
        $('.global-search').toggleClass('search-act');
        $('#search').attr('autofocus', 'true');
    });
    var getExtraform = $('.extra-form').html();
    $('a.inquiry-trigger').on('click', function(e) {
        e.preventDefault();

        $(this).parent('.inquiry-window').toggleClass('expand-window');
        var txt = $(this).parent(".inquiry-window").hasClass('expand-window') ? 'close' : 'inquire now';
        $(this).text(txt);
        console.log(getExtraform);
        if ($(".inquiry-window").hasClass('expand-window')) {
            $('.extra-form').html('');
            console.log('popoup active');
        } else {
            console.log('popoup close');
            $('.extra-form').html(getExtraform);
        }
    });


});