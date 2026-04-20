window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  }
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!navigation.contains(e.target) && !menuBtn.contains(e.target)) {
    navigation.classList.remove("active");
  }
});

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalcloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
  if (serviceModals[modalClick]) {
    serviceModals[modalClick].classList.add("active");
  }
};

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalcloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    serviceModals.forEach((modalview) => {
      modalview.classList.remove("active");
    });
  });
});

const scrollTopBtn = document.querySelector(".scrollTotop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});