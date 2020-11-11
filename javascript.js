const gridContainer = document.querySelector('.grid-container');
let gridElement = document.querySelector('.grid-element');
const resetGridButton = document.getElementById('reset-grid-button');
const createGridButton = document.getElementById('create-grid-button');

function createGrid(size) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    for (i=0; i < (size * size); i++) {
        let gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridContainer.appendChild(gridElement);
    }
    gridContainer.setAttribute('style', 'grid-template-columns: ' + ('auto '.repeat(size)));
}

function clearGrid() {
    let gridElements = Array.from(document.querySelectorAll('.grid-element'));
    gridElements.forEach((element) => {
        element.classList.remove('active');
    });
    console.log("grid cleared.");
    let gridSize = prompt("Enter a number between 4-25 for the grid size");
    if (gridSize >= 4 && gridSize <= 25) {
        createGrid(gridSize);
    }
    else {
        alert("Your input was invalid, using default value of 16.")
        createGrid(16);
    }
    
}

gridContainer.addEventListener('mouseover', function (e){
    if (e.target.matches('.grid-element')) {
        e.target.classList.add('active');
    }
});

resetGridButton.addEventListener('click', clearGrid);
document.addEventListener('DOMContentLoaded', function() {
    createGrid(16);
})