// Custom Scripts
// Navbar
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menu__quote = document.querySelector(".menu__quote");
const body = document.querySelector("*");
const containerNav = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");


const home = document.querySelector("#home__link");
const about = document.querySelector("#about__link");
const service = document.querySelector("#service__link");
const page = document.querySelector("#page__link");
const contact = document.querySelector("#contact__link");
const contactBtn = document.querySelector("#contact__link-btn");

home.addEventListener("click", () => {
  menu.classList.remove("active");
  menu__quote.classList.remove("active-quote");
  burger.classList.remove("active-burger");
  body.classList.remove("locked");
  containerNav.classList.remove("lockedHead");
  main.classList.remove("lockedMain");
  footer.classList.remove("lockedMain");
});
about.addEventListener("click", () => {
  menu.classList.remove("active");
  menu__quote.classList.remove("active-quote");
  burger.classList.remove("active-burger");
  body.classList.remove("locked");
  containerNav.classList.remove("lockedHead");
  main.classList.remove("lockedMain");
  footer.classList.remove("lockedMain");
});
service.addEventListener("click", () => {
  menu.classList.remove("active");
  menu__quote.classList.remove("active-quote");
  burger.classList.remove("active-burger");
  body.classList.remove("locked");
  containerNav.classList.remove("lockedHead");
  main.classList.remove("lockedMain");
  footer.classList.remove("lockedMain");
});
page.addEventListener("click", () => {
  menu.classList.remove("active");
  menu__quote.classList.remove("active-quote");
  burger.classList.remove("active-burger");
  body.classList.remove("locked");
  containerNav.classList.remove("lockedHead");
  main.classList.remove("lockedMain");
  footer.classList.remove("lockedMain");
});
contact.addEventListener("click", () => {
  menu.classList.remove("active");
  menu__quote.classList.remove("active-quote");
  burger.classList.remove("active-burger");
  body.classList.remove("locked");
  containerNav.classList.remove("lockedHead");
  main.classList.remove("lockedMain");
  footer.classList.remove("lockedMain");
});
contactBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  menu__quote.classList.remove("active-quote");
  burger.classList.remove("active-burger");
  body.classList.remove("locked");
  containerNav.classList.remove("lockedHead");
  main.classList.remove("lockedMain");
  footer.classList.remove("lockedMain");
});
function burgerMenu() {
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      menu__quote.classList.add("active-quote");
      burger.classList.add("active-burger");
      body.classList.add("locked");
      containerNav.classList.add("lockedHead");
      main.classList.add("lockedMain");
      footer.classList.add("lockedMain");
    } else {
      menu.classList.remove("active");
      menu__quote.classList.remove("active-quote");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
      containerNav.classList.remove("lockedHead");
      main.classList.remove("lockedMain");
      footer.classList.remove("lockedMain");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      menu__quote.classList.remove("active-quote");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
      containerNav.classList.remove("lockedHead");
      main.classList.remove("lockedMain");
      footer.classList.remove("lockedMain");
    }
  });
}
burgerMenu();

// activeLink
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

window.addEventListener("scroll", function () {
  if (window.innerWidth > 991.98 && window.scrollY < 600) {
    home__link.classList.add("active");
    about__link.classList.remove("active");
    service__link.classList.remove("active");
    page__link.classList.remove("active");
    contact__link.classList.remove("active");
  } else if (window.innerWidth > 991.98 && window.scrollY < 1800) {
    home__link.classList.remove("active");
    about__link.classList.add("active");
    service__link.classList.remove("active");
    page__link.classList.remove("active");
    contact__link.classList.remove("active");
  } else if (window.innerWidth > 991.98 && window.scrollY < 4800) {
    home__link.classList.remove("active");
    about__link.classList.remove("active");
    service__link.classList.add("active");
    page__link.classList.remove("active");
    contact__link.classList.remove("active");
  } else if (window.innerWidth > 991.98 && window.scrollY < 7600) {
    home__link.classList.remove("active");
    about__link.classList.remove("active");
    service__link.classList.remove("active");
    page__link.classList.add("active");
    contact__link.classList.remove("active");
  } else if (window.innerWidth > 991.98) {
    home__link.classList.remove("active");
    about__link.classList.remove("active");
    service__link.classList.remove("active");
    page__link.classList.remove("active");
    contact__link.classList.add("active");
  } else{
    if (window.innerWidth < 991.98 && window.scrollY < 500) {
      home__link.classList.add("active");
      about__link.classList.remove("active");
      service__link.classList.remove("active");
      page__link.classList.remove("active");
      contact__link.classList.remove("active");
    } else if (window.innerWidth < 991.98 && window.scrollY < 2000) {
      home__link.classList.remove("active");
      about__link.classList.add("active");
      service__link.classList.remove("active");
      page__link.classList.remove("active");
      contact__link.classList.remove("active");
    } else if (window.innerWidth < 991.98 && window.scrollY < 5400) {
      home__link.classList.remove("active");
      about__link.classList.remove("active");
      service__link.classList.add("active");
      page__link.classList.remove("active");
      contact__link.classList.remove("active");
    } else if (window.innerWidth < 991.98 && window.scrollY < 9600) {
      home__link.classList.remove("active");
      about__link.classList.remove("active");
      service__link.classList.remove("active");
      page__link.classList.add("active");
      contact__link.classList.remove("active");
    } else {
      home__link.classList.remove("active");
      about__link.classList.remove("active");
      service__link.classList.remove("active");
      page__link.classList.remove("active");
      contact__link.classList.add("active");
    }
  }
});

// Scroll-Header
// let lastScroll = 0;
// const defaultOffset = 90;
// const nav = document.querySelector("nav");

// const scrollPosition = () =>
//   window.pageYOffset || document.documentElement.scrollTop;
// const containHide = () => nav.classList.contains("hide");

// window.addEventListener("scroll", () => {
//   //scroll down
//   if (scrollPosition() > lastScroll && !containHide()) {
//     nav.classList.add("hide");
//   }

//   //scroll up
//   else if (scrollPosition() < lastScroll && containHide()) {
//     nav.classList.remove("hide");
//   }

//   lastScroll = scrollPosition();
// });

