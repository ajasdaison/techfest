import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

document.addEventListener("DOMContentLoaded", () => {
  const fullText = document.getElementById("typewriter-text").dataset.fulltext;

  gsap.registerPlugin(TextPlugin);

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to("#header-reveal", {
    opacity: 1,
    y: 0,
    duration: 0.8,
  })
    .to(
      "#card-reveal",
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
      },
      "-=0.4",
    )
    .to("#typewriter-text", {
      duration: 1.5,
      text: { value: fullText, delimiter: "" },
      ease: "none",
    })
    .to("#tag-reveal, #footer-reveal", {
      opacity: 0.6,
      duration: 0.5,
      stagger: 0.2,
    });
});
