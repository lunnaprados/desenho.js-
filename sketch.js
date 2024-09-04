function setup() {
  createCanvas(400, 400);
  background("pink");
}

function draw() {
  if(mouseIsPressed) {
    stroke("purple");// cor da linha
    fill("white");// cor do fundo
    rect(mouseX,mouseY,10,10);// criando o retangulo
  }
}
