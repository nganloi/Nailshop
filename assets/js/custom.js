/*==========

Theme Name: Bcare - Beauty Care and Cosmetic Products Store Responsive HTML5 Template
Theme Version: 1.0

==========*/

/*==========
----- JS INDEX -----
1.wow animation JS
2.Portfolio Tabbing JS
3.Product Slider JS
4.Team Slider JS
5.Price Slider JS
6.Review Slider JS
8.Gallery Slider JS
9.Related Products Slider JS
10.Product Accordian JS
11.Sub Menu Mobile JS
12.Toggle Menu  JS
13.scroll to top JS
==========*/


$(document).ready(function($) {
  // wow animation
      new WOW().init();

// Portfolio Tabbing JS Start
$(function () {
  var filterList = {
    init: function () {
      $("#portfoliolist").mixItUp({
        selectors: {
          target: ".portfolio",
          filter: ".filter",
        },
        load: {
          filter: ".all, .Make-up, .Hairstyle, .Nail-art, .massage",
        },
      });
    },
  };
  
  filterList.init();
});
// Product Slider
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",

  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
// Team Slider
const tswiper = new Swiper(".team-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// Price Slider
const pswiper = new Swiper(".product-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// Review Slider
const rswiper = new Swiper(".review-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  speed: 1200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// Gallery Slider
const reswiper = new Swiper(".gallery-swiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 1200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});
// Related Products Slider
const greswiper = new Swiper(".related-swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 1200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// Product Accordian

let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#0084e9";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = 0;
        toggles[j].style.color = "#111130";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }
  });
}
if ($(window).width() < 992) {
  // Sub Menu Mobile JS 
$('body').on('click', '.main-navigation ul li.sub-items>a', function() {
      if (($(this).parent().hasClass('active-sub-menu'))) {
      $(this).parent().removeClass('active-sub-menu');
      $(this).parent().find('ul').slideUp();
      } else {
          $(this).parent().addClass('active-sub-menu');
          $(this).parent().find('ul').slideDown();
      }
  });
}
// Toogle Menu Mobile JS 
$(".toggle-button").on("click", function () {
  $(".main-navigation").toggleClass("toggled");
  $(".header-menu .black-shadow").fadeToggle();
});
$(".main-navigation ul li a").on("click", function () {
  $(".main-navigation").removeClass("toggled");
  $(".header-menu .black-shadow").fadeOut();
});
$(".main-navigation ul li.sub-items>a").on("click", function () {
  $(".main-navigation").addClass("toggled");
  $(".header-menu .black-shadow").stop();
});
$(".header-menu .black-shadow").on("click", function () {
  $(this).fadeOut();
  $(".main-navigation").removeClass("toggled");
});

 // Scroll To Top JS 
 $('#scrollToTop').on('click', function() {
  $("html, body").animate({ scrollTop: 0 }, 300);
  return false;
});
$(window).on( 'scroll', function() {
if ($(window).scrollTop() > 300) {
$("#scrollToTop").fadeIn(300);
} else {
$("#scrollToTop").fadeOut(300);
}
});
});