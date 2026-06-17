//Step 2 - selecting the container div
const container = document.getElementById("container");

//Step 2 - creating the 16x16 div
//Step 4 - refactored for inital grid, minus CSS reliance
const initSize = 16;
const initTotal = initSize * initSize;
for (let i = 0; i < initTotal; i++) {
    const div = document.createElement("div");
    
    //Step 4 - making inital grid not reliant on css and js mainly
    div.style.border = '1px solid black';
    div.style.flex = `0 0 calc(100% / ${initSize})`;   // variable used here
    div.style.aspectRatio = '1';
    div.style.boxSizing = 'border-box';
    //Step 3 - applying a class to the div which happens during mouse enter event
    //Step 4 - refactored to not have a class added but inline css colour change
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "blue";
    })
    container.appendChild(div);
}

//Step 4 - prompting from button with logic
//takes only number 1-100, deletes the containers children and calls the function
const createBtn = document.getElementById("createGridBtn");

createBtn.addEventListener("click", () => {
    let newSize = prompt("Type the number [X] for the grid [X by X] (maximum 100x100)");

    if (newSize === null || newSize > 100 || newSize < 1 || isNaN(newSize)) {
        return alert("Error: entry error please try again");
    } else {
        container.replaceChildren();
        createGrid(newSize);
    }
})

//Step 4 - function for the new grid after prompt
//copied the base of the initial grid, only changing variable names for the function to work
function createGrid(size) {
    const total = size * size;
    
    for (let i = 0; i < total; i++) {
        const div = document.createElement("div");
        
        div.style.border = '1px solid black';
        div.style.flex = `0 0 calc(100% / ${size})`;
        div.style.aspectRatio = '1';
        div.style.boxSizing = 'border-box';

        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "blue";
        })
        container.appendChild(div);
    }
}