const container = document.querySelector(".container");

function createGrid() { 
    let size = 800; 
    let amountOfBoxes = 16; 
    for (let i = 0; i < 256; i++) { 
        const grid = document.createElement("div"); 
        grid.classList.add("boxes"); 
        grid.style.width = size/amountOfBoxes + "px"; 
        grid.style.height = size/amountOfBoxes + "px"; 
        container.appendChild(grid); 
    }
}

createGrid();

const boxes = document.querySelectorAll(".boxes"); 

function colorGrid() {
    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "purple"; 
        }); 
    });
}; 

colorGrid(); 