
function updateBoxes() {
  var numberInput = document.getElementById("numberInput");
  var colorInput = document.getElementById("colorInput");
  var rightSide = document.getElementById("rightSide");

  // Clear previous boxes
  rightSide.innerHTML = "";

  var number = parseInt(numberInput.value);
  var color = colorInput.value;

  if (!isNaN(number) && color !== "") {
    for (var i = 0; i < number; i++) {
      var box = document.createElement("div");
      box.className = "box";
      box.style.backgroundColor = color;
      rightSide.appendChild(box);
    }
}
}

