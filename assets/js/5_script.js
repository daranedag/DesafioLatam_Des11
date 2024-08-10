const div1 = document.getElementById("key")
let colorGlobal = "white"
let color = "black"

document.addEventListener('keydown', function(event){
    if (event.key === 'a'){
        colorGlobal = 'pink'
        cambiarColor(div1, colorGlobal)
    }
    else if(event.key === 's'){
        colorGlobal = 'orange'
        cambiarColor(div1, colorGlobal)
    }
    else if(event.key === 'd'){
        colorGlobal = 'lightblue'
        cambiarColor(div1, colorGlobal)
    }
    else if(event.key === 'q'){
        color = 'purple'
        const ele = crearElemento()
        cambiarColor(ele, color)
    }
    else if(event.key === 'w'){
        color = 'grey'
        const ele = crearElemento()
        cambiarColor(ele, color)
    }
    else if(event.key === 'e'){
        color = 'brown'
        const ele = crearElemento()
        cambiarColor(ele, color)
    }
    else{
        colorGlobal = 'white'
        cambiarColor(div1, colorGlobal)
    }
})

function cambiarColor(div, color){
    div.style.backgroundColor = color
}
function crearElemento(){
    const elem = document.createElement("div")
    elem.style.height='200px'
    elem.style.width='200px'
    div1.after(elem)
    return elem
}
