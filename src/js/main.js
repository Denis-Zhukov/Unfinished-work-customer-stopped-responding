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
    asNavFor: '.feedback-text-slider',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        }
    ]
});

$('.feedback-text-slider').slick({
    fade: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.feedback-photo-slider'
});


window.addEventListener('resize', () => { resizePhotoSlider; setTimeout(resizePhotoSlider, 250) });
$('.feedback-photo-slider').mouseup(() => { resizePhotoSlider; setTimeout(resizePhotoSlider, 250) });
function resizePhotoSlider() {
    let allPhotos = $('.feedback-photo-slider .slick-active');
    for (let i = 0; i < allPhotos.length; i++) {
        if (i % 2 == 0) {
            allPhotos[i].style.transform = i === 0 ? `scale(0.6) translateX(30%)` : `scale(0.6) translateX(-30%)`;
        } else {
            allPhotos[i].style.transform = `scale(0.8)`;
        }
    }
}

resizePhotoSlider();