
function init()
{
const button = document.querySelectorAll(".control");
const resultado = document.getElementById("resultado");
const clear = document.getElementById("clear");
const igual = document.getElementById("igual");
const porcentaje = document.getElementById("porcentaje");
const raiz = document.getElementById("raiz");

button.forEach(button=>{
    button.addEventListener("click",_=>{
        resultado.value += button.value
    })
})
igual.addEventListener("click",_=>{
    try {
        resultado.value = eval(resultado.value)
    } catch (error) {
        resultado.value = ""
    }
}) 
clear.addEventListener("click",_=>{
    resultado.value = ""
})
porcentaje.addEventListener("click",_=>{
    resultado.value = resultado.value*10/1000
})
raiz.addEventListener("click",_=>{
    resultado.value = Math.sqrt(resultado.value)
})

}

