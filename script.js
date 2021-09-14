var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random=document.getElementById("random");

function setGradient() {

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
setGradient();

function setRandomColor(){
color1 = "rgb("+(Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + ")";
color2 = "rgb("+(Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + "," + (Math.floor(Math.random() * 255)) + ")";
body.style.background = "linear-gradient(to right, " 
	+ color1
	+ "," 
	+ color2 
	+ ")";
  
css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomColor);