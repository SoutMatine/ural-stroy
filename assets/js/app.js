function marginForMain() {
  const headerHeight = $(".header__inner").outerHeight(true);
  const main = $("main");

  main.css("top", headerHeight + 1 + "px");

  // $(document).ready(function () {
  //     marginForMain();
  //
  // });
}

function heroMarginForImg() {
  const heroImgHeight = $(".hero__img").outerHeight(true);
  const underHeroImg = $(".hero__inner").find(".content-btn__max");
  underHeroImg.css("margin-top", heroImgHeight + 16 + "px");
}

function heroHeight() {
  const windowWidth = $(window).width();
  const heroImgHieght = $(".hero__img").outerHeight();
  const heroInner = $(".hero__inner");

  if (windowWidth > 992) {
    // Получаем исходную высоту (не текущую измененную)
    const originalHeight = heroInner.data("original-height");

    if (originalHeight) {
      heroInner.css("height", originalHeight + heroImgHieght + "px");
    } else {
      // Сохраняем исходную высоту при первом запуске
      const initialHeight = heroInner.height();
      heroInner.data("original-height", initialHeight);
      heroInner.css("height", initialHeight + heroImgHieght + "px");
    }
  } else {
    heroInner.css("height", "");
  }
}

function stepsAccordion() {
  const item = $(".steps__card");
  item.on("click", function () {
    item.removeClass("active");
    $(this).addClass("active");
  });
}

function Btns() {
  createButton("Расчитать стоимость", $(".content-btn"));
  createButton("Расчитать стоимость", $(".content-btn__max"), "max");
  createButton(
    "Расчитать стоимость",
    $(".content-btn__max-footer"),
    "max",
    "secondary",
  );
  createButton("Смотреть все проекты", $(".content-btn__huge"), "huge");
}

import { createButton } from "./components.js";
import { burgerMenu } from "../components/header/header.js";
import { dropDown } from "../components/header/header.js";
import { setMobMenuMargin } from "../components/header/header.js";

$(document).ready(function () {
  heroMarginForImg();
  heroHeight();
  burgerMenu();

  stepsAccordion();

  $(document).on("footer:loaded", Btns);

  $(document).on("header:loaded", marginForMain);
  $(document).on("header:loaded", setMobMenuMargin);
  $(document).on("header:loaded", dropDown);

  $(window).on("resize", function () {
    heroMarginForImg();
    heroHeight();

    $(document).on("header:loaded", marginForMain);
    $(document).on("header:loaded", setMobMenuMargin);
  });
});

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
