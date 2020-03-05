let boxModal = document.getElementById("box-modal-wrapper")
let paddingInput = document.getElementById("padding-input")
let marginInput = document.getElementById("margin-input")
let borderInput = document.getElementById("border-input")

// Styles 
let margin = window.getComputedStyle(boxModal).margin
let padding = window.getComputedStyle(boxModal).padding
let border = window.getComputedStyle(boxModal).borderWidth

function updateStyling() {
    boxModal.style.margin = marginInput.value
    boxModal.style.borderWidth = borderInput.value
    boxModal.style.padding = paddingInput.value
}

paddingInput.addEventListener("input", updateStyling)
marginInput.addEventListener("input", updateStyling)
borderInput.addEventListener("input", updateStyling)





