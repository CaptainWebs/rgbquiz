var numSquares = 6;
var colors = generateRandomColor(numSquares);

var squareBoxes = document.querySelectorAll(".box");

// calling the function to pick a random color from the array
var pickedColor = pickRandomColor();

var h1Bg = document.querySelector("h1");
var newColorsBtn = document.querySelector("#newcolors");
var messageDisplay = document.querySelector("#message");

// easy and hard button selectors
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){

  // change the background color of h1 to default colors
  h1Bg.style.backgroundColor = "#2980b9";

  // change the text of message area to default text
  messageDisplay.textContent = " ";	

  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");

  numSquares = 3;

  colors = generateRandomColor(numSquares);
  pickedColor = pickRandomColor();
  document.querySelector("#rgbValue").textContent = pickedColor;

  for(var i=0; i < squareBoxes.length; i++){
    
    if(colors[i]){
    	squareBoxes[i].style.backgroundColor = colors[i];
    }
    else{
    	squareBoxes[i].style.display = "none";
    }

  }



});

hardBtn.addEventListener("click", function(){

  // change the background color of h1 to default colors
  h1Bg.style.backgroundColor = "#2980b9";

  // change the text of message area to default text
  messageDisplay.textContent = " ";	

  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");

  numSquares = 6;

  colors = generateRandomColor(numSquares);
  pickedColor = pickRandomColor();
  document.querySelector("#rgbValue").textContent = pickedColor;

  for(var i=0; i < squareBoxes.length; i++){
    
    if(colors[i]){
    	squareBoxes[i].style.backgroundColor = colors[i];
    	squareBoxes[i].style.display = "block";
    }

  }

});


function reset(){
	
  this.textContent = "New Colors";	

  // generate random colors and place them inside an array
  colors = generateRandomColor(numSquares);
 
  // pick a color to play with
  pickedColor = pickRandomColor();
  document.querySelector("#rgbValue").textContent = pickedColor;

  // change the background color of h1 to default colors
  h1Bg.style.backgroundColor = "#2980b9";

  // change the text of message area to default text
  messageDisplay.textContent = " ";


  for(var i=0; i < squareBoxes.length; i++){

    squareBoxes[i].style.backgroundColor = colors[i];

  }
}

newColorsBtn.addEventListener("click", function(){

  this.textContent = "New Colors";	

  // generate random colors and place them inside an array
  colors = generateRandomColor(numSquares);
 
  // pick a color to play with
  pickedColor = pickRandomColor();
  document.querySelector("#rgbValue").textContent = pickedColor;

  // change the background color of h1 to default colors
  h1Bg.style.backgroundColor = "#2980b9";

  // change the text of message area to default text
  messageDisplay.textContent = " ";


  for(var i=0; i < squareBoxes.length; i++){

    squareBoxes[i].style.backgroundColor = colors[i];

  }

});




console.log(pickedColor);

document.querySelector("#rgbValue").textContent = pickedColor;

for(var i=0; i < squareBoxes.length; i++){

  squareBoxes[i].style.backgroundColor = colors[i];

  squareBoxes[i].addEventListener("click", function(){
    
    var clickedColor = this.style.backgroundColor;

    console.log(clickedColor, pickedColor);

    if(clickedColor === pickedColor){
    	messageDisplay.textContent = "You got it Right!";
    	messageDisplay.style.color = "#27ae60";
    	changeColor(clickedColor);
    	h1Bg.style.backgroundColor = clickedColor;
    	newColorsBtn.textContent = "Play Again?";

    }else{
    	this.style.backgroundColor = "#232323";
    	messageDisplay.textContent = "Try Again"
    	newColorsBtn.textContent = "New Colors";
    }

  });

}

function changeColor(color){

  // loop through the boxes
  // change the background color of all of them to
  // clicked color
  for(var i=0; i < squareBoxes.length; i++){

  	squareBoxes[i].style.backgroundColor = color;
  }

}

function pickRandomColor(){

  var randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];

}

function generateRandomColor(num){

    // create an array
	var arr = [];

	// loop through the array
	// call the randomColor() function

	for(var i=0; i < num; i++){

		arr.push(randomColor());
	}

	return arr;
}


function randomColor(){

   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b + ")";

}
