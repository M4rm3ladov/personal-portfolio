function updateList() {
	const titles = [...document.querySelectorAll('h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h2')].indexOf(titles[0])].classList.add("selected-circle");
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    let iconImage = document.querySelector(".hamburger-icon img");

    if (iconImage.getAttribute('src') === "./assets/close-menu.svg") {
        iconImage.setAttribute('src', "./assets/hamburger-menu-2.svg");
        console.log('hello');
    } else {
        iconImage.setAttribute('src',"./assets/close-menu.svg");
        console.log('world');
    }
    menu.classList.toggle("hidden");
    console.log(menu.classList);
    // icon.classList.toggle("open");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})