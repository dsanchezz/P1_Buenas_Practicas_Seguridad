//Ajuste de la definición de variables de var a const y let para mejorar la seguridad y evitar redeclaraciones accidentales.

let registros = [];
let contador = 0;

const API_KEY = enviroment.API_KEY; //Clave de API sensible.
const DB_CONNECTION_STRING = enviroment.DB_CONNECTION_STRING; //Cadena de conexión sensible.

//Eliminación de credenciales hardcodeadas por seguridad y la configuración sensible del sistema.

// Función principal de inicialización
function inicializar() {

    //Eliminación de impresiones de consola por seguridad.

    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function (e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();

            this.classList.add('was-validated');
        } else {
            e.preventDefault();
            guardarRegistro();
            this.classList.remove('was-validated');
        }
    });

}

// Función para validar que los campos no estén vacíos
function validarCampos(nombre, apellido1, apellido2, telefono, curp, email) {
    // Validar que ningún campo esté vacío o solo contenga espacios
    if (!nombre || nombre.trim() === '') {
        alert('⚠️ El campo Nombre es obligatorio');
        return false;
    }
    if (!apellido1 || apellido1.trim() === '') {
        alert('⚠️ El campo Primer Apellido es obligatorio');
        return false;
    }
    if (!apellido2 || apellido2.trim() === '') {
        alert('⚠️ El campo Segundo Apellido es obligatorio');
        return false;
    }
    if (!telefono || telefono.trim() === '') {
        alert('⚠️ El campo Teléfono es obligatorio');
        return false;
    }
    if (!curp || curp.trim() === '') {
        alert('⚠️ El campo CURP es obligatorio');
        return false;
    }
    if (!email || email.trim() === '') {
        alert('⚠️ El campo Correo Electrónico es obligatorio');
        return false;
    }

    // Validaciones adicionales de formato
    if (telefono.length !== 10) {
        alert('⚠️ El teléfono debe tener exactamente 10 dígitos');
        return false;
    }
    if (curp.length !== 18) {
        alert('⚠️ El CURP debe tener exactamente 18 caracteres');
        return false;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('⚠️ El formato del correo electrónico no es válido');
        return false;
    }

    return true;
}

// Función para guardar un registro
function guardarRegistro() {
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido1 = document.getElementById('apellido1').value;
    const apellido2 = document.getElementById('apellido2').value;
    const telefono = document.getElementById('telefono').value;
    const curp = document.getElementById('curp').value;
    const email = document.getElementById('email').value;

    //Se eliminaron las impresiones de consola de los datos del formulario por seguridad.

    // Validar campos antes de procesar (prevención de filas vacías)
    if (!validarCampos(nombre, apellido1, apellido2, telefono, curp, email)) {
        return; // Detener ejecución si la validación falla
    }

    // Crear objeto de registro
    const nuevoRegistro = {
        id: contador++,
        nombre: nombre.trim(),
        apellido1: apellido1.trim(),
        apellido2: apellido2.trim(),
        nombreCompleto: nombre.trim() + " " + apellido1.trim() + " " + apellido2.trim(),
        telefono: telefono.trim(),
        curp: curp.trim().toUpperCase(), // CURP siempre en mayúsculas
        email: email.trim().toLowerCase(), // Email en minúsculas
        fechaRegistro: new Date().toISOString(),
        //Eliminación de API Key en el objeto por seguridad.
    };


    // Agregar al arreglo global
    registros.push(nuevoRegistro);

    //Eliminación de impresión de consola del arreglo completo por seguridad.

    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);

    // Limpiar formulario
    document.getElementById('registroForm').reset();

    //Eliminación de impresión de consola de confirmación por seguridad y del ID.

    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// Función para agregar fila a la tabla (protegida contra XSS)
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');

    // Crear elementos DOM de forma segura (prevención de XSS)
    var nuevaFila = document.createElement('tr');

    // Crear celdas y agregar contenido como texto (no HTML)
    var celdaNombre = document.createElement('td');
    celdaNombre.textContent = registro.nombreCompleto; // textContent previene XSS

    var celdaTelefono = document.createElement('td');
    celdaTelefono.textContent = registro.telefono;

    var celdaCurp = document.createElement('td');
    celdaCurp.textContent = registro.curp;

    var celdaEmail = document.createElement('td');
    celdaEmail.textContent = registro.email;

    // Agregar celdas a la fila
    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaTelefono);
    nuevaFila.appendChild(celdaCurp);
    nuevaFila.appendChild(celdaEmail);

    // Agregar fila a la tabla de forma segura
    tabla.appendChild(nuevaFila);

    //Eliminación de innerHTML por seguridad (vulnerabilidad XSS).
}

// Función que simula envío a servidor
function enviarAServidor(datos) {

    setTimeout(function () {
        console.log("Respuesta del servidor: 200 OK");
    }, 1000);
}

//Se eliminó la función de restaurar registros por seguridad.

// Eliminación de la Función de diagnóstico (expone información del sistema)

// Eliminación de la llamada de la Función diagnosticoSistema() para generar token de sesión (exposición de datos sensibles).

//Eliminacion de código innecesario comentado por seguridad.

// Eliminación de la variable porque no se usa más adelante.


window.addEventListener('DOMContentLoaded', function () {
    inicializar();

    // Exponer solo datos no sensibles para debugging
    window.registros = registros;

    //Eliminación de exposición de credenciales (API_KEY, DB_CONNECTION_STRING, CONFIG) por seguridad.
});



//Eliminación de código innecesario comentado por seguridad.