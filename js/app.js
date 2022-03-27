function createNewToDoItem(toDoText) {
    var listItem = document.createElement("li")
    listItem.className = "list-group-item"

    var inputElement = document.createElement("input")
    inputElement.className = "form-check-input me-1"
    inputElement.type = "checkbox"
    inputElement.value = ""
    inputElement.ariaLabel = toDoText

    var text = document.createElement("span")
    text.innerText = toDoText
    listItem.appendChild(inputElement)
    listItem.appendChild(text)

    var listGroup = document.getElementById("list-group")
    listGroup.appendChild(listItem)
} 

function onClickNewItemButton() {
    var promptResponse = prompt('please enter a to do list item')
    createNewToDoItem(promptResponse)
}

document.getElementById("button-add-new-item").addEventListener("click", onClickNewItemButton)
