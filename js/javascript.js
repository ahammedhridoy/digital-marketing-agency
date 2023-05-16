// header scrolled
let nav = document.querySelector(".navbar");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// carousel

$(document).ready(function () {
  $(".client-slider-section").owlCarousel({
    loop: true,
    items: 4,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
// navbar
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
