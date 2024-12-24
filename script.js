
const gridContainer = document.querySelector("#gridContainer");

var gridRow;

var gridColumn;

const square = 4;

for(let i = 0; i < square; i++){

    gridRow = document.createElement("div"); 
    gridRow.classList.add("row");
    gridContainer.appendChild(gridRow);

    for(let j = 0; j < square; j++){
        gridColumn = document.createElement("div"); 
        gridColumn.classList.add("column");
        gridRow.appendChild(gridColumn);
    }
}



