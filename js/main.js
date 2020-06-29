var squareno = 6;
var lost = 0;
var won = 0;
var wonno = document.querySelector("#wonno");
var lostno = document.querySelector("#lostno");
wonno.textContent = 0;
lostno.textContent = 0;
var colors = getmearray(squareno);
/*var colors=["rgb(0, 255, 255)",
			"rgb(255, 0, 0)",
			"rgb(0, 255, 0)",
			"rgb(0, 0, 255)",
			"rgb(255, 255, 0)",
			"rgb(255, 0, 255)",]*/
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
hardbtn.classList.add("selected");
var square = document.querySelectorAll(".square");
var colorselected = selectRandomly(squareno);
var decidecolor = document.querySelector("#colorid");
decidecolor.textContent = colorselected;
var h4 = document.querySelector("#h4");
var h2 = document.querySelector("h2");
var changeColor = document.querySelector("#changeColor");

changeColor.addEventListener("click", changeColorFun); // TO Change Colors.....

function changeColorFun() {
  if (changeColor.textContent === "Play Again?") {
    changeColor.textContent = "Change Color";
  }
  h4.textContent = "";
  colors = getmearray(squareno);
  colorselected = selectRandomly(squareno);
  decidecolor.textContent = colorselected;
  h2.style.backgroundColor = "steelblue";
  getmeagain();
}

// toggling btw hard and easy.

easybtn.addEventListener("click", function () {
  squareno = 3;
  h4.textContent = "";

  this.classList.add("selected");
  hardbtn.classList.remove("selected");

  changeColorFun();
  square[3].style.display = "none";
  square[4].style.display = "none";
  square[5].style.display = "none";
});

// hardbtn
hardbtn.addEventListener("click", function () {
  squareno = 6;
  h4.textContent = "";

  this.classList.add("selected");
  easybtn.classList.remove("selected");

  changeColorFun();
  square[3].style.display = "block";
  square[4].style.display = "block";
  square[5].style.display = "block";
});

for (var i = 0; i < squareno; i++) {
  square[i].style.backgroundColor = colors[i];
  //event listener----
  square[i].addEventListener("click", checksame);
}
function getmeagain() {
  for (var i = 0; i < squareno; i++) {
    square[i].style.backgroundColor = colors[i];
    //event listener----
    square[i].addEventListener("click", checksame);
  }
}

function checksame() {
  var mycolor = this.style.backgroundColor;
  console.log(mycolor, colorselected);
  if (mycolor === colorselected) {
    if (changeColor.textContent != "Play Again?") {
      won++;
      wonno.textContent = won;
      lostno.textContent = lost;
      changeAllColor(mycolor);
      h4.style.color = "grey";
      h4.textContent = "Correct !!";
      h2.style.backgroundColor = mycolor;
      changeColor.textContent = "Play Again?";
    }
  } else {
    lost++;
    wonno.textContent = won;
    lostno.textContent = lost;
    this.style.backgroundColor = "#232323";
    h4.style.color = "grey";
    h4.textContent = "TRY AGAIN";
  }
}

function changeAllColor(color) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }
}

function selectRandomly(squarenos) {
  var wet = Math.floor(Math.random() * squarenos);
  return colors[wet];
}

function getmearray(num) {
  var arr = [];
  // var containerBox = document.querySelector(".container");
  for (var i = 0; i < num; i++) {
    // var innerElement = document.createElement("div");
    // innerElement.classList.add("square");
    // containerBox.appendChild(innerElement);
    arr.push(randomGenerate());
  }
  return arr;
}

function randomGenerate() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var res = "rgb(" + r + ", " + g + ", " + b + ")"; // space important after ,
  return res;
}
