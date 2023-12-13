let gridDiv = document.querySelector(".grid");
let button = document.querySelector("button");

let squares = 16;

addBoxes(squares);

// when clicked fill with correct number of boxes
button.addEventListener ("click", function() {
    // take prompt and give values
    squares = prompt("How many squares do you want on each side?");

    if (squares>100) {
        squares = 100;
    } else if (squares < 2) {
        squares = 2;
    }

    console.log(squares);
    console.log(setBoxSize(squares));

    // remove boxes
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }

    // make boxes
    addBoxes(squares);
})

function addBoxes(squares){
    // Add boxes initally
    for (let i = 0; i<squares * squares; i++) {
        const box = document.createElement('div');
        box.className = "box";
        box.style.width = setBoxSize(squares);
        box.style.height = setBoxSize(squares);
        gridDiv.appendChild(box);

        box.addEventListener ("mouseover" , function() {
            box.style.backgroundColor = "black";
        })
    }
}

function setBoxSize(squares){
    // set width and length of box
    let boxWidth = (1/squares) * 100;
    boxWidth = boxWidth + '%';
    return boxWidth;
}


