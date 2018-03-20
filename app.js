'use strict';

// establish an array that connects to the html doc
// this array is also connected to the constructor
Items.allItems = [];

var totalClicks = 25;
console.log(totalClicks);

// make the constructor for the Items
function Items(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  // this.clicks = clicks;
  // this.shown = shown;
  Items.allItems.push(this);
}

//new instances of the Items
new Items('imgs/bag.jpg', 'R2D2 bag');
new Items('imgs/banana.jpg', 'banana cutter');
new Items('imgs/bathroom.jpg', 'tp and iPad stand');
new Items('imgs/boots.jpg', 'pointless boots');
new Items('imgs/breakfast.jpg', 'all-at-once breaky');
new Items('imgs/bubblegum.jpg', 'meatball gum');
new Items('imgs/chair.jpg', 'hurtful chair');
new Items('imgs/cthulhu.jpg', 'cthulhu');
new Items('imgs/dog-duck.jpg', 'dog-duck');
new Items('imgs/dragon.jpg', 'dragon.jpg');
new Items('imgs/pen.jpg', 'u-pen-cils');
new Items('imgs/pet-sweep.jpg', 'pawsweeper');
new Items('imgs/scissors.jpg', 'pizza scizzors');
new Items('imgs/shark.jpg', 'sharkling bag');
new Items('imgs/sweep.png', 'sweeper baby');
new Items('imgs/tauntaun.jpg', 'tauntaun bed');
new Items('imgs/unicorn.jpg', 'can-nicorn');
new Items('imgs/usb.gif', 'tentacle usb');
new Items('imgs/water-can.jpg', 'water-can can water');
new Items('imgs/wine-glass.jpg', 'quirky wine glass');

// access element from DOM (define a var to get element by ID)
var imgElement = document.getElementById('item-pic');

//event listener ON the actual image
// element.src = Constructor.array
imgElement.addEventListener('click', randomItems);

// callback function when img is clicked:
function randomItem() {
  // random number generator
  var randomIndex = Math.floor(Math.random() * Items.allItems.length);

  imgElement.src = Items.allItems[randomIndex].filepath;
  imgElement.alt = Items.allItems[randomIndex].name;
}

//render an image on page load
randomItem();


//way to keep track of first 3 imgs.
var previousI = [];

function threeImgs() {
  //loop until currentI has a length of 3
  var isUnique = true;
  var currentI = [];

  while (currentI.length < 3) {

    var randoI = randomItem();

    for (var i in previousI) {
      if (previousI[i] === randoI) {
        isUnique = false;
      }
    }

    if (isUnique) {
      currentI.push();
    }
  }

  previousI = currentI;
}
threeImgs();

//compare 1st 3 to 2nd 3 to ensure no repeats
