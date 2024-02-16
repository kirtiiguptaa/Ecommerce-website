/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");
/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== IMAGE GALLERY ===============*/
function imgGallery () {
  const mainImg = document.querySelector(".details_img"),
  smallImg = document.querySelectorAll(".details_small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function() {
      mainImg.src = this.src;
    })
  })
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories_container", {
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1349: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
    },
  });
/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new_container", {
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1349: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
  },
});
/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
tabContents = document.querySelectorAll("[content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);
      tabContents.forEach((tabcontent) => {
        tabcontent.classList.remove("active-tab");
      });

      target.classList.add("active-tab");

      tabs.forEach((tab) => {
        tab.classList.remove("active-tab");
      });

      tab.classList.add("active-tab");
    })
  })