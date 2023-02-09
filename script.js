const userInput = document.querySelector('#userInput');

const grid = document.querySelector(".container");
let size = 16;
//function to make original grid
function makeGrid(size) {
    let board = document.querySelector('#container');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        const squares = document.createElement('div')
        container.appendChild(squares);
        squares.classList.add('grid');
    }
}
makeGrid(size)

function hover() {
    let elements = document.getElementsByClassName("grid");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", () => {
            elements[i].style.backgroundColor = "black";
        })

    }
}

hover()

//function that clears grid on button click
function clearGrid() {
    const removeBtn = document.querySelector('#remove');
    removeBtn.addEventListener("click", () => {
        const gridArray = Array.from(container.childNodes);
        gridArray.forEach((element) => {
            container.removeChild(element);
        })
    });
}
clearGrid()
//function to updatesize of squares when new grid is created
/* function updateSize() {
    let userInput = document.querySelector("#userInput");
    console.log(userInput);
    for (let i = 0; i < userInput.value * userInput.value; i++) {
        const squares = document.createElement('div')
        container.appendChild(squares);
        squares.classList.add('grid');

        squares.innerHTML = "";
        squares.style.removeProperty('border');
        squares.style.setProperty(
            "grid-template-columns",
            `repeat(${userInput.value}, 2fr)`
        );
        squares.style.setProperty(
            "grid-template-rows",
            `repeat(${userInput.value}, 2fr)`
        );
    }
}

updateSize()*/

//function to get userInput when number is entered into prompt
function getUserInput() {
    let removeBtn = document.querySelector("#remove");
    removeBtn.addEventListener("click", () => {
        let newSize = prompt("How many squares per side?")
        let desiredValue = parseInt(newSize);
        if (desiredValue > 1 && desiredValue <= 100) {
            size = newSize;
            makeGrid(newSize);
            hover();
        } else {
            alert("enter a digit from 1-100 range!");
        };
    });
}

getUserInput();
/*function makeDivs(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        let cells = document.createElement('div');
        container.appendChild(cells)
        cells.classList.add('grid')
        cells.style.width = "30px";
    }
}

makeDivs(256);

function hover() {
    let elements = document.getElementsByClassName("grid");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", () => {
            elements[i].style.backgroundColor = "black";
        })
    }
}
hover()


function size() {

    const gridSize = document.getElementById('userInput').value;
    const element = document.querySelectorAll('.grid');
    element.remove()
    makeDivs(gridSize);
}
size()*/
/*
function gridSize() {

    const ten = document.getElementById("10");
    ten.addEventListener("click", () => {
        makeDivs(100);
        hover()
    })
    const twenty = document.getElementById("20");
    twenty.addEventListener("click", () => {
        makeDivs(400);
        hover()
    })
    const thirty = document.getElementById("30");
    thirty.addEventListener("click", () => {
        makeDivs(895);
        hover()
    })
}
gridSize(); */