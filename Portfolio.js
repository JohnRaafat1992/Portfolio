// check if there is local storage color option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

	document.documentElement.style.setProperty('--main--color',mainColors);

// remove active class from all children 
document.querySelectorAll(".colors-list li").forEach(Element => {

Element.classList.remove("active");

// add active class on element with data-color === local storage item
if(Element.dataset.color === mainColors) {

	// add active class 
	Element.classList.add("active");
}

});

}

// random background option
let backgroundOption = true;

// variable to control the interval 
let backgroundIterval;

// check if there is item in random background local storage 
let backgroundLocalItem = localStorage.getItem("background_option");

// check if random background is not empty
if(backgroundLocalItem !== null) {

	if(backgroundLocalItem === 'true') {

		backgroundOption = true ;


	} else {
		backgroundOption = false ;

		
	}

// remove active class from all spans 
document.querySelectorAll(".random-backgrounds span").forEach(Element => {

	Element.classList.remove("active");

});
}

// toggle span class on icon
document.querySelector(".toggle-setting .fa-cog").onclick =function () {
	// toggle class new class for rotation the icon 
	this.classList.toggle("fa-spin");
	// toggle class open on main setting box
	document.querySelector(".setting-box").classList.toggle("open");
};

// switch colors 
const colorsLi = document.querySelectorAll(".colors-list li");

// loop on all list items 
colorsLi.forEach(li => {

// click on every list items
li.addEventListener("click", (e) => {


// set color on root
document.documentElement.style.setProperty('--main--color', e.target.dataset.color);

// set color on local storage
localStorage.setItem("color_option", e.target.dataset.color);

handelActive(e);

});

});

// switch random background option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// loop on all spans
randomBackEl.forEach(span => {

// click on every span
span.addEventListener("click", (e) => {

handelActive(e);

if (e.target.dataset.background === 'no') {

	backgroundOption = true;
	randomizeImas(); 
	localStorage.setItem("background_option", true);

} else {

	backgroundOption = false;

	clearInterval(backgroundIterval);

	localStorage.setItem("background_option", false);

}

});

});


// select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

const allLinks = document.querySelectorAll(".links  li a");

function scrollToSection(elements) {
	elements.forEach(ele => {

	ele.addEventListener("click", (e) => {

		e.preventDefault();

		document.querySelector(e.target.dataset.section).scrollIntoView({

			behavior: 'smooth'

	});
	});
});
}

scrollToSection(allBullets);
scrollToSection(allLinks);

function handelActive(ev) {

	// remove active class from all children 
ev.target.parentElement.querySelectorAll(".active").forEach(element => {

	element.classList.remove("active");
});

// add active class on self 
ev.target.classList.add("active");
}


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

	bulletsSpan.forEach(span => {

	span.classList.remove("active");

	});

	if (bulletLocalItem === 'block') {

		bulletsContainer.style.display = 'block';

		document.querySelector(".bullets-option .yes").classList.add("active");

	} else {

	bulletsContainer.style.display = 'none';	
	
	document.querySelector(".bullets-option .no").classList.add("active");

	}
}

bulletsSpan.forEach(span => {

	span.addEventListener("click", (e) => {

		if (span.dataset.display === 'show') {

			bulletsContainer.style.display = 'block';

			localStorage.setItem("bullets_option", 'block');
		} else {

		bulletsContainer.style.display = 'none';
		
		localStorage.setItem("bullets_option", 'none');
		}

		handelActive(e);
	});
});

// reset button 
document.querySelector(".reset-options").onclick = function () {

	localStorage.removeItem("color_option");
	localStorage.removeItem("background_option");
	localStorage.removeItem("bullets_option");

	window.location.reload();
};

// toggle menu 1 
let toggleBtn = document.getElementById('toggle-menu');
let tLinks = document.getElementById('links');

toggleBtn.onclick = function (e) {

	// stop propagation
	e.stopPropagation();

	// toggle class menu active to button
	this.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks.classList.toggle("open");
};
// toggle menu 2 
let toggleBtn2 = document.getElementById('toggle-menu2');
let tLinks2 = document.getElementById('links2');

toggleBtn2.onclick = function (e) {

	// stop propagation
	e.stopPropagation();

	// toggle class menu active to button
	this.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks2.classList.toggle("open");
};
// toggle menu 3 
let toggleBtn3 = document.getElementById('toggle-menu3');
let tLinks3 = document.getElementById('links3');

toggleBtn3.onclick = function (e) {

	// stop propagation
	e.stopPropagation();

	// toggle class menu active to button
	this.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks3.classList.toggle("open");
};
// toggle menu 4 
let toggleBtn4 = document.getElementById('toggle-menu4');
let tLinks4 = document.getElementById('links4');

toggleBtn4.onclick = function (e) {

	// stop propagation
	e.stopPropagation();

	// toggle class menu active to button
	this.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks4.classList.toggle("open");
};
// toggle menu 5 
let toggleBtn5 = document.getElementById('toggle-menu5');
let tLinks5 = document.getElementById('links5');

toggleBtn5.onclick = function (e) {

	// stop propagation
	e.stopPropagation();

	// toggle class menu active to button
	this.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks5.classList.toggle("open");
};
// click anywhere outside menu and toggle button 1
document.addEventListener("click", (e) => {

	if (e.target !== toggleBtn && e.target !== tLinks)
	 {
		
// check if menu is open 
if (tLinks.classList.contains('open')) {

	// toggle class menu active to button
	toggleBtn.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks.classList.toggle("open");
}
	}
});
// click anywhere outside menu and toggle button 2
document.addEventListener("click", (e) => {

	if (e.target !== toggleBtn2 && e.target !== tLinks2)
	 {
		
// check if menu is open 
if (tLinks2.classList.contains('open')) {

	// toggle class menu active to button
	toggleBtn2.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks2.classList.toggle("open");
}
	}
});
// click anywhere outside menu and toggle button 3
document.addEventListener("click", (e) => {

	if (e.target !== toggleBtn3 && e.target !== tLinks3)
	 {
		
// check if menu is open 
if (tLinks3.classList.contains('open')) {

	// toggle class menu active to button
	toggleBtn3.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks3.classList.toggle("open");
}
	}
});
// click anywhere outside menu and toggle button 4
document.addEventListener("click", (e) => {

	if (e.target !== toggleBtn4 && e.target !== tLinks4)
	 {
		
// check if menu is open 
if (tLinks4.classList.contains('open')) {

	// toggle class menu active to button
	toggleBtn4.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks4.classList.toggle("open");
}
	}
});
// click anywhere outside menu and toggle button 5
document.addEventListener("click", (e) => {

	if (e.target !== toggleBtn5 && e.target !== tLinks5)
	 {
		
// check if menu is open 
if (tLinks5.classList.contains('open')) {

	// toggle class menu active to button
	toggleBtn5.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks5.classList.toggle("open");
}
	}
});
function addActive() {
	document.getElementById("landing").style.display = "block";
	document.getElementById("about").style.display = "none";
	document.getElementById("projects").style.display = "none";
	document.getElementById("skills").style.display = "none";
	document.getElementById("contact").style.display = "none";
	// toggle class open on links 
	tLinks.classList.remove("open");
}
function addActive2() {
	document.getElementById("landing").style.display = "none";
	document.getElementById("about").style.display = "block";
	document.getElementById("projects").style.display = "none";
	document.getElementById("skills").style.display = "none";
	document.getElementById("contact").style.display = "none";
	// toggle class open on links 
	tLinks2.classList.remove("open");
}
function addActive3() {
	document.getElementById("projects").style.display = "block";
	document.getElementById("landing").style.display = "none";
	document.getElementById("about").style.display = "none";
	document.getElementById("skills").style.display = "none";
	document.getElementById("contact").style.display = "none";
	// toggle class open on links 
	tLinks3.classList.remove("open");

}
function addActive4() {
	document.getElementById("skills").style.display = "block";
	document.getElementById("landing").style.display = "none";
	document.getElementById("about").style.display = "none";
	document.getElementById("projects").style.display = "none";
	document.getElementById("contact").style.display = "none";
	// toggle class open on links 
	tLinks3.classList.remove("open");

}
function addActive5() {
	document.getElementById("contact").style.display = "block";
	document.getElementById("landing").style.display = "none";
	document.getElementById("about").style.display = "none";
	document.getElementById("projects").style.display = "none";
	document.getElementById("skills").style.display = "none";
	// toggle class open on links 
	tLinks3.classList.remove("open");

}

