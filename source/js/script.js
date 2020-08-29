var mainNav = document.querySelector('.main-nav');
var mainToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs')
mainNav.classList.remove('main-nav--opened')
mainNav.classList.add('main-nav--closed')
mainToggle.addEventListener('click', function() {
  mainNav.classList.toggle('main-nav--opened')
  mainNav.classList.toggle('main-nav--closed')
});
