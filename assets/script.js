const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},	
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");
const dotsContainer = document.getElementById("dots");

let bannerImgElement = document.getElementById("banner-img");
let indiceGlobal = 0;


function createDots(){
	for (let i = 0; i < slides.length; i++){
		const dot = document.createElement("span");
		dot.id = "dot"+i;
		dot.className = "dot";
		dotsContainer.appendChild(dot);
		dot.addEventListener("click", () => behaviorDot(i));
	}

	const dots = document.querySelectorAll(".dot")
	dots[0].classList.add('dot_selected')
}

function updateDots(index) {
	const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected');
        } else {
			dot.classList.remove('dot_selected');
        }
    })
}

function behaviorDot(index){
	let imageName = slides[index].image;
	let imageDescription = slides[index].tagLine;
	bannerImgElement.src="./assets/images/slideshow/"+ imageName;
	document.querySelector('p').innerHTML = imageDescription;
	updateDots(index);
}

function prevSlide(){
	indiceGlobal = (indiceGlobal - 1 +slides.length) % slides.length;
	let imageName = slides[indiceGlobal].image;
	let imageDescription = slides[indiceGlobal].tagLine;
	bannerImgElement.src="./assets/images/slideshow/"+ imageName;
	document.querySelector('p').innerHTML = imageDescription;
	updateDots(indiceGlobal);
}

function nextSlide(){
	indiceGlobal = (indiceGlobal + 1) % slides.length;
	let imageName = slides[indiceGlobal].image;
	let imageDescription = slides[indiceGlobal].tagLine;
	bannerImgElement.src="./assets/images/slideshow/"+ imageName;
	document.querySelector('p').innerHTML = imageDescription;
	updateDots(indiceGlobal);
}

function listenToSwipeAction(){
	arrowLeft.addEventListener("click", function(){
	prevSlide();
	})
	arrowRight.addEventListener("click", function(){
	nextSlide();
	})
}

listenToSwipeAction() 

createDots()





