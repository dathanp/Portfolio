let scrollPosition = 0;
let ticking = false; 

function updateParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');
  const parallaxPlusXElements = document.querySelectorAll('.parallaxPlusX');
  const parallaxMinusXElements = document.querySelectorAll('.parallaxMinusX');

  parallaxElements.forEach((pic, index) => {
    let speed = index % 2 === 0 ? 0.3 : 0.15; 
    pic.style.transform = `translate3d(0, ${scrollPosition * speed}px, 0)`;
  });

  parallaxPlusXElements.forEach((pic, index) => {
    let speed = index % 2 === 0 ? 0.4 : 0.2;
    pic.style.transform = `translate3d(${scrollPosition * speed}px, 0, 0)`;
  });

  parallaxMinusXElements.forEach((pic, index) => {
    let speed = index === 0 ? 0.5 : (index === 1 ? 0.25 : 0.15);
    pic.style.transform = `translate3d(${-scrollPosition * speed}px, 0, 0)`;
  });

  ticking = false;
}

window.addEventListener('scroll', () => {
  scrollPosition = window.scrollY;

  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const viewMoreButton = card.querySelector('.view-more-button');
  const flipBackButton = card.querySelector('.flip-back-button');

  viewMoreButton.addEventListener('click', () => {
    card.classList.add('flipped');
  });

  flipBackButton.addEventListener('click', () => {
    card.classList.remove('flipped');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
  });
});
