containerElement = document.getElementById("container")

function clearGrid(){
    containerElement.innerHTML = "";
}

function getGridSize (){
    const gridSize = parseInt(prompt("Please enter a number between 1 - 100: "))

    if(gridSize > 0 || gridSize < 100){
        clearGrid()
        createGrid(gridSize)
    }
}


function createGrid (numberDiv ){
    for (let index = 0;  index < (numberDiv * numberDiv); index++) {        
        let divElement = document.createElement("div-grid")


        divElement.setAttribute(
            "style",
            `
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border: 1px solid gray;
            width: ${400 / numberDiv}px;
            height: ${400 / numberDiv}px;
            `
        )
        containerElement.appendChild(divElement)
    }
    const queryDivGrid = document.querySelectorAll("div-grid")

    queryDivGrid.forEach(e => {
        e.addEventListener("mouseover", () => {
            e.style.backgroundColor = "black"
        } )
    })


}

createGrid(10)


