

let text = document.getElementById('text');
let leaves = document.getElementById('leaves');
let bridge = document.getElementById('bridge');
let bird = document.getElementById('bird');
let cloud = document.getElementById('cloud');
let sun = document.getElementById('sun');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * -1 + 'px';
    leaves.style.left = value * -1.5 + 'px';
    bird.style.left = value * -.5 + 'px';
    cloud.style.left = value * 2.5 + 'px';
    sun.style.marginTop = value * -.5 + 'px';
    sun.style.left = value * .8 + 'px';
})

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
  