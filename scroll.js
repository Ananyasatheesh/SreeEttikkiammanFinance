ScrollReveal({
  reset: true,
  duration: 2500,
  distance: "60px",
  delay: 200,
});

ScrollReveal().reveal(".title", { delay: 100, origin: "bottom" });
ScrollReveal().reveal(".navbar, .pic, .contact", { delay: 100, origin: "top" });
ScrollReveal().reveal(".left-about", { delay: 100, origin: "left" });
ScrollReveal().reveal(".right-about", { delay: 100, origin: "right" });
ScrollReveal().reveal(".abt, .gall, .services, .cont1", { delay: 500, origin: "left" });
ScrollReveal().reveal(".cards i, .serv-p", {
  delay: 400,
  origin: "top",
  interval: 300,
});
