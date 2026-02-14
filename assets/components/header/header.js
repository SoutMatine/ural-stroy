export function setMobMenuMargin() {
    function checkScreenSize() {
        const heightHeader = $(".header__inner").outerHeight(true);
        const menu = $(".menu-shell")
        const windowWidth = $(window).width()

        if (menu.length === 0) return

        if (windowWidth < 992) {
            menu.css("top", heightHeader + 0.5 + 'px');
        } else {
            menu.css("top", 0);
        }
    }
    checkScreenSize()
    $(document).on("click", ".burger-menu", checkScreenSize);
}


export function dropDown() {
    const dropDownToggles = $('.dropdown-toggle')
    const dropDownMenu = $('.header__dropdown')

    dropDownToggles.off('click mouseenter mouseleave');
    dropDownMenu.off('mouseleave');

    dropDownToggles.click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (dropDownMenu.hasClass('is-open')) {
            dropDownMenu.removeClass('is-open');
        } else {
            dropDownMenu.addClass('is-open');
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.dropdown-toggle, .header__dropdown').length) {
            $('.header__dropdown').removeClass('is-open');
        }
    });
}

export function burgerMenu() {
    $(document).on("click", ".burger-menu", () => {
        $(".menu-shell").toggleClass("is-open");
        $(".menu-shell--bg").toggleClass("is-open");
        $('body').toggleClass("no-scroll")
    });
}


