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

        printMessage('Komputer wybrał ' + argComputerMove + '<br> Twój wybór to ' + argPlayerMove + '<br><br>');

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Wygrywasz! '  + '<br><br>', "roundResultWin");
            playerWins++
            console.log('Gracz wygrał');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Wygrywasz !'  + '<br><br>', "roundResultWin");
            playerWins++
        }
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Wygrywasz! '  + '<br><br>', "roundResultWin");
            playerWins++
        }
        else if (argComputerMove == argPlayerMove) {
            printMessage('Mamy remis! '  + '<br><br>', "roundResultDraw");
        }
        else {
            printMessage('Niestety przegrywasz ;( ' + '<br><br>', "roundResultLoss");
            computerWins++
            console.log('Komputer wygrał. Dodano 1 do wyniku komputera (computerWins). Obecny wynik komputera: ' + computerWins)
        }
        printMessage('Wynik gry: ');
        printMessage('Gracz: ' + playerWins, "scoreList");
        printMessage('Komputer: ' + computerWins, "scoreList");
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

let computerWins = 0, playerWins = 0


















