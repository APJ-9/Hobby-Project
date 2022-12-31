const slider = document.getElementById('slider');
const carBody = document.getElementById('car-body');
slider.oninput = function() {
    carBody.style.filter = `hue-rotate(${this.value}deg)`
  }
console.log(colorValue);