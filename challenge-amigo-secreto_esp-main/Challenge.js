// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema. Crear README

//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let nuevoElementoInput = document.getElementById('amigo');
let resultadoList = document.getElementById('resultado');

let amigos = []; // Array para almacenar los elementos

function agregarAmigo() {
    const nombre = nuevoElementoInput.value.trim(); // Obtener el valor de la caja de texto y eliminar espacios en blanco

    if (nombre !== '') {
        amigos.push(nombre); // Agregar el nombre a la lista
        console.log(amigos); // Mostrar la lista en la consola
        nuevoElementoInput.value = ''; // Limpiar la caja de texto
    } else {
        resultadoList.innerHTML = 'Por favor, inserte un nombre.';
    }
}

//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> 
// dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos
function mostrarAmigos() {
    listaAmigos.innerHTML = ''; // Para Limpiar la lista antes de agregar nuevos elementos
    amigos.forEach(amigo => {
        const nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = amigo;
        listaAmigos.appendChild(nuevoNombre);
    });
};


//Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos.
//  Usa Math.random() y Math.floor() para obtener un índice aleatorio.

function sortearAmigo() {
//Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
    
    let TotalAmigos = Math.floor(Math.random() * amigos.length);
    let AmigoElegido = amigos[TotalAmigos];
//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
        if (amigos.length === 0) {
            resultadoList.innerHTML = 'No Quedan Amigos por sortear';
            return; // Salir de la función si es que se cumple
            } else {
//Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
            while (true){console.log (`Se ha escogido a ${AmigoElegido}`);
            resultadoList.innerHTML = `¡Has sorteado a ${AmigoElegido}!`;
// Eliminar amigo sorteado
            amigos.splice(TotalAmigos, 1); 
            break;
            }
        }
    }

