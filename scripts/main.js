//Step 2 - selecting the container div
const container = document.getElementById("container");

//Step 2 - creating the 16x16 div
const size = 16;
const total = size * size;

for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    //Step 3 - applying a class to the div which happens during mouse enter event
    div.addEventListener("mouseenter", () => {
        div.classList.add("drawn");
    })
    container.appendChild(div);
}

//Step 4 - prompting from button
const createBtn = document.getElementById("createGridBtn");

createBtn.addEventListener("click", () => {
    let size = prompt("Type the number [X] for the grid [X by X] (maximum 100x100)");

    
})