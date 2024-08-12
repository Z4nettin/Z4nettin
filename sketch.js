let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
srd
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background ( 100, 50, 30)
  circle(xBolinha, yBolinha , diametro);
  xBolinha +=velocidadexBolinha;
  yBolinha +=velocidadeyBolinha;

  if (xBolinha > width ||
     xBolinha < 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha > height ||
     yBolinha < 0)
    velocidadeyBolinha *= -1;
  }