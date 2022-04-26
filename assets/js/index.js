const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "38px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
  .reveal
  `,
  { interval: 100 }
);
