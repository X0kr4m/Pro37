class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","Introduce tu nombre");
    this.playButton = createButton("Jugar");
    this.titleImg = createImg("./assets/title.png","titulo de juego");
    this.greeting = createElement("h2");
  }
setElementPosition(){
  this.titleImg.position(120,100);
  this.input.position(width/2 - 100, height/2-80);
  this.playButton.position(width/2-90, height/2-20);
  this.greeting.position(width / 2 - 300, height/2-100);
}
display(){
  this.setElementPosition();
}
hide(){
  this.input.hide();
  this.greeting.hide();
  this.playButton.hide();
}
handleMousePressed(){
  this.playButton.mousePressed(()=>{
    this.input.hide();
    this.playButton.hide;
    var message = `
    Hola $(this.iput.value()}
    </br>Espera a que un nuevo jugador se una...`;
    this.greeting.html(message);
    player.name = this.input.value();
    player.index = 1;
  })
}
}