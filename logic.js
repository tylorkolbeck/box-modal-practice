let boxModal = document.getElementById("box-modal-wrapper")

let inputs = [
    document.getElementById("padding-input"),
    document.getElementById("margin-input"),
    document.getElementById("border-input")
]

inputs.forEach(input => {
    input.addEventListener("input", updateStyling)
})

function updateStyling() {
    boxModal.style.margin = inputs[1].value
    boxModal.style.borderWidth = inputs[2].value
    boxModal.style.padding = inputs[0].value
}








