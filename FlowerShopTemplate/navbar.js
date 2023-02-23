const navbarToggle = navbar-css.querySelector('#navbar-toggle-css')
const navbarMenu = document.querySelector('#navbar-menu-css')
const navbarLinksContainer = navbarMenu.querySelector('.navbar-links-css')
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true'

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded)
}

navbarToggle.addEventListener('click', toggleNavbarVisibility)

navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation())
navbarMenu.addEventListener('click', toggleNavbarVisibility)