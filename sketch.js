var bgImg, bg;
var gameState = 0
var startImgSprite, startImg;
var launchingSpaceCraft, launchingSpaceCraftImg;
var spaceCraft, spaceCraftImg, spaceCraftImgRev;
var sun, sunImg
var mercury, mercuryImg
var venus, venusImg
var earth, earthImg
var mars, marsImg
var jupiter, jupiterImg
var saturn, saturnImg
var uranus, uranusImg
var neptune, neptuneImg
function preload() {
  bgImg = loadImage("Images/background.jpg")
  startImg = loadImage("Images/StartingImgText.jpg")
  launchingSpaceCraftImg = loadImage("Images/rocket1.png")
  spaceCraftImg = loadImage("Images/spacecraft.png")
  spaceCraftImgRev = loadImage("Images/spacecraftRev.png")

  sunImg = loadImage("Images/sun.png")

  mercuryImg = loadImage("Images/mercury.png")
  venusImg = loadImage("Images/venus.png")
  earthImg = loadImage("Images/earth.png")
  marsImg = loadImage("Images/mars.png")
  jupiterImg = loadImage("Images/jupiter.png")
  saturnImg = loadImage("Images/saturn.png")
  uranusImg = loadImage("Images/uranus.png")
  neptuneImg = loadImage("Images/neptune.png")
}

function setup() {
  createCanvas(displayWidth, displayHeight - 111);

  //for infinite ground
  bg = createSprite(950, 480, 500, 20);
  bg.addImage("stars", bgImg)
  bg.scale = 4
  bg.visible = false


  startImgSprite = createSprite(displayWidth / 2, displayHeight / 2, 10, 10)
  startImgSprite.addImage("start", startImg)
  startImgSprite.scale = 1.65
  startImgSprite.visible = false

  launchingSpaceCraft = createSprite(300, 700, 10, 10)
  launchingSpaceCraft.addImage("launch", launchingSpaceCraftImg)
  launchingSpaceCraft.scale = 0.75
  launchingSpaceCraft.visible = false

  sun = new Planet(-14000, displayHeight / 2 - 50, 20)
  sun.image(sunImg)
  sun.scale(2.6)
  sun.hide()

  mercury = new Planet(-11000, displayHeight / 2, 20)
  mercury.image(mercuryImg)
  mercury.scale(1.2)
  mercury.hide()

  venus = new Planet(-8000, displayHeight / 2, 20)
  venus.image(venusImg)
  venus.scale(1.85)
  venus.hide()

  earth = new Planet(-5000, displayHeight / 2, 20)
  earth.image(earthImg)
  earth.scale(1.87)
  earth.hide()

  mars = new Planet(-2000, displayHeight / 2, 20)
  mars.image(marsImg)
  mars.scale(1.75)
  mars.hide()

  jupiter = new Planet(1000, displayHeight / 2, 20)
  jupiter.image(jupiterImg)
  jupiter.scale(2.15)
  jupiter.hide()

  saturn = new Planet(4000, displayHeight / 2, 20)
  saturn.image(saturnImg)
  saturn.scale(1.75)
  saturn.hide()

  uranus = new Planet(7000, displayHeight / 2, 20)
  uranus.image(uranusImg)
  uranus.scale(2.75)
  uranus.hide()

  neptune = new Planet(10000, displayHeight / 2, 20)
  neptune.image(neptuneImg)
  neptune.scale(2.45)
  neptune.hide()



  spaceCraft = createSprite(-5000, displayHeight / 2, 10, 10)
  spaceCraft.addImage("spaceCraft", spaceCraftImg)
  spaceCraft.visible = false




}

function draw() {
  //console.log(gameState)
  background("black")

  if (gameState === 0) {
    startImgSprite.visible = true
  }
  if (keyCode === 13) {
    startImgSprite.visible = false
    launchingSpaceCraft.visible = true
    launchingSpaceCraft.velocityX = 20
    launchingSpaceCraft.velocityY = -16
    gameState = 1
    if (launchingSpaceCraft.y < -250) {
      gameState = 2
    }

  }
  if (gameState === 2) {
    bg.visible = true
    sun.unHide()
    mercury.unHide()
    venus.unHide()
    earth.unHide()
    mars.unHide()
    jupiter.unHide()
    saturn.unHide()
    uranus.unHide()
    neptune.unHide()

    spaceCraft.visible = true
    camera.x = spaceCraft.x
    if (camera.x < displayWidth - 10) {
      bg.x = 0
    }
    sun.display()
    mercury.display()
    venus.display()
    earth.display()
    mars.display()
    jupiter.display()
    saturn.display()
    uranus.display()
    neptune.display()

  }
  drawSprites();
}
function keyPressed() {

  if (keyCode === 39) {
    //bg.velocityX=10   
    spaceCraft.velocityX = 100
    spaceCraft.changeAnimation("spaceCraft", spaceCraftImg)
    console.log(spaceCraft.x)
  }

  if (keyCode === 37) {
    spaceCraft.velocityX = -100
    spaceCraft.addImage("rev", spaceCraftImgRev)
    spaceCraft.changeAnimation("rev", spaceCraftImgRev)
    console.log(spaceCraft.x)
  }

}
function keyReleased() {

  if (keyCode === 39) {
    //bg.velocityX=10   
    spaceCraft.velocityX = 0
    spaceCraft.changeAnimation("spaceCraft", spaceCraftImg)
    console.log(spaceCraft.x)
  }

  if (keyCode === 37) {
    spaceCraft.velocityX = 0
    spaceCraft.addImage("rev", spaceCraftImgRev)
    spaceCraft.changeAnimation("rev", spaceCraftImgRev)
    console.log(spaceCraft.x)
  }

}