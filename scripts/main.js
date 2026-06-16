//Step 2 - selecting the container div
const container = document.getElementById("container");

//Step 2 - creating the 16x16 div
const size = 16;
const total = size * size;

for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
}