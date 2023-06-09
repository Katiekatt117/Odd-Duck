// variables that select elements in the html
let productContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

// this sets the beginning click for the clicking vote
let click = 0;
// this sets the maxium clicks entirely
let maxClicksAllowed = 25;

const views = {};

// holds the current state of the app and products
const state = {
    allproductsArray: [],
};

// functional logic

function product(path, name) {
    this.name = name;
    this.path = path;
    this.views = 0;
    this.click = 0;
}

// image array
const imageFiles = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];

// dis is da image counter
let imageCount = {};

// randomizer
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// function to update images
// this is also getRandomNumber for product 1
function updateImages() {
    const product1Image = getRandomElement(imageFiles);
    product1Span.innerHTML = `<img class='img' src="images/${product1Image}">`;
    if (imageCount[product1Image]) {
        imageCount[product1Image]++;
    } else {
        imageCount[product1Image] = 1;
    }

    // this is the getRandomNumber for product 2
    const product2Image = getRandomElement(imageFiles);
    product2Span.innerHTML = `<img class='img' src="images/${product2Image}">`;
    if (imageCount[product2Image]) {
        imageCount[product2Image]++;
    } else {
        imageCount[product2Image] = 1;
    }

    // this is the getRandomNumber for product 3
    const product3Image = getRandomElement(imageFiles);
    product3Span.innerHTML = `<img class='img' src="images/${product3Image}">`;
    if (imageCount[product3Image]) {
        imageCount[product3Image]++;
    } else {
        imageCount[product3Image] = 1;
    }
}


// this puts thenm in the html
const product1Span = document.getElementById('product-1');
const product2Span = document.getElementById('product-2');
const product3Span = document.getElementById('product-3');

// update images on load
updateImages();

// add click event listener to each image
product1Span.addEventListener('click', updateImages);
product2Span.addEventListener('click', updateImages);
product3Span.addEventListener('click', updateImages);
//product1Span.removeEventListener

// Event listener for the View Results button
const viewResultsBtn = document.querySelector('.view-results-btn');
viewResultsBtn.addEventListener('click', showResults);

function showResults() {
    // Create an array of labels and data from the imageCount object
    const labels = Object.keys(imageCount);
    const data = Object.values(imageCount);

    // Get the canvas element for the chart
    const canvas = document.getElementById('results-chart');

    // Create the chart using Chart.js
    const chart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Image Votes',
                data: data,
                backgroundColor: [
                    "#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE",

                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Image Votes'
            }
        }
    });
    saveSettings()
}

document.addEventListener("DOMContentLoaded", function () {
    const viewResultsBtn = document.querySelector('.view-results-btn');
    viewResultsBtn.addEventListener('click', showResults);

    loadSettings()
});

// localstorage function

// instructions: Store the products array into local storage as a formatted JSON string
// Retrieve the products array from local storage and then utilize the JSON.Parse() 
// function. Remember, if your constructor utilizes prototype methods, you will have to 
// send each item in the array back through the constructor function.

// localStorage.setItem('product', JSON.stringify(Object));

// let myObj = JSON.parse(localStorage.getItem('product'));

// localStorage.imageFiles = JSON.stringify(product);

// let myJSON = JSON.parse(localStorage.imageFiles);

// let string = localStorage.setItem('product');
// localStorage.setItem('product', str);

// load from local storage
function loadSettings() {
    let getSettings = localStorage.getItem("product");
    if (getSettings) {
        console.log(getSettings); //
        imageCount = JSON.parse(getSettings);
        console.log(imageCount); //
    }
}

// save to local storage
function saveSettings() {
    let stringify = JSON.stringify(imageCount);
    localStorage.setItem("product", stringify);
    console.log(stringify); //
}





