function newColor() {
  return '#' + Math.random().toString(16).slice(2,8);
}

function newBackground() {
  var color = newColor();
  document.body.style.background = color;
  document.getElementById('hexValue').innerHTML = 'Hex Value: ' + color;
}

document.onclick = newBackground;
