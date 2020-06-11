// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

replaceAllButton.addEventListener("click", function (){
    let currentTxt = findInput.value
    let replacementTxt = replaceInput.value
    for (let rowIndex = 0; rowIndex < rowElements.length; rowIndex += 1 ) {
        let cellArray = getCellElements(rowElements[rowIndex])
    for (let cellIndex = 0; cellIndex < cellArray.length; cellIndex += 1) {
        if (cellArray[cellIndex].innerText.includes(currentTxt)) {
            cellArray[cellIndex].innerHTML = cellArray[cellIndex].innerHTML.replace(currentTxt, replacementTxt)
        }
    }
    }
}
)

