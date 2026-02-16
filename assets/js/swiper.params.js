
$(document).ready(function () {
    const swiperEl = $(".blog-swiper");
    const $customCurrent = $(".pagination-current");
    const $customTotal = $(".pagination-total");

    function updateCustomPagination() {
        const swiper = swiperEl[0].swiper;
        if (swiper && $customCurrent.length && $customTotal.length) {
            const currentGroup = Math.floor(swiper.realIndex / 3) + 1;
            const totalGroups = Math.ceil(swiper.slides.length / 3);

            $customCurrent.text(currentGroup);
            $customTotal.text(totalGroups);
        }
    }

    const params = {
        slidesPerView: 3,
        slidesPerGroup: 3,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        }
    };

    Object.assign(swiperEl[0], params);
    swiperEl[0].initialize();

    const swiper = swiperEl[0].swiper;

    updateCustomPagination();

    swiper.on('slideChange', function () {
        updateCustomPagination();
    });
});
