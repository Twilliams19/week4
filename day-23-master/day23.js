function processInput(event){
    event.preventDefault();
    var input = document.forms["myForm"]['firstName'].value;
    document.getElementById("text").innerHTML = input;
    

}
window.onload = function(){
    document.forms["myForm"].addEventListener("submit", processInput) 
}