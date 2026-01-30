// environment.example.js - Plantilla de configuración
// 📋 INSTRUCCIONES:
// Este archivo es una PLANTILLA que muestra la estructura necesaria.
// El archivo real 'enviroment.js' ya existe en tu proyecto.
//
// Si necesitas recrear el archivo de configuración:
// 1. Copia este archivo y renómbralo a 'enviroment.js'
// 2. Reemplaza los valores de ejemplo con tus credenciales reales
// 3. NUNCA subas el archivo 'enviroment.js' a repositorios públicos

const enviroment = {
    // API Key - Obtén tu clave de [nombre del servicio]
    API_KEY: 'YOUR_SECURE_API_KEY_HERE',

    // Cadena de conexión a base de datos
    DB_CONNECTION_STRING: 'YOUR_DB_CONNECTION_STRING_HERE',

    // URL del servidor API
    API_URL: 'https://api.ejemplo.com',

    // Timeout para peticiones (en milisegundos)
    TIMEOUT: 5000,

    // Ambiente de ejecución
    ENVIRONMENT: 'development' // 'development', 'staging', 'production'
};

// Objeto de configuración general (no sensible)
const CONFIG = {
    APP_NAME: 'Sistema de Registro de Usuarios',
    VERSION: '1.0.0',
    MAX_REGISTROS: 1000,
    FECHA_FORMATO: 'DD/MM/YYYY'
};
