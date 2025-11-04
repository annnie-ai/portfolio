particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: ["#ff006e", "#00ffcc", "#ffd60a"] },
    shape: { type: ["circle", "triangle"] },
    opacity: { value: 0.8, random: true },
    size: { value: 4, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } }
  }
});