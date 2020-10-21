document.body.onkeyup = function(e){
console.log(e.keyCode)

if(e.key == "d"){
document.body.classList.toggle("dark");

}
}