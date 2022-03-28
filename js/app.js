function newTestimonial(testimonialQuote) {
    var testimonialAdd = document.createElement("p")
    testimonialAdd.className = "newQuote"

    var inputElement = document.createElement("input")
    inputElement.className = "p"
    inputElement.value = ""
    inputElement.placeholder = testimonialQuote

    var text = document.createElement("span")
    text.innerText = testimonialQuote
    testimonialAdd.appendChild(inputElement)
    testimonialAdd.appendChild(promptResponse)

    var newQuote = document.getElementById("container")
    newQuote.appendChild(testimonialQuote)
} 

function onClickNewTestimonial() {
    var promptResponse = prompt('Please share your experience')
    createNewQuote(promptResponse)
}

document.getElementById("new-testimonial").addEventListener("click", onClickNewTestimonial)
