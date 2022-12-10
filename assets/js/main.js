const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})

const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50
    ? header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

const scrollUp = () => {
  const scrollUp = document.getElementById('scrollup')
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add('scrollup-active')
    : scrollUp.classList.remove('scrollup-active')
}
window.addEventListener('scroll', scrollUp)

let rellax = new Rellax('.parallax')
