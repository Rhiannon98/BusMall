'use strict';

// establish an array that connects to the html doc
// it will store the instances
// this array is also connected to the constructor
Product.allProducts = [];


// array keeping track of [product names]
var productNames = [];

// array keeping track of amt of votes
var productVotes = [];

// click tracker
Product.totalClicks = 0;

// access img element from DOM (define a var to get element by ID)
var leftImg = document.getElementById('leftImg');
var middleImg = document.getElementById('middleImg');
var rightImg = document.getElementById('rightImg');

// access section element from the DOM
var sectionElement = document.getElementById('product-section');

// access the ul element from the DOM
var ulElement = document.getElementById('results');

// make the constructor for the Product
function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.timesDisplayed = 0;
  this.votes = 0;
  Product.allProducts.push(this);
  productNames.push(this.name);
}

//new instances of the Product
new Product('imgs/bag.jpg', 'R2D2 bag');
new Product('imgs/banana.jpg', 'banana cutter');
new Product('imgs/bathroom.jpg', 'tp and iPad stand');
new Product('imgs/boots.jpg', 'pointless boots');
new Product('imgs/breakfast.jpg', 'all-at-once breaky');
new Product('imgs/bubblegum.jpg', 'meatball gum');
new Product('imgs/chair.jpg', 'hurtful chair');
new Product('imgs/cthulhu.jpg', 'cthulhu');
new Product('imgs/dog-duck.jpg', 'dog-duck');
new Product('imgs/dragon.jpg', 'dragon.jpg');
new Product('imgs/pen.jpg', 'u-pen-cils');
new Product('imgs/pet-sweep.jpg', 'pawsweeper');
new Product('imgs/scissors.jpg', 'pizza scizzors');
new Product('imgs/shark.jpg', 'sharkling bag');
new Product('imgs/sweep.png', 'sweeper baby');
new Product('imgs/tauntaun.jpg', 'tauntaun bed');
new Product('imgs/unicorn.jpg', 'can-nicorn');
new Product('imgs/usb.gif', 'tentacle usb');
new Product('imgs/water-can.jpg', 'water-can can water');
new Product('imgs/wine-glass.jpg', 'quirky wine glass');

// array to keep track of the previously displayed imgs
var lastDisplayed = [];

function randomImgs() {
  //loop until currentImgs has a length of 3
  var isUnique = true;
  // generating 3 random imgs
  var randomLeft = Math.floor(Math.random() * Product.allProducts.length);
  var randomMiddle = Math.floor(Math.random() * Product.allProducts.length);
  var randomRight = Math.floor(Math.random() * Product.allProducts.length);

  //check to ensure that these random numbers are unique
  //if duplicates, rerun all numbers
  // Condition 1: randomLeft === randomMiddle || randomMiddle === randomRight || randomLeft === randomRight
  // Condition 2: randomLeft already shown || randomMiddle already shown || randomRight already shown

  while (randomLeft === randomMiddle || randomMiddle === randomRight || randomLeft === randomRight || lastDisplayed.includes(randomLeft) || lastDisplayed.includes(randomMiddle) || lastDisplayed.includes(randomRight)) {

    randomLeft = Math.floor(Math.random() * Product.allProducts.length);
    randomMiddle = Math.floor(Math.random() * Product.allProducts.length);
    randomRight = Math.floor(Math.random() * Product.allProducts.length);
  }

  // now that they're unique #'s, we can display the imgs
  leftImg.src = Product.allProducts[randomLeft].filepath;
  leftImg.alt = Product.allProducts[randomLeft].name;

  middleImg.src = Product.allProducts[randomMiddle].filpath;
  middleImg.alt = Product.allProducts[randomMiddle].name;

  rightImg.src = Product.allProducts[randomRight].filepath;
  rightImg.alt = Product.allProducts[randomRight].name;

  // add to # of times displayed
  Product.allProducts[randomLeft].timesDisplayed++;
  Product.allProducts[randomMiddle].timesDisplayed++;
  Product.allProducts[randomRight].timesDisplayed++;

  //keeping track of previously displayed imgs
  lastDisplayed = [];
  Product.lastDisplayed.push(randomLeft);
  Product.lastDisplayed.push(randomMiddle);
  Product.lastDisplayed.push(randomRight);
}

// new function! for click events

function handleClick(event) {
  // increment click counter
  Product.totalClicks++;

  // increment clicks/votes on the specific image
  console.log(event.target.alt);

  // use a for loop to determine product img was clicked on
  for (var i in Product.allProducts) {
    if (event.target.alt === Product.allProducts[i].name) {
      Product.allProducts[i].votes++;
    }
  }

  //check the click counter
  if (Product.totalClicks > 25) {
    // turn off event listener
    sectionElement.removeEventListener('click', handleClick);

    // if greater than 9 display the results as a list
    showResults();

    // updates the votes per img for the chart
    updateVotes();

    // display the chart
    renderChart();

  } else {
    // if less than 25
    randomImgs();
  }
}

function showResults() {
  // create list items to display the numbers
}