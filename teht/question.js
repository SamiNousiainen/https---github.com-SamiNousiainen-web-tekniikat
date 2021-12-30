//create http request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://yesno.wtf/api/", true);
//send request
xmlhttp.send();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
        let answerObject = JSON.parse(xmlhttp.response);
        document.getElementById("answer").innerHTML = answerObject.answer;
        document.getElementById("answer-img").setAttribute('src', answerObject.image);
    }
}