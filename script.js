function makeDivs(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        let cells = document.createElement('div');
        container.appendChild(cells)
        cells.classList.add('grid')
        cells.style.width = "50px";
    }
}

makeDivs();

function hover() {
    let elements = document.getElementsByClassName("grid");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", () => {
            elements[i].style.backgroundColor = "black";
        })
    }
}

hover()

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
gridSize(); 