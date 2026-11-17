document.getElementById('btnCalcular').addEventListener('click', function () {
    // 1. Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const cal1Texto = document.getElementById('cal1').value.trim();
    const cal2Texto = document.getElementById('cal2').value.trim();
    const cal3Texto = document.getElementById('cal3').value.trim();

    // A. Validación de información
    if (nombre === '') {
        alert('Por favor, ingresa el nombre del estudiante.');
        return;
    }

    if (cal1Texto === '' || cal2Texto === '' || cal3Texto === '') {
        alert('Por favor, ingresa las tres calificaciones.');
        return;
    }

    const cal1 = parseFloat(cal1Texto);
    const cal2 = parseFloat(cal2Texto);
    const cal3 = parseFloat(cal3Texto);

    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        alert('Asegúrate de que todas las calificaciones sean números válidos.');
        return;
    }

    if (
        cal1 < 0 || cal1 > 10 ||
        cal2 < 0 || cal2 > 10 ||
        cal3 < 0 || cal3 > 10
    ) {
        alert('Las calificaciones deben estar en un rango de 0 a 10.');
        return;
    }

    // B. Calcular el promedio
    const promedio = (cal1 + cal2 + cal3) / 3;
    // Redondeamos a un decimal para evaluar los rangos de la tabla con precisión
    const promedioRedondeado = Math.round(promedio * 10) / 10;

    // C. Determinar el resultado (APROBADO o REPROBADO)
    let estado = '';
    let claseEstado = '';

    if (promedioRedondeado >= 6 && promedioRedondeado <= 10) {
        estado = 'APROBADO';
        claseEstado = 'aprobado';
    } else {
        estado = 'REPROBADO';
        claseEstado = 'reprobado';
    }

    // D. Mostrar una observación según el promedio
    let observacion = '';

    if (promedioRedondeado >= 9 && promedioRedondeado <= 10) {
        observacion = 'Excelente desempeño';
    } else if (promedioRedondeado >= 8 && promedioRedondeado <= 8.9) {
        observacion = 'Muy buen desempeño';
    } else if (promedioRedondeado >= 7 && promedioRedondeado <= 7.9) {
        observacion = 'Buen desempeño';
    } else if (promedioRedondeado >= 6 && promedioRedondeado <= 6.9) {
        observacion = 'Desempeño suficiente';
    } else {
        observacion = 'Necesita mejorar';
    }

    // 4. Presentar los resultados en la página web
    const contenedorResultado = document.getElementById('resultado');
    contenedorResultado.style.display = 'block';
    contenedorResultado.innerHTML = `
        <h3>Resultados de la evaluación</h3>
        <p><strong>Estudiante:</strong> ${nombre}</p>
        <p><strong>Calificaciones:</strong> ${cal1}, ${cal2}, ${cal3}</p>
        <p><strong>Promedio obtenido:</strong> ${promedio.toFixed(2)}</p>
        <p><strong>Estado:</strong> <span class="${claseEstado}">${estado}</span></p>
        <p><strong>Observación:</strong> ${observacion}</p>
    `;
});