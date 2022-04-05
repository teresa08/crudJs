const containerIntancias = [];

const valorInput = {
    nombre: document.getElementById('nombre'),
    para: document.getElementById('para'),
    asunto: document.getElementById('asunto')
}

function valoresInputs (){
    return valorInput
}
function intancias (u){
    let nuevaIntancia = new User(valorInput.nombre.value,valorInput.para.value,valorInput.asunto.value)
    containerIntancias.push(nuevaIntancia)
    // console.log(containerIntancias)
}

function retuArreglo (){
    return containerIntancias
}

