let h2 = document.querySelector("h2")
h2.textContent = "Let's manipulate some DOM again"

let hr = document.createElement("hr")
h2.parentElement.insertBefore(hr, h2)

let article = document.querySelector("article")
let p1 = article.firstElementChild
let p2 = article.lastElementChild
let temp = p1.textContent
p1.textContent = p2.textContent
p2.textContent = temp

let content = document.getElementById("content")
let ul = document.createElement("ul")
content.appendChild(ul)

for (let i = 1; i < 6; i++) {
    let li = createElement("li")
    li.textContent = "number" + i
    ul.appendChild(li)
}

let table = [document.createElement("table"),document.createElement("td")]
let rows = [document.createElement("tr"),document.createElement("td")]
let ths = [document.createElement("th"),document.createElement("td")]
let tds = [document.createElement("td"),document.createElement("td")]

ths[0].textContent = "first name"
ths[1].textContent = "last name"

tds[0].textContent = "john"
tds[1].textContent = "doe"

rows[0].appendChild(ths[0], ths[1])
rows[1].appendChild(tds[0], tds[1])

table.append(rows[0], rows[1])

document.getElementById("content").appendChild(table)

let elems = document.querySelectorAll("#content>*")

for (const e of elems) {
    let hr = document.createElement("hr")

    e.parentElement.insertBefore(hr, e)
}

elems = document.querySelectorAll("div>p:first-child")

for (const e of elems) {
    let span = document.createElement("")
}