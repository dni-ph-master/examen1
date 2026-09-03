// ============================================================
// SCRIPT COMPLETO - SIMULADOR DE INMUNOLOGÍA
// ============================================================

// ============================================================
// VARIABLES GLOBALES
// ============================================================
let preguntas = [];
let respuestas = [];
let preguntasMarcadas = [];
let preguntaActual = 0;
let timerSegundos = 0;
let timerInterval = null;
let examenFinalizado = false;
let reviewVisible = false;

// ============================================================
// CONFIGURACIÓN
// ============================================================
function actualizarCantidad() {
    const slider = document.getElementById('cantidad-slider');
    const display = document.getElementById('cantidad-display');
    if (slider && display) {
        display.textContent = slider.value;
    }
}

// ============================================================
// INICIAR EXAMEN
// ============================================================
function iniciarExamen() {
    console.log("🟢 Iniciando examen...");
    
    // Verificar que BANCO_PREGUNTAS existe
    if (typeof BANCO_PREGUNTAS === 'undefined') {
        alert("❌ Error: No se encontró el banco de preguntas.");
        console.error("❌ BANCO_PREGUNTAS no está definido");
        return;
    }
    
    if (BANCO_PREGUNTAS.length === 0) {
        alert("❌ Error: El banco de preguntas está vacío.");
        console.error("❌ BANCO_PREGUNTAS está vacío");
        return;
    }
    
    console.log("✅ Banco cargado con " + BANCO_PREGUNTAS.length + " preguntas");
    
    const cantidad = parseInt(document.getElementById('cantidad-slider').value);
    
    // Seleccionar preguntas aleatorias
    const shuffled = [...BANCO_PREGUNTAS].sort(() => Math.random() - 0.5);
    preguntas = shuffled.slice(0, cantidad);
    respuestas = new Array(cantidad).fill(null);
    preguntasMarcadas = new Array(cantidad).fill(false);
    preguntaActual = 0;
    examenFinalizado = false;
    
    // Mostrar examen
    document.getElementById('config-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('header-stats').classList.remove('hidden');
    
    document.getElementById('total-count').textContent = cantidad;
    
    // Iniciar temporizador
    timerSegundos = 0;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timerSegundos++;
        const mins = String(Math.floor(timerSegundos / 60)).padStart(2, '0');
        const secs = String(timerSegundos % 60).padStart(2, '0');
        document.getElementById('timer-display').textContent = mins + ':' + secs;
    }, 1000);
    
    cargarPregunta();
    actualizarMiniMapa();
    
    console.log("✅ Examen iniciado correctamente");
}

// ============================================================
// CARGAR PREGUNTA
// ============================================================
function cargarPregunta() {
    if (examenFinalizado || !preguntas || preguntas.length === 0) return;
    const p = preguntas[preguntaActual];
    if (!p) return;
    
    const total = preguntas.length;
    const respondidas = respuestas.filter(r => r !== null).length;
    
    // Actualizar progreso
    document.getElementById('progress-text').textContent = 'Pregunta ' + (preguntaActual + 1) + ' de ' + total;
    document.getElementById('progress-percent').textContent = Math.round(((preguntaActual + 1) / total) * 100) + '% Completado';
    document.getElementById('progress-bar').style.width = ((preguntaActual + 1) / total) * 100 + '%';
    document.getElementById('progress-counter').textContent = respondidas + '/' + total;
    document.getElementById('answered-count').textContent = respondidas;
    
    // Categoría y número
    document.getElementById('q-tag').textContent = p.tema || 'General';
    document.getElementById('q-number').textContent = 'Pregunta ' + (preguntaActual + 1) + '/' + total;
    
    // Texto de la pregunta
    document.getElementById('q-text').textContent = p.pregunta;
    
    // Opciones
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const letras = ['A', 'B', 'C', 'D', 'E'];
    const seleccionada = respuestas[preguntaActual];
    
    p.opciones.forEach((opcion, idx) => {
        const div = document.createElement('div');
        div.className = 'option-card' + (seleccionada === idx ? ' selected' : '');
        div.innerHTML = '<div class="option-letter">' + letras[idx] + '</div><span class="option-text">' + opcion.substring(3) + '</span>';
        div.onclick = function() { seleccionarOpcion(idx); };
        container.appendChild(div);
    });
    
    // Botón de acción
    const actionBtn = document.getElementById('action-btn');
    const actionText = document.getElementById('action-text');
    const actionIcon = document.getElementById('action-icon');
    
    if (seleccionada === null) {
        actionText.textContent = 'Seleccionar y avanzar';
        actionIcon.className = 'fa-solid fa-chevron-right';
        actionBtn.className = 'btn-action';
        actionBtn.onclick = function() {
            if (respuestas[preguntaActual] === null) {
                alert('Por favor selecciona una respuesta.');
                return;
            }
            if (preguntaActual < total - 1) {
                preguntaActual++;
                cargarPregunta();
                actualizarMiniMapa();
            } else {
                finalizarExamen();
            }
        };
    } else if (preguntaActual === total - 1) {
        actionText.textContent = 'Finalizar Examen';
        actionIcon.className = 'fa-solid fa-flag-checkered';
        actionBtn.className = 'btn-action btn-finish';
        actionBtn.onclick = finalizarExamen;
    } else {
        actionText.textContent = 'Siguiente';
        actionIcon.className = 'fa-solid fa-chevron-right';
        actionBtn.className = 'btn-action';
        actionBtn.onclick = function() {
            if (preguntaActual < total - 1) {
                preguntaActual++;
                cargarPregunta();
                actualizarMiniMapa();
            }
        };
    }
    
    document.getElementById('prev-btn').disabled = preguntaActual === 0;
    
    const flagIcon = document.querySelector('#flag-btn i');
    if (flagIcon) {
        if (preguntasMarcadas[preguntaActual]) {
            flagIcon.className = 'fa-solid fa-flag';
        } else {
            flagIcon.className = 'fa-regular fa-flag';
        }
    }
    
    actualizarMiniMapa();
}

function seleccionarOpcion(idx) {
    if (examenFinalizado) return;
    if (respuestas[preguntaActual] === idx) {
        respuestas[preguntaActual] = null;
    } else {
        respuestas[preguntaActual] = idx;
    }
    cargarPregunta();
    actualizarMiniMapa();
}

function prevQuestion() {
    if (preguntaActual > 0) {
        preguntaActual--;
        cargarPregunta();
        actualizarMiniMapa();
    }
}

function marcarPregunta() {
    if (examenFinalizado) return;
    preguntasMarcadas[preguntaActual] = !preguntasMarcadas[preguntaActual];
    cargarPregunta();
    actualizarMiniMapa();
}

function actualizarMiniMapa() {
    const container = document.getElementById('mini-map');
    if (!container) return;
    container.innerHTML = '';
    if (!preguntas || preguntas.length === 0) return;
    
    preguntas.forEach(function(_, idx) {
        const btn = document.createElement('div');
        btn.className = 'mini-btn';
        btn.textContent = idx + 1;
        if (idx === preguntaActual) btn.classList.add('current');
        if (respuestas[idx] !== null) btn.classList.add('answered');
        if (preguntasMarcadas[idx]) btn.classList.add('flagged');
        btn.onclick = function() {
            preguntaActual = idx;
            cargarPregunta();
            actualizarMiniMapa();
        };
        container.appendChild(btn);
    });
}

// ============================================================
// FINALIZAR EXAMEN
// ============================================================
function finalizarExamen() {
    if (examenFinalizado) return;
    examenFinalizado = true;
    if (timerInterval) clearInterval(timerInterval);
    
    const sinResponder = respuestas.filter(function(r) { return r === null; }).length;
    if (sinResponder > 0) {
        if (!confirm('⚠️ Tienes ' + sinResponder + ' preguntas sin responder. ¿Deseas finalizar de todas formas?')) {
            examenFinalizado = false;
            cargarPregunta();
            return;
        }
    }
    
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    
    let correctas = 0;
    preguntas.forEach(function(p, idx) {
        if (respuestas[idx] === p.correcta) correctas++;
    });
    
    const total = preguntas.length;
    const porcentaje = Math.round((correctas / total) * 100);
    
    document.getElementById('final-score').textContent = correctas + '/' + total;
    document.getElementById('final-percent').textContent = porcentaje + '%';
    document.getElementById('final-correct').textContent = correctas;
    
    const mins = String(Math.floor(timerSegundos / 60)).padStart(2, '0');
    const secs = String(timerSegundos % 60).padStart(2, '0');
    document.getElementById('final-time').textContent = mins + ':' + secs;
    
    let icono, titulo, subtitulo;
    if (porcentaje >= 80) {
        icono = '🏆';
        titulo = '¡Excelente desempeño!';
        subtitulo = 'Dominas la inmunología a nivel avanzado. ¡Sigue así!';
    } else if (porcentaje >= 60) {
        icono = '📚';
        titulo = '¡Buen trabajo!';
        subtitulo = 'Tienes una base sólida. Revisa los temas donde fallaste.';
    } else if (porcentaje >= 40) {
        icono = '📖';
        titulo = 'Necesitas repasar';
        subtitulo = 'Te recomendamos revisar los conceptos fundamentales de inmunología.';
    } else {
        icono = '🔄';
        titulo = 'Es momento de estudiar';
        subtitulo = 'No te desanimes. Revisa el material y vuelve a intentarlo.';
    }
    
    document.getElementById('result-icon').textContent = icono;
    document.getElementById('result-title').textContent = titulo;
    document.getElementById('result-subtitle').textContent = subtitulo;
}

// ============================================================
// REVISIÓN DE RESPUESTAS
// ============================================================
function toggleReview() {
    reviewVisible = !reviewVisible;
    const section = document.getElementById('review-section');
    const btn = document.getElementById('review-toggle-btn');
    
    if (reviewVisible) {
        section.classList.remove('hidden');
        btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Ocultar Respuestas';
        construirRevision();
    } else {
        section.classList.add('hidden');
        btn.innerHTML = '<i class="fa-solid fa-eye"></i> Ver Respuestas';
    }
}

function construirRevision() {
    const container = document.getElementById('review-container');
    container.innerHTML = '';
    
    preguntas.forEach(function(p, idx) {
        const esCorrecta = respuestas[idx] === p.correcta;
        const respondida = respuestas[idx] !== null;
        
        const div = document.createElement('div');
        div.className = 'review-item' + (esCorrecta ? ' correct' : ' incorrect');
        
        let respuestaUsuario = 'No respondida';
        if (respondida) {
            respuestaUsuario = p.opciones[respuestas[idx]];
        }
        const respuestaCorrecta = p.opciones[p.correcta];
        
        div.innerHTML = `
            <div class="review-header">
                <span class="review-header-status ${esCorrecta ? 'correct' : 'incorrect'}">
                    ${esCorrecta ? '✅' : '❌'} Pregunta ${idx + 1}
                </span>
                <span class="review-tema">${p.tema || 'General'}</span>
            </div>
            <p class="review-pregunta">${p.pregunta}</p>
            <div class="review-details">
                <strong>Tu respuesta:</strong> ${respuestaUsuario}
                <br />
                <strong>Correcta:</strong> ${respuestaCorrecta}
            </div>
            <div class="review-explicacion">${p.explicacion}</div>
        `;
        container.appendChild(div);
    });
}

function reiniciar() {
    if (timerInterval) clearInterval(timerInterval);
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('review-section').classList.add('hidden');
    document.getElementById('config-screen').classList.remove('hidden');
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('header-stats').classList.add('hidden');
    reviewVisible = false;
    document.getElementById('review-toggle-btn').innerHTML = '<i class="fa-solid fa-eye"></i> Ver Respuestas';
    examenFinalizado = false;
}

function mezclarTodo() {
    if (document.getElementById('exam-screen').classList.contains('hidden')) return;
    if (!preguntas || preguntas.length === 0) return;
    
    const indices = preguntas.map(function(_, i) { return i; });
    const shuffledIndices = indices.sort(function() { return Math.random() - 0.5; });
    const nuevasPreguntas = shuffledIndices.map(function(i) { return preguntas[i]; });
    const nuevasRespuestas = shuffledIndices.map(function(i) { return respuestas[i]; });
    const nuevasMarcadas = shuffledIndices.map(function(i) { return preguntasMarcadas[i]; });
    preguntas = nuevasPreguntas;
    respuestas = nuevasRespuestas;
    preguntasMarcadas = nuevasMarcadas;
    preguntaActual = 0;
    cargarPregunta();
    actualizarMiniMapa();
}

// ============================================================
// INICIO
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM cargado');
    actualizarCantidad();
    console.log('✅ Script cargado correctamente');
    
    if (typeof BANCO_PREGUNTAS !== 'undefined' && BANCO_PREGUNTAS.length > 0) {
        document.getElementById('total-preguntas-banco').textContent = BANCO_PREGUNTAS.length;
        console.log('✅ Banco de ' + BANCO_PREGUNTAS.length + ' preguntas disponible');
    } else {
        console.warn('⚠️ Banco de preguntas no disponible');
    }
});