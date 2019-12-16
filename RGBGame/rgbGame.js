var listOfColors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorPicked = listOfColors[pickColor()];
var colorQuestion = document.getElementById("colorQuestion");
var message = document.getElementById("isCorrect");
var button = document.getElementById("reset");

colorQuestion.textContent = colorPicked;

for (var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = listOfColors[i];
  squares[i].addEventListener('click', function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === colorPicked){
      message.textContent = "Congrats, You have done it"
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      button.textContent = "Play Again"
    }
    else{
      this.style.backgroundColor = "#232323";
      message.textContent = "Oops! Try Again"
    }
  })
}

function changeColor(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  return Math.floor(Math.random() * listOfColors.length + 1);

}

function generateRandomColors(number){
  var colorsArray = [];
  for(var i = 0; i < number; i++){
    var color = getrandomRGB();
    colorsArray.push(color);
  }
  return colorsArray;
}

function getrandomRGB(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb("+r+", "+g+", "+b+")"
}

function SetNewColors(){
  listOfColors = generateRandomColors(6);
  coloePickrd = listOfColors[pickColor()];
  for(var i = 0; i < listOfColors.length; i++){
    squares[i].style.backgroundColor = listOfColors[i];
  }
}
