var cssRGB = document.querySelector(".rgb");
var cssHex = document.querySelector(".hex");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function hexToRgb(hex) {
  // Remove '#' if present
  hex = hex.replace("#", "");

  let r = parseInt(hex.substr(0, 2), 16);
  let g = parseInt(hex.substr(2, 2), 16);
  let b = parseInt(hex.substr(4, 2), 16);
  // Return RGB value as an object
  return `rgb(${r}, ${g}, ${b})`;
}

function setGradient() {
  let colorString = `${color1.value}, ${color2.value}`;
  body.style.background = `linear-gradient(to right, ${colorString} )`;

  cssHex.textContent = "Hex conversion: " + color1.value + ", " + color2.value;
  cssRGB.textContent = `linear-gradient(to right, 
    ${hexToRgb(color1.value)}, 
    ${hexToRgb(color2.value)} )`;
  //"RGB conversion: " + hexToRgb(color1.value) + ", " + hexToRgb(color2.value);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

console.log("Testing git");
