function playGame(playerInput) {
    clearMessages()

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        }
        else if (argMoveId == 2) {
            return 'papier';
        }
        else if (argMoveId == 3) {
            return 'nożyce';
        }
        else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    // Computer move

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    console.log('Ruch komputera to: ' + computerMove);

    // Player move

    let playerMove = getMoveName(playerInput);
    console.log('Ruch gracza to: ' + playerMove);

    // Game result

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);

        printMessage('Komputer wybrał ' + argComputerMove + '<br> Twój wybór to ' + argPlayerMove);

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Wygrywasz!');
            console.log('Gracz wygrał');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        }
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Wygrywasz!');
        }
        else if (argComputerMove == argPlayerMove) {
            printMessage('Mamy remis!');
        }
        else {
            printMessage('Niestety przegrywasz ;(');
        }
    }
    displayResult(computerMove, playerMove);
}

// Buttons

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});


















