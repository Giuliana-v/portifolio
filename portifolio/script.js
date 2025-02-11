particlesJS("particles-js", {
    particles: {
      number: {
        value: 33,
        density: {
          enable: true,
          value_area: 1420,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "triangle",
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.063,
        anim: {
          enable: false,
        },
      },
      size: {
        value: 12,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
    },
    retina_detect: true,
  });
  