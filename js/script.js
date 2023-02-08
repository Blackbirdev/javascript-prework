
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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
console.log('Ruch gracza to: ' + playerMove);

// Game result

function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);

    printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
        console.log('Gracz wygrał');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == argPlayerMove) {
        printMessage('Mamy remis!');
    }
    else {
        printMessage('Niestety przegrywasz ;(');
    }
}
displayResult(computerMove, playerMove);




















