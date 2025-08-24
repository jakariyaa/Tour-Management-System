// public/js/animations.js

document.addEventListener("DOMContentLoaded", () => {
  // General page fade-in animation
  anime({
    targets: ".content-wrapper",
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 400,
    easing: "easeOutQuad",
  });

  // Animate cards on load
  anime({
    targets: ".animated-card",
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(50, { start: 100 }),
    easing: "easeOutExpo",
  });

  // Animate dashboard items on load
  anime({
    targets: ".dashboard-stat",
    scale: [0.8, 1],
    opacity: [0, 1],
    delay: anime.stagger(75, { start: 150 }),
    easing: "easeOutElastic(1, .8)",
  });

  // Button hover effect
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      anime({
        targets: button,
        scale: 1.05,
        duration: 200,
        easing: "easeOutQuad",
      });
    });
    button.addEventListener("mouseleave", () => {
      anime({
        targets: button,
        scale: 1,
        duration: 200,
        easing: "easeInQuad",
      });
    });
  });
});
