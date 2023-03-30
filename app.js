// image array
const imageFiles = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];

// dis is da image counter
const imageCount = {};

// randomizer
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// function to update images
function updateImages() {
    const product1Image = getRandomElement(imageFiles);
    product1Span.innerHTML = `<img class='img' src="images/${product1Image}">`;
    if (imageCount[product1Image]) {
        imageCount[product1Image]++;
    } else {
        imageCount[product1Image] = 1;
    }

    const product2Image = getRandomElement(imageFiles);
    product2Span.innerHTML = `<img class='img' src="images/${product2Image}">`;
    if (imageCount[product2Image]) {
        imageCount[product2Image]++;
    } else {
        imageCount[product2Image] = 1;
    }

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
        type: 'pie',
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
}