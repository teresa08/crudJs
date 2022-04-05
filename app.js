let btn = document.getElementById('enviar');
let bodyTable = document.getElementById('tbody');

btn.onclick = () => {
    intancias()
    clearTable()
    filter()
    vaciarInput()
};

function tbody(valor, i) {
    let tr = document.createElement('tr');

    let tdName = document.createElement('td');
    tdName.textContent = valor.nombre

    let tdFor = document.createElement('td');
    tdFor.textContent = valor.para

    let tdAsunto = document.createElement('td');
    tdAsunto.textContent = valor.asunto

    let tdDilite = document.createElement('td');
    let iDelite = document.createElement('i');
    iDelite.className = 'btn fa fa-trash text-danger';

    iDelite.onclick = () => {
        eliminar(i)
        clearTable()
        filter()
    }

    let tdEditar = document.createElement('td');
    let iEditar = document.createElement('i')
    iEditar.className = 'btn fa fa-pen'
    iEditar.onclick = () => {
        editar(valor)
        btn.textContent = 'Actualizar datos'
        btn.onclick = () => {
            cambiarDatos(i, valorInput.nombre.value, valorInput.para.value, valorInput.asunto.value)
            clearTable()
            filter()
            btn.textContent = 'Enviar datos'
           vaciarInput()
        }
    }


    if (btn.textContent === 'Actualizar datos') {
     
    }

    tdDilite.appendChild(iDelite)
    tdEditar.appendChild(iEditar)

    tr.append(tdName, tdFor, tdAsunto, tdDilite, tdEditar)

    return tr
}

let valorArray = retuArreglo();

function filter() {
    valorArray.forEach((valor, i) => {
        bodyTable.append(tbody(valor, i))
        console.log(i)
    })
};

function clearTable() {
    bodyTable.innerHTML = ''
};

function eliminar(i) {
    valorArray.splice(i, 1)
}

function editar(i) {
    valorInput.nombre.value = i.nombre;
    valorInput.para.value = i.para
    valorInput.asunto.value = i.asunto
}

function cambiarDatos(i, nombre, para, asunto) {
    containerIntancias[i].nombre = nombre
    containerIntancias[i].para = para
    containerIntancias[i].asunto = asunto
}

function vaciarInput (){
    valorInput.nombre.value = ''
    valorInput.para.value = ''
    valorInput.asunto.value = ''
}