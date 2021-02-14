//var START = 0
//var PLAY = 1
//var END = 2

var gameState = 0

var flag = false


function preload(){
//door_opening = loadAnimation("img1.png","img2.png","img3.png","img4.png","img5.png")
doorImage = loadAnimation("img1.png")
doorImage2 = loadAnimation("img5.png")

gameMusic = loadSound("GameSound.mp3")

backgroundImage = loadImage("background.png")


}

function setup() {
  createCanvas(1200,600);

  door = createSprite(600,300,50,100)


  door2 = createSprite(300,300,50,100)
  door2.addAnimation("door_closed",doorImage)
  door2.addAnimation("door_opened",doorImage2)
  door2.visible = false


  door3 = createSprite(600,300,50,100)
  door3.addAnimation("door_closed",doorImage)
  door3.addAnimation("door_opened",doorImage2)
  door3.visible = false

  door4 = createSprite(900,300,50,100)
  door4.addAnimation("door_closed",doorImage)
  door4.addAnimation("door_opened",doorImage2)
  door4.visible = false


  gameMusic.loop()

  square = createSprite(door2.x,door2.y,30,30)
  square.visible = false
  square.shapeColor = "White"

  
  


}
      
 
function draw() {
  background(backgroundImage);
  flag = false
  
  

 door.addAnimation("door_closed",doorImage)

 
 //START
 if(gameState === 0){
   door.visible = true
   textSize(20)
   stroke("Black")
   strokeWeight(3)
   text("Do you think you know enough?",450,100)
   text("Press space to continue",500,500)
 }


 if(keyDown("space")&& gameState === 0){
   door.visible = false
   gameState = 0.5;
 }



//INSTRUCTIONS
 if(gameState === 0.5){
  square.visible = false
  textSize(30)
  stroke("Black")
  strokeWeight(3)
  text("INSTRUCTIONS",450,100)
  textSize(20)
  text("There will be three rounds of questions",50,150)
  text("There will be a square on one of the doors",50,200)
  text("Use the arrow keys to navigate the square on the door which you think has the correct answer and then press space",50,250)
  text("The questions asked will be randomized each time you play",50,300)
  text("Press enter to continue",500,500)
  door2.changeAnimation("door_closed",doorImage)
  door3.changeAnimation("door_closed",doorImage)
  door4.changeAnimation("door_closed",doorImage)
  r = Math.round(random(1,3))
 }

 if(keyDown("enter")&& gameState === 0.5){
   gameState = 1
 }

 drawSprites();
 
 //CHEMISTRY
 if(gameState === 1){
   door2.visible = true
   
   door3.visible = true
   
   door4.visible = true
   
   askQuestion1()
   square.visible = true


   

 }

//TRANSITION 1
 if(gameState === 1.5){
  textSize(20)
  stroke("Black")
  strokeWeight(3)
  text("Correct",square.x-50,square.y)
  text("Press Enter to continue",500,500)
  r = Math.round(random(1,3))
 }

 if(keyDown("enter")&& gameState === 1.5){
  gameState = 2
 }

//PHYSICS
 if(gameState === 2){
  door2.changeAnimation("door_closed",doorImage)
  door3.changeAnimation("door_closed",doorImage)
  door4.changeAnimation("door_closed",doorImage)
  askQuestion2()
 }

 
 //TRANSITION 2
 if(gameState === 2.5){
  textSize(20)
  stroke("Black")
  strokeWeight(3)
  text("Correct",square.x-50,square.y)
  text("Press Enter to continue",500,500)
  r = Math.round(random(1,3))
 }

 if(keyDown("enter")&& gameState === 2.5){
  gameState = 3
 }

//BIOLOGY
 if(gameState === 3){
  door2.changeAnimation("door_closed",doorImage)
  door3.changeAnimation("door_closed",doorImage)
  door4.changeAnimation("door_closed",doorImage)
  askQuestion3()
 }

 //TRANSIITION 3
 if(gameState === 3.5){
   door2.visible = false
   door3.visible = false
   door4.visible = false
   door.visible = true
   square.x = door.x
  textSize(30)
  stroke("Black")
  strokeWeight(3)
  text("YOU WIN",550,100)
  text("Press enter to restart",450,150)
 }

 if(gameState === 3.5&& keyDown("enter")){
   gameState = 0
 }






 
 

//WRONGTRANSITION
if(gameState === 0.25){
textSize(20)
stroke("Black")
strokeWeight(3)
text("Wrong",square.x-50,square.y)
text("Press Enter to restart",500,500)
}

if(gameState === 0.25&& keyDown("Enter")){
  door2.visible = false
  door3.visible = false
  door4.visible = false
  square.visible = false
  gameState = 0
}



  
 
}

function keyPressed(){
  if(keyCode === 39&& square.x === door2.x&& flag === false&& gameState === 1){
    square.x = door3.x
    flag = true
  }

  if(keyCode === 39&& square.x === door3.x&& flag === false&& gameState === 1){
    square.x = door4.x
    flag = true
  }

  if(keyCode === 37&& square.x === door4.x&& flag === false&& gameState === 1){
    square.x = door3.x
    flag = true
  }

  if(keyCode === 37&& square.x === door3.x&& flag === false&& gameState === 1){
    square.x = door2.x
    flag = true
  }







  if(keyCode === 39&& square.x === door2.x&& flag === false&& gameState === 2){
    square.x = door3.x
    flag = true
  }

  if(keyCode === 39&& square.x === door3.x&& flag === false&& gameState === 2){
    square.x = door4.x
    flag = true
  }

  if(keyCode === 37&& square.x === door4.x&& flag === false&& gameState === 2){
    square.x = door3.x
    flag = true
  }

  if(keyCode === 37&& square.x === door3.x&& flag === false&& gameState === 2){
    square.x = door2.x
    flag = true
  }







  if(keyCode === 39&& square.x === door2.x&& flag === false&& gameState === 3){
    square.x = door3.x
    flag = true
  }

  if(keyCode === 39&& square.x === door3.x&& flag === false&& gameState === 3){
    square.x = door4.x
    flag = true
  }

  if(keyCode === 37&& square.x === door4.x&& flag === false&& gameState === 3){
    square.x = door3.x
    flag = true
  }

  if(keyCode === 37&& square.x === door3.x&& flag === false&& gameState === 3){
    square.x = door2.x
    flag = true
  }

  
}





function askQuestion1(){
  
  if(r === 3){
  textSize(20)
   stroke("Black")
   strokeWeight(3)
   text("What is the 111th Element of the Periodic table",400,100)
   text("Tungsten",250,450)
   text("Roentgenium",550,450)
   text("Asthetin",875,450)
   text("Press space to choose",500,500)
   if(square.x === door3.x&& keyDown("space")){
    door3.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 1.5
    
  }

  if(square.x === door4.x&& keyDown("space")){
    door4.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 0.25
  }

  if(square.x === door2.x&& keyDown("space")){
    door2.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 0.25
  }
 
  }

   if(r === 1){
    textSize(20)
     stroke("Black")
     strokeWeight(3)
     text("What is the 14th Element of the Periodic table",400,100)
     text("carbon",250,450)
     text("Phosphorus",550,450)
     text("Silicon",875,450)
     text("Press space to choose",500,500)
     if(square.x === door4.x&& keyDown("space")){
      door4.changeAnimation("door_opened",doorImage2)
      //console.log("Right answer")
      gameState = 1.5
    }

    if(square.x === door3.x&& keyDown("space")){
      door3.changeAnimation("door_opened",doorImage2)
      //console.log("Right answer")
      gameState = 0.25
    }
  
    if(square.x === door2.x&& keyDown("space")){
      door2.changeAnimation("door_opened",doorImage2)
      //console.log("Right answer")
      gameState = 0.25
    }




  }
  if(r === 2){
    textSize(20)
     stroke("Black")
     strokeWeight(3)
     text("What is the 67th Element of the Periodic table",400,100)
     text("Holonium",250,450)
     text("Gold",550,450)
     text("Hydrogen",875,450)
     text("Press space to choose",500,500)
     if(square.x === door2.x&& keyDown("space")){
      door2.changeAnimation("door_opened",doorImage2)
      //console.log("Right answer")
      gameState = 1.5
     }

     if(square.x === door4.x&& keyDown("space")){
      door4.changeAnimation("door_opened",doorImage2)
      //console.log("Right answer")
      gameState = 0.25
    }
  
    if(square.x === door3.x&& keyDown("space")){
      door3.changeAnimation("door_opened",doorImage2)
      //console.log("Right answer")
      gameState = 0.25
    }

}

}











function askQuestion2(){
  if(r === 2){
   textSize(20)
   stroke("Black")
   strokeWeight(3)
   text("What are the measurements required for calculating speed",400,100)
   text("Motion & Time",250,450)
   text("Motion & Speed",550,450)
   text("Distance & Time",875,450)
   text("Press space to choose",500,500)
   if(square.x === door4.x&& keyDown("space")){
    door4.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 2.5
   }

   if(square.x === door3.x&& keyDown("space")){
    door3.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 0.25
  }

  if(square.x === door2.x&& keyDown("space")){
    door2.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 0.25
  }
  }

  if(r === 3){
   textSize(20)
   stroke("Black")
   strokeWeight(3)
   text("The attractive force between two objects is :",400,100)
   text("Mass",250,450)
   text("Speed",550,450)
   text("Gravity",875,450)
   text("Press space to choose",500,500)
   if(square.x === door4.x&& keyDown("space")){
    door4.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 2.5
   }

   if(square.x === door3.x&& keyDown("space")){
    door3.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 0.25
  }

  if(square.x === door2.x&& keyDown("space")){
    door2.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 0.25
  }
  }

  if(r === 1){
    textSize(20)
   stroke("Black")
   strokeWeight(3)
   text("Which of these is not a measurement of time",400,100)
   text("Years",250,450)
   text("Anno dommini",550,450)
   text("Light years",875,450)
   text("Press space to choose",500,500)
   if(square.x === door4.x&& keyDown("space")){
    door4.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 2.5
  }

  if(square.x === door2.x&& keyDown("space")){
    door2.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 0.25
  }

  if(square.x === door3.x&& keyDown("space")){
    door3.changeAnimation("door_opened",doorImage2)
    //console.log("Right answer")
    gameState = 0.25
  }
 }
}










function askQuestion3(){
  if(r === 1){
    textSize(20)
    stroke("Black")
    strokeWeight(3)
    text("What is the longest bone in the human body",400,100)
    text("Femur",250,450)
    text("Radius",550,450)
    text("Humourous",875,450)
    text("Press space to choose",500,500)
    if(square.x === door2.x&& keyDown("space")){
     door2.changeAnimation("door_opened",doorImage2)
     //console.log("Right answer")
     gameState = 3.5
    }
 
    if(square.x === door3.x&& keyDown("space")){
     door3.changeAnimation("door_opened",doorImage2)
     //console.log("Right answer")
     gameState = 0.25
   }
 
   if(square.x === door4.x&& keyDown("space")){
     door4.changeAnimation("door_opened",doorImage2)
     //console.log("Right answer")
     gameState = 0.25
   }
   }
 
   if(r === 2){
    textSize(20)
    stroke("Black")
    strokeWeight(3)
    text("Which animal has three hearts",400,100)
    text("Cats",250,450)
    text("Octopus",550,450)
    text("Cow",875,450)
    text("Press space to choose",500,500)
    if(square.x === door3.x&& keyDown("space")){
     door3.changeAnimation("door_opened",doorImage2)
     //console.log("Right answer")
     gameState = 3.5
    }
 
    if(square.x === door4.x&& keyDown("space")){
     door4.changeAnimation("door_opened",doorImage2)
     //console.log("Right answer")
     gameState = 0.25
   }
 
   if(square.x === door2.x&& keyDown("space")){
     door2.changeAnimation("door_opened",doorImage2)
     //console.log("Right answer")
     gameState = 0.25
   }
   }
 
   if(r === 3){
     textSize(20)
    stroke("Black")
    strokeWeight(3)
    text("What is the metal present in haemoglobin",400,100)
    text("Aluminium",250,450)
    text("Calcium",550,450)
    text("Iron",875,450)
    text("Press space to choose",500,500)
    if(square.x === door4.x&& keyDown("space")){
     door4.changeAnimation("door_opened",doorImage2)
     //console.log("Right answer")
     gameState = 3.5
   }
 
   if(square.x === door2.x&& keyDown("space")){
     door2.changeAnimation("door_opened",doorImage2)
     //console.log("Right answer")
     gameState = 0.25
   }
 
   if(square.x === door3.x&& keyDown("space")){
     door2.changeAnimation("door_opened",doorImage2)
     //console.log("Right answer")
     gameState = 0.25
   }
  }
}

