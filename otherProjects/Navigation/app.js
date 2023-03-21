import {
  CSSPlugin,
  Power2,
  TimelineMax,
} from "https://cdn.skypack.dev/gsap@3.6.1";
const burger = document.querySelector(".burger-button");
const mobileNav = document.querySelector(".mobile-nav");
const links = document.querySelectorAll("li");

const toggle = () => {
  burger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
};

toggle();
const tl = new TimelineMax();
tl.fromTo(
  ".nav",
  1,
  { y: -70, opacity: 0 },
  { y: 0, opacity: 1, ease: Power2.ease }
);
