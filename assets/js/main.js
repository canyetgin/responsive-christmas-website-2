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

gsap.from('.home-village', 1.2, { opacitiy: 0, y: 100, delay: 0.1 })
gsap.from('.home-pine', 1.2, { opacitiy: 0, y: 150, delay: 0.3 })
gsap.from('.home-mountain-2', 1.2, { opacitiy: 0, x: 150, delay: 0.5 })
gsap.from('.home-mountain-3', 1.2, { opacitiy: 0, x: -150, delay: 0.6 })
gsap.from('.home-mountain-1', 1.2, { opacitiy: 0, y: 250, delay: 0.7 })

let rellax = new Rellax('.parallax')

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 400,
})

sr.reveal('.about-data, .celebrate-img' , { origin: 'right' })
sr.reveal('.about-img, .celebrate-data', { origin: 'left' })
sr.reveal('.send-card', { interval: 100 })
