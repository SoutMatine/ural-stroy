function marginForMain() {
  const headerHeight = $(".header__inner").outerHeight(true);
  const main = $("main");

  main.css("margin-top", headerHeight + 1 + "px");

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
    const originalHeight = heroInner.data("original-height");

    if (originalHeight) {
      heroInner.css("height", originalHeight + heroImgHieght + "px");
    } else {
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

function projecstLineHeight() {
  const line = $(".project__item-line")
  const imgHeight = $(".project__item-img").outerHeight()

  line.css("height", imgHeight + "px")
}


function Btns() {
  createButton("Расчитать стоимость", $(".content-btn"));
  createButton("Расчитать стоимость", $(".content-btn__max"), "max");
  createButton("Расчитать стоимость", $(".content-btn__max-footer"), "max", "secondary",);
  createButton("Смотреть все проекты", $(".content-btn__huge"), "huge");
  createButton("Получить консультацию", $(".content-btn__max-project"), "max")
  createButton("Смотреть все статьи", $(".content-btn__huge-news"), "huge")
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
  projecstLineHeight();

  $(document).on("footer:loaded", Btns);
  $(document).on("header:loaded", marginForMain);
  $(document).on("header:loaded", setMobMenuMargin);
  $(document).on("header:loaded", dropDown);

  $(window).on("resize", function () {
    heroMarginForImg();
    heroHeight();
    projecstLineHeight();

    $(document).on("header:loaded", marginForMain);
    $(document).on("header:loaded", setMobMenuMargin);
  });
});
