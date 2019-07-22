"use script"
function myFunction() {
    var inpobj = document.getElementById("id1")
    if (!inpobj.checkValidity()) {
        document.getElementById("num").innerHTML = inpobj.validationMessage;
    } else {
        document.getElementById("num").innerHTML = "Correct";
    }
}