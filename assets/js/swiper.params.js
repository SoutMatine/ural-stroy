
$(document).ready(function () {
    const swiperEl = $(".blog-swiper");
    const $customCurrent = $(".pagination-current");
    const $customTotal = $(".pagination-total");

    function updateCustomPagination() {
        const swiper = swiperEl[0].swiper;
        if (swiper && $customCurrent.length && $customTotal.length) {
            // Получаем текущие параметры слайдера
            const slidesPerGroup = swiper.params.slidesPerGroup;
            const totalSlides = swiper.slides.length;

            const currentGroup = Math.floor(swiper.realIndex / slidesPerGroup) + 1;
            const totalGroups = Math.ceil(totalSlides / slidesPerGroup);

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
        },

        breakpoints: {
            320: {
                slidesPerView: 1.1,
                slidesPerGroup: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 15
            }
        },
        on: {
            breakpoint: function () {
                setTimeout(updateCustomPagination, 0);
            }
        }

    };

    if (swiperEl.length > 0) {

        Object.assign(swiperEl[0], params);
        swiperEl[0].initialize();

        const swiper = swiperEl[0].swiper;

        updateCustomPagination();

        swiper.on('slideChange', function () {
            updateCustomPagination();
        });
    }
});


$(document).ready(function () {
    const swiperEl = $(".individual-project");
    const $customCurrent = $(".pagination-current");
    const $customTotal = $(".pagination-total");

    function updateCustomPagination() {
        const swiper = swiperEl[0].swiper;
        if (swiper && $customCurrent.length && $customTotal.length) {
            let slidesPerGroup = 2;

            if (window.innerWidth < 768) {
                slidesPerGroup = 1;
            } else {
                slidesPerGroup = 2;
            }

            const currentGroup = Math.floor(swiper.realIndex / slidesPerGroup) + 1;

            let totalGroups = Math.ceil(swiper.slides.length / slidesPerGroup);

            if (currentGroup > totalGroups) {
                totalGroups = currentGroup;
            }

            $customCurrent.text(currentGroup);
            $customTotal.text(totalGroups);
        }
    }

    const params = {
        slidesPerView: 2.5,
        slidesPerGroup: 2,
        spaceBetween: 20,
        loop: true,
        loopedSlides: 4,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                slidesPerGroup: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 15,
                loopedSlides: 4
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
                loopedSlides: 4
            }
        },
        on: {
            breakpoint: function () {
                setTimeout(updateCustomPagination, 0);
            }
        }
    };

    if (swiperEl.length > 0) {
        Object.assign(swiperEl[0], params);
        swiperEl[0].initialize();

        const swiper = swiperEl[0].swiper;

        updateCustomPagination();

        swiper.on('slideChange', function () {
            updateCustomPagination();
        });

        // Дополнительно: обновление при изменении размера окна
        window.addEventListener('resize', function () {
            updateCustomPagination();
        });
    }

});

