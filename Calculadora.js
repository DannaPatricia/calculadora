

//ESTOS SON METODOS/ FUNCIONES DE ACCION
//ESTOS METODOS PERMITEN AÑADIR UNA ACCION A LOS DOM (DOCUMENT OBJECT MODEL)
//Con .addEventListener() se pueden añadir fácilmente múltiples funcionalidades.
//Con .removeEventListener() se puede eliminar una funcionalidad previamente añadida.
//ESTOS SON FUNCIONES QUE SE EJECUTAN EN UN EVENTO ESPECIFICO EN UN ELEMENTO INDICADO

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//.addEventListener(event,func)	Escucha el evento event, y si ocurre, ejecuta func.
//.addEventListener(event,func,options)	Idem, pasándole ciertas opciones.

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//const button = document.querySelector("button");
//document.querySelectorAll(".boton") --> selecciona todos los elementos con la clase "boton". Devuelve una NodeList, que es similar a un array, pero no exactamente lo mismo.
//LA DIFERENCIA ENTRE EL QUERYSELECTOR Y EL SELECTOR ALL ES QUE CON EL SELECTOR SOLOO SELCCIONA EL PRIMER ELEMENTO QUE COINCIDA
//MIENTRAS EL SELECTORALL SELECCIONA TODOS LOS ELEMENTOS QUE COINCIDAN

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//FUNCIONES ANONIMAS QUE NO SE DEFINEN CON UN NOMBRE
//button.addEventListener("click", function() {
//  alert("Hello!");
//});
//const button = document.querySelector("button");
//
//button.addEventListener("click", () => alert("Hello!"));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//const button = document.querySelector("button");
//    1. document: Es un objeto global que representa el documento HTML cargado en la ventana. Proporciona métodos para interactuar con el contenido del documento.
//    2. querySelector(): Es un método del objeto document que permite seleccionar el primer elemento que coincida con un selector CSS especificado. Devuelve el primer elemento que cumpla con el selector CSS o null si no encuentra ningún elemento que coincida.
//    3. "button": Es el selector CSS que se utiliza para seleccionar elementos <button> del documento.
//    4. const button: Declara una constante llamada button que almacenará el elemento <button> seleccionado.

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//EL INT ES UN OBJETO, CUANDO USAMOS LA FUNCION SIGUIENTE LO QUE HACEMOS ES GENERAR
//UNA COPIA DEL ORIGINAL
//AL SUMAR ME LO TRATA COMO CADENA Y CONCATENA LOS VALORES
//PARA ELLO SE USARA parseInt(num1)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//        .TEXTCONTENT, ES UNA PROPIEDAD QUE:
//textContent para acceder a la información de texto que contiene, sino también para reemplazar su contenido, 
//simplemente asignándolo como si fuera una variable o constante.
const pantallaCalculadora = document.querySelector("#pantalla");
const botones = document.querySelectorAll(".boton");
botones.forEach(btn => {
    btn.addEventListener("click", () => {
        const botonDado = btn.textContent;
        var numero = parseInt(botonDado);
        if (numero === 0 || botonDado === "." || botonDado === " * " || botonDado === " / " || botonDado === " + " || botonDado === " - ") {
            pantallaCalculadora.textContent += botonDado;
        }
        if (pantallaCalculadora.textContent === "0" || pantallaCalculadora.textContent === "ERROR") {
            if (numero > 0 && numero <= 9) {
                pantallaCalculadora.textContent = "";
                pantallaCalculadora.textContent = botonDado;
            } else if (botonDado === "C" || botonDado === "DE" || botonDado === "=") {
                pantallaCalculadora.textContent = "0";
            }
        } else {
            calcular(numero, botonDado);
        }
    });
});

function calcular(numero, botonDado) {
    if (numero > 0 && numero <= 9) {
        pantallaCalculadora.textContent += botonDado;
    }
    if (botonDado === "C") {
        pantallaCalculadora.textContent = "0";
    } else if (botonDado === "DE") {
        borrar();
    }
    if (botonDado === "=") {
        try {
            pantallaCalculadora.textContent = eval(pantallaCalculadora.textContent);
        } catch {
            pantallaCalculadora.textContent = "ERROR";
        }
    }
}

function borrar() {
    var texto = pantallaCalculadora.innerText;
    var array2 = [];
    if (texto.length === 1) {
        pantallaCalculadora.textContent = "0";
    } else {
        for (var i = 0; i < texto.length - 1; i++) {
            array2[i] = texto.charAt(i);
        }
        texto = array2.join('');
        pantallaCalculadora.textContent = texto;
    }
}