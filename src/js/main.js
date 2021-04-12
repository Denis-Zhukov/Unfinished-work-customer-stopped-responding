$('.main-slider').slick({
    slidesToShow: 1
})


$('.members-slider').slick({
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

$('.feedback-photo-slider').slick({
    arrows: true,
    centerMode: true,
    centerMargin: '60px',
    slidesToShow: 5,
    asNavFor: '.feedback-text-slider'
});

$('.feedback-text-slider').slick({
    fade: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.feedback-photo-slider'
});