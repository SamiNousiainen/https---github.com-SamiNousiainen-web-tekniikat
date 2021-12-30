document.querySelector("button").addEventListener("click,", buttonClick)

let body = document.querySelector("body")
let user = document.getElementById("name")
let note = document.getElementById("note")
let checkbox = document.getElementById("important")

function buttonClick() {
    let h3 = document.createElement("h3")
    h3.textContent = user.value + " " + new Date().toLocaleString();
    let p = document.createElement("p")
    p.textContent = note.value

    if(checkbox.checked) {
        h3.classList.add("important")
        p.classList.add("important")
    }

    body.append(h3,p, document.createElement("hr"))
}

   

