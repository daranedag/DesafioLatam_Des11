const ele = document.getElementById("ele1")
const color = 'yellow'

ele.style.backgroundColor = 'green'
ele.addEventListener("click", function(){
    pintar(ele, color)
});

function pintar(elem, color){
    elem.style.backgroundColor = color
}