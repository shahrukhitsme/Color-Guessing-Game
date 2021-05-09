var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var info = document.getElementById("info");
var count=0;
var pickedIndex;
var maxAttempts=3;

init();
main();
function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			this.textContent === "Easy" ? maxAttempts = 2: maxAttempts = 3;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				info.textContent = "Well Done! You Won!"
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				info.style.background=clickedColor;
				count=0;
			} else {
				//this.style.display = 'none';
				this.style.background = "#232323";
				this.style.visibility = "hidden";
				count++;
				if(count>=maxAttempts)
				{
				messageDisplay.textContent = "You Lost!"
				resetButton.textContent = "Play Again?"
				changeColors("#232323");
				h1.style.background = "red";
				info.style.background="red";
				count=0;
				info.textContent = "Game Over"
				}
				else
				{
				info.textContent = "Try Again"
				messageDisplay.textContent = "Attempts left:"+(maxAttempts-count);
				}
			}
		});
	}
}



function reset(){
	count=0;
	colors = generateRandomColors(numSquares);
	pickedIndex=pickColor();
	pickedColor = colors[pickedIndex];
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	info.textContent="When you guess, you've got to guess it right";
	if(colors.length===6)
	messageDisplay.textContent = "Attempts left:"+(maxAttempts-count);
else
	messageDisplay.textContent = "Attempts left:"+(maxAttempts-count);
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
			squares[i].style.visibility="visible";
		} else {
			squares[i].style.display = "none";
		}
	}
	info.style.background="white";
	h1.style.background = "teal";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		if(i!=pickedIndex)
			squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return random;
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

$("#logOut").click(function() { 
	window.location.replace("login.html");
});