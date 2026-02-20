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



$(document).ready(function () {

  function setCardHeights() {
    $('.steps__card').each(function () {
      var $card = $(this);

      if ($card.hasClass('active')) {
        var originalHeight = $card[0].scrollHeight;
        $card.data('original-height', originalHeight);
      }
    });
  }

  function openCard($card) {
    $card.css('height', 'auto');
    var fullHeight = $card[0].scrollHeight;

    $card.css('height', '98px');

    setTimeout(function () {
      $card.css('height', fullHeight + 'px');
      $card.addClass('active');
    }, 10);
  }

  function closeCard($card) {
    $card.css('height', '98px');
    $card.removeClass('active');
  }

  $(document).on('transitionend', '.steps__card', function (e) {
    var $card = $(this);

    if (e.target === this) {
      if ($card.hasClass('active')) {
        $card.css('height', 'auto');
      } else {
        $card.css('height', '98px');
      }
    }
  });

  $('.steps__card').on('click', function () {
    var $currentCard = $(this);
    var isActive = $currentCard.hasClass('active');

    $('.steps__card.active').not($currentCard).each(function () {
      closeCard($(this));
    });

    if (!isActive) {
      openCard($currentCard);
    } else {
      closeCard($currentCard);
    }
  });

  setCardHeights();

});


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



const animated = document.querySelectorAll(".animate")

const rows = {}

animated.forEach((animate) => {
  const rowPosition = Math.round(animate.offsetTop / 10)
  if (!rows[rowPosition]) {
    rows[rowPosition] = []
  }
  rows[rowPosition].push(animate)
})

Object.values(rows).forEach(row => {
  row.sort((a, b) => a.offsetLeft - b.offsetLeft)

  row.forEach((animate, indexInRow) => {
    const animation = animate.classList[1]
    animate.classList.remove(animation)
    let activated = false

    let delay = indexInRow * 100 // Было 200, стало 100

    const isFirstRow = animate.offsetTop < window.innerHeight
    if (isFirstRow) {
      delay = indexInRow * 50 // Всего 0, 50, 100ms для первого ряда
    }

    function checkVisibility() {
      const triggerPoint = animate.offsetTop - window.innerHeight + 50 // Появляется почти сразу

      if (!activated && pageYOffset > triggerPoint) {
        setTimeout(() => {
          animate.classList.add(animation)
        }, delay)
        activated = true
      }
    }

    // Проверяем сразу при загрузке
    if (document.readyState === 'complete') {
      checkVisibility()
    } else {
      window.addEventListener("load", checkVisibility)
    }
    window.addEventListener("scroll", checkVisibility)
  })
})