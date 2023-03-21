import { CSSPlugin, Power2, TimelineMax } from "./gsap-public/esm/all.js";

const tl = new TimelineMax();
tl.fromTo(
  ".content, .title",
  1.5,
  { y: -70, opacity: 0 },
  { y: 0, opacity: 1, ease: Power2.ease }
);

tl.fromTo(
  ".box, .navbar",
  1.5,
  { y: -70, opacity: 0 },
  { y: 0, opacity: 0.6, ease: Power2.ease },
  "-=1.5"
);
