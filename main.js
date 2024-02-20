function updateList() {
	const titles = [...document.querySelectorAll('h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h2')].indexOf(titles[0])].classList.add("selected-circle");
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const iconImage = document.querySelector(".hamburger-icon img");

    if (iconImage.getAttribute('src') === "./assets/close-menu.svg") {
        iconImage.setAttribute('src', "./assets/hamburger-menu-2.svg");
        console.log('hello');
    } else {
        iconImage.setAttribute('src',"./assets/close-menu.svg");
        console.log('world');
    }
    menu.classList.toggle("hidden");
}

function menuItemClick() {
    const menu = document.querySelector(".menu-links");
    const iconImage = document.querySelector(".hamburger-icon img");

    menu.classList.add("hidden");
    iconImage.setAttribute('src',"./assets/hamburger-menu-2.svg");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})