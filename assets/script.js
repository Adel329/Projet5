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
const dotsContainer = document.getElementById("dots")

console.log(arrowLeft)
console.log(arrowRight)
console.log(dots)


let bannerImgElement = document.getElementById("banner-img")

let indiceGlobal = 0

function listenToSwipeAction(){
	arrowLeft.addEventListener("click", function(){
	console.log("click left")
	})
	arrowRight.addEventListener("click", function(){
	console.log("click right")
	})

}

listenToSwipeAction() 
	arrowRight.addEventListener("click", () => {
		bannerImgElement.setAttribute("src", "./assets/images/slideshow/slide2.jpg")
	})	
	arrowLeft.addEventListener("click", () => {
		slides[i]
		++i
	})
	// dots.addEventListener("click", () => {
	// 	dots[i]
	// 	++i
	// })

function createDots(){
	for (let i = 0; i < slides.length; i++){
		const dot = document.createElement("span");
		dot.id = "dot"+i
		dot.className = "dot";
		dotsContainer.appendChild(dot);
		dot.addEventListener("click", () => behaviorDot(i))
	}
	
}

createDots()

function behaviorDot(index){
	let imageName = slides[index].image
	bannerImgElement.src="./assets/images/slideshow/"+ imageName
console.log(slides[index].image)
}

	






