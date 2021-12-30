let courses = [];
document.querySelector("button").addEventListener("click", addCourse)
document.getElementById("show").addEventListener("click", showAll)


function addCourse() {
    let cname = document.getElementById("course").value
    let num = document.getElementById("number").value

    let course = {
        course_name: cname,
        student_num: num
    }
    courses.push(course)
}

function showAll() {
    courses.forEach(course => {
        let li = document.createElement("li")
        li.textContent = "Course " + course.course_name + " has " + course.student_num + " students registered.";
        document.querySelector("ul").appendChild(li)
    })
}