//Step 2 - selecting the container div
const container = document.getElementById("container");

//Step 2 - creating the 16x16 div
//Step 4 - refactored for inital grid, minus CSS reliance
const initSize = 16;

//Step 4 - making inital grid not reliant on css and js mainly
createGrid(initSize);

//Step 4 - function for the new grid after prompt
function createGrid(size) {
    const total = size * size;
    for (let i = 0; i < total; i++) {
        const div = document.createElement("div");
        div.style.border = '1px solid black';
        div.style.flex = `0 0 calc(100% / ${size})`;
        div.style.aspectRatio = '1';
        div.style.boxSizing = 'border-box';

        div.addEventListener("mouseenter", () => {
            let count = parseInt(div.dataset.hoverCount || "0");
            if (count === 0) {
                div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            }
            if (count < 10) {
                count++;
                div.dataset.hoverCount = count;
            }
            let blackOverlay = count * 0.1;
            div.style.background = `linear-gradient(rgba(0,0,0,${blackOverlay}), rgba(0,0,0,${blackOverlay})), ${div.style.backgroundColor}`;
        });

        container.appendChild(div);
    }
}

//Step 4 - prompting from button with logic
const createBtn = document.getElementById("createGridBtn");

createBtn.addEventListener("click", () => {
    let newSize = prompt("Type the number [X] for the grid [X by X] (maximum 100x100)");

    if (newSize === null || newSize > 100 || newSize < 1 || isNaN(newSize) || !Number.isInteger(+newSize)) {
        return alert("Error: entry error please try again");
    } else {
        container.replaceChildren();
        createGrid(newSize);
    }
})
