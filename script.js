let menu = document.querySelector('nav .menu_mobile')
let menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', function (e) {
	e.preventDefault()

	menu.classList.toggle('show-menu')
	menuToggle.classList.toggle('active')
})

window.addEventListener('resize', function () {
	if (window.innerWidth > 375 && menu.classList.contains('show-menu')) {
		menu.classList.remove('show-menu')
		menuToggle.classList.remove('active')
	}
})
