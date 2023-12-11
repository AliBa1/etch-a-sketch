let gridDiv = document.querySelector(".grid");
let button = document.querySelector("button");

let squares = 16;
let boxWidth = (1/squares) * 100;
boxWidth = boxWidth + '%';

// Add boxes initally
for (let i = 0; i<squares * squares; i++) {
    const box = document.createElement('div');
    box.className = "box";
    box.style.width = boxWidth;
    gridDiv.appendChild(box);

    box.addEventListener ("mouseover" , function() {
        box.style.backgroundColor = "black";
    })
}

// when clicked fill with correct number of boxes
button.addEventListener ("click", function() {
    // remove boxes
    for (let i = 0; i<squares * squares; i++) {
        const box = document.querySelector('.box');
        box.remove();
    }

    // take prompt and give values
    squares = prompt("How many squares do you want on each side?");
    boxWidth = (1/squares) * 100;
    boxWidth = boxWidth + '%';
    let boxClass = document.querySelector(".box");
    boxClass.style.width = boxWidth;
    if (squares>100) {
        squares = 100;
    } else if (squares < 2) {
        squares = 2;
    }
    console.log(squares);
    console.log(boxWidth);

    // make boxes
    for (let i = 0; i<squares * squares; i++) {
        const box = document.createElement('div');
        box.className = "box";
        box.style.width = boxWidth;
        gridDiv.appendChild(box);
    
        box.addEventListener ("mouseover" , function() {
            box.style.backgroundColor = "black";
        })
    }
})




