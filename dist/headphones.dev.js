"use strict";

function displayHeadphone(imageDirNoColAdded, title, price, description) {
  for (var _len = arguments.length, colors = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    colors[_key - 4] = arguments[_key];
  }

  $("body").append("\n        <div id=\"headphone-".concat(title.split(" ").join(""), "\" style=\"display: flex;\">\n            <div class=\"jqueryHeadphone\">\n                <img src = ").concat(imageDirNoColAdded).concat(colors[0], ".png width=\"350\" \n                height=\"350\" \n                id=\"img-").concat(title.split(" ").join(""), "\" >\n            </div>\n\n            <div class=\"productInfo\">\n                <a style=\"font-family: 'Alegreya Sans SC', sans-serif;\">").concat(title, "</a>\n                <p style=\"font-size:20px;\">").concat(description, "</p>\n                <br>\n\n                <div id=\"circleContainer").concat(title.split(" ").join(""), "\"></div>\n\n                <br>\n                <div>").concat(price, "</div>\n            </div>\n        </div>\n    "));

  for (var i in colors) {
    if (colors[i] === "white") {
      colors[i] = "rgb(230, 232, 235)";
    }
  }

  for (var _i = 0, _colors = colors; _i < _colors.length; _i++) {
    var color = _colors[_i];
    $("div#circleContainer".concat(title.split(" ").join(""))).append("\n        <button style=\"background-color: ".concat(color, ";\n        border: 1px solid rgba(0, 0, 0, 0);\n        height: 50px;\n        width: 50px;\n        border-radius: 50%;\n        -moz-border-radius: 50%;\n        -webkit-border-radius: 50%;\n        display: inline-block;\" name=\"btn-").concat(color, "-").concat(title.split(" ").join(""), "\">\n        </button>\n    "));
  }
}

displayHeadphone("./assets/example-headphone-col-", "Headphone Name", "$69.99", "This is a sample description but I hope these non-existant headphones have good audio fidelity. This is a sample description but I hope these non-existant headphones have good audio fidelity.", "white", "pink", "black", "blue");
displayHeadphone("./assets/example-headphone-col-", "Headphone Name2", "$69.99", "This is a sample description but I hope these non-existant headphones have good audio fidelity. This is a sample description but I hope these non-existant headphones have good audio fidelity.", "pink", "black", "white"); // SIMILAR DIR NAMES ARE NECESSARY 

$("button").click(function () {
  var buttonClicked = $(this).attr("name");
  buttonClicked = buttonClicked.split("-");

  for (var i in buttonClicked) {
    if (buttonClicked[i] === "rgb(230, 232, 235)") {
      buttonClicked[i] = "white";
    }
  }

  $("img#img-".concat(buttonClicked[2])).attr("src", "./assets/example-headphone-col-".concat(buttonClicked[1], ".png"));
});