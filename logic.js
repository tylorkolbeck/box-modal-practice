


let boxModal = document.getElementById("box-modal-wrapper")
let paddingInput = document.getElementById("padding-input")
let marginInput = document.getElementById("margin-input")
let borderInput = document.getElementById("border-input")


// Styles 
let margin = window.getComputedStyle(boxModal).margin
let padding = window.getComputedStyle(boxModal).padding
let border = window.getComputedStyle(boxModal).border

// Set input values
paddingInput.value = padding
marginInput.value = margin
borderInput.value = border.split(' ')[0]

// Event Listener Functions
function updatePadding() {
    boxModal.setAttribute("style", `padding: ${paddingInput.value};`)
}

function updateMargin() {
    boxModal.setAttribute("style", `margin: ${marginInput.value};`)
}

function updateBorder() {
    boxModal.setAttribute("style", `border-width: ${borderInput.value};`)
}

paddingInput.addEventListener("input", updatePadding, true)
marginInput.addEventListener("input", updateMargin, true)
borderInput.addEventListener("input", updateBorder, true)





