/**
 * 🔢 Estructura Secuencial: Calcula la nota final siguiendo una secuencia fija de pasos.
 * @param {number} correctas - Número de respuestas correctas.
 * @param {number} incorrectas - Número de respuestas incorrectas.
 * @param {number} valorPregunta - Puntos por respuesta correcta.
 * @param {number} penalizacion - Puntos restados por respuesta incorrecta.
 * @returns {string} El resultado del cálculo.
 */
function calcularNotaFinal(correctas, incorrectas, valorPregunta, penalizacion) {
    // Paso 1: Cálculo de puntos brutos (Secuencial)
    let puntosBrutos = correctas * valorPregunta;
    
    // Paso 2: Cálculo de penalización (Secuencial)
    let puntosPenalizados = incorrectas * penalizacion;
    
    // Paso 3: Nota final (Secuencial)
    let notaFinal = puntosBrutos - puntosPenalizados;
    
    // El proceso se imprime en la consola del navegador (F12) para fines educativos
    console.log(`--- Algoritmo Secuencial ---`);
    console.log(`Paso 1: Puntos Brutos = ${correctas} * ${valorPregunta} = ${puntosBrutos}`);
    console.log(`Paso 2: Penalización = ${incorrectas} * ${penalizacion} = ${puntosPenalizados}`);
    console.log(`Paso 3: Nota Final = ${puntosBrutos} - ${puntosPenalizados} = ${notaFinal}`);
    
    return `La Nota Final es: <strong>${notaFinal}</strong> puntos.`;
}

/**
 * Función que obtiene los valores de la interfaz y ejecuta el algoritmo.
 */
function ejecutarCalculo() {
    // Obtener valores de la interfaz (Secuencial)
    const correctas = parseInt(document.getElementById('correctas').value);
    const incorrectas = parseInt(document.getElementById('incorrectas').value);
    const valorPregunta = parseInt(document.getElementById('valorPregunta').value);
    const penalizacion = parseInt(document.getElementById('penalizacion').value);

    // Ejecutar el algoritmo Secuencial (Secuencial)
    const resultado = calcularNotaFinal(correctas, incorrectas, valorPregunta, penalizacion);
    
    // Mostrar el resultado en la interfaz (Secuencial)
    document.getElementById('resultado-nota').innerHTML = resultado;
}