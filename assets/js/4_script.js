const div1 = document.getElementById("divblue");
const div2 = document.getElementById("divred");
const div3 = document.getElementById("divgreen");
const div4 = document.getElementById("divyellow");
const nuevoColor = 'black'

div1.addEventListener("click", function(){
    cambiarColor(div1, nuevoColor)
})
div2.addEventListener("click", function(){
    cambiarColor(div2, nuevoColor)
})
div3.addEventListener("click", function(){
    cambiarColor(div3, nuevoColor)
})
div4.addEventListener("click", function(){
    cambiarColor(div4, nuevoColor)
})


function cambiarColor(div, color){
    div.style.backgroundColor = color
}

