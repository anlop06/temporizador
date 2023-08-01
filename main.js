// Obtener la fecha y hora actual
function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    document.getElementById('datetime').innerText = formattedDateTime;
}

// Función para actualizar el marcador
function updateScore(teamNum, scoreIncrement) {
    const scoreElement = document.getElementById(`team${teamNum}Score`);
    const currentScore = parseInt(scoreElement.innerText);
    const updatedScore = currentScore + scoreIncrement;
    scoreElement.innerText = updatedScore;
}

// Función para actualizar el número de faltas
function updateFouls(teamNum, foulsIncrement) {
    const foulsElement = document.getElementById(`team${teamNum}Fouls`);
    const currentFouls = parseInt(foulsElement.innerText.replace('Faltas: ', ''));
    const updatedFouls = currentFouls + foulsIncrement;
    foulsElement.innerText = `Faltas: ${updatedFouls}`;
}

// Función para cambiar el nombre de los equipos
function updateTeamName(teamNum) {
    const teamNameElement = document.getElementById(`team${teamNum}Name`);
    const newTeamName = teamNameElement.innerText;
    document.getElementById(`team${teamNum}Name`).innerText = newTeamName;
}

// Variables para el temporizador
let seconds = 5400; // 5400 segundos (90 minutos)
let isTimerRunning = false;
let countdownInterval;

// Función para actualizar el temporizador
function updateTimer() {
    if (seconds > 0 && isTimerRunning) {
        seconds--;
        const minutes = Math.floor(seconds / 60);
        const secondsRemainder = seconds % 60;
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(secondsRemainder).padStart(2, '0')}`;
        document.getElementById('timer').innerText = formattedTime;
    }
}

// Función para iniciar el temporizador
function startTimer() {
    isTimerRunning = true;
    clearInterval(countdownInterval);
    countdownInterval = setInterval(updateTimer, 1000);
}

// Función para pausar el temporizador
function pauseTimer() {
    isTimerRunning = false;
}

// Función para cambiar el valor del período al hacer clic en el número
function changePeriod() {
    const currentPeriod = parseInt(document.getElementById('currentPeriod').innerText);
    document.getElementById('currentPeriod').innerText = currentPeriod + 1;
}

// Asignar eventos para actualizar el marcador y las faltas
document.getElementById('team1Score').onclick = function() {
    updateScore(1, 1);
};
document.getElementById('team2Score').onclick = function() {
    updateScore(2, 1);
};
document.getElementById('team1Fouls').onclick = function() {
    updateFouls(1, 1);
};
document.getElementById('team2Fouls').onclick = function() {
    updateFouls(2, 1);
};

// Asignar eventos para actualizar el nombre de los equipos
document.getElementById('team1Name').onblur = function() {
    updateTeamName(1);
};
document.getElementById('team2Name').onblur = function() {
    updateTeamName(2);
};

// Llamar a la función para actualizar la fecha y hora cada segundo
updateDateTime();
setInterval(updateDateTime, 1000);

// Iniciar el temporizador
setInterval(updateTimer, 1000);
