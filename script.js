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
