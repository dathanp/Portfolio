
// adjust scroll function
window.addEventListener('scroll', function() {
  let parallaxImages = this.document.querySelectorAll('.parallax');
  let parallaxImagesPlusX = this.document.querySelectorAll('.parallaxPlusX');
  let parallaxImagesMinusX = this.document.querySelectorAll('.parallaxMinusX');
  let scrollPosition = window.scrollY;
  // speed of scroll
  parallaxImages.forEach(function(pic, index) {
    let speed = index % 2 === 0 ? 0.5 : 0.2;
    pic.style.transform = 'translateY(' + (scrollPosition * speed) + 'px)';
  });

  parallaxImagesPlusX.forEach(function(pic, index) {
    let speed = index % 2 === 0 ? 0.5 : 0.2;
    pic.style.transform = 'translateX(' + (scrollPosition * speed) + 'px)';
  });

  parallaxImagesMinusX.forEach(function(pic, index) {
    let speed;
     if(index === 0) {
        speed = 0.7;
     } else if(index === 1) {
      speed = 0.3;
     } else {
      speed = 0.2;
     }
    pic.style.transform = 'translateX(' + (-scrollPosition * speed) + 'px)';
  });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const viewMoreButton = card.querySelector('.view-more-button');
  const flipBackButton = card.querySelector('.flip-back-button');
  /* code to flip card pressing anywhere on it
  const frontContent = card.querySelector('.front-content');
  const backContent = card.querySelector('.back-content');
  */
  viewMoreButton.addEventListener('click', () => {
  if (!card.classList.contains('flipped')) {
  card.classList.add('flipped');
  }
  });
  
  flipBackButton.addEventListener('click', () => {
  if (card.classList.contains('flipped')) {
  card.classList.remove('flipped');
  }
  });
/* event listener to flip back card around clicking anywhere on the card
  backContent.addEventListener('click', () => {
  if (card.classList.contains('flipped')) {
  card.classList.remove('flipped');
  }
  });
*/
  
/* event listener to flip front card around clicking anywhere on the card
  frontContent.addEventListener('click', () => {
  if (!card.classList.contains('flipped')) {
  card.classList.add('flipped');
  }
  });
*/
  viewMoreButton.addEventListener('mouseover', () => {
  viewMoreButton.style.transform = 'scale(1.1)';
  });
  
  viewMoreButton.addEventListener('mouseout', () => {
  viewMoreButton.style.transform = 'scale(1)';
  });
  });
  