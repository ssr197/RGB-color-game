var listOfColors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)"];

var squares = document.querySelectorAll(".square");

var coloePicked = listOfColors[2];
var colorQuestion = document.getElementById("colorQuestion");
colorQuestion.textContent = coloePicked;


for (var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = listOfColors[i];

  squares[i].addEventListener('click', function(){
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === coloePicked){
      alert("True");
    }
    else{
      alert("false");
    }
  })
}
