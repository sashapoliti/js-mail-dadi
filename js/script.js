// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

let emails = [
    'clelia.fradella@gmail.com',
    'emanuele.paratore@gmail.com',
    'marco.acciarri@gmail.com',
    'sasha.politi@gmail.com'
]
let elUserEmail = document.getElementById('userEmail');
let elButton = document.querySelector('.btn.btn-outline-success');

elButton.addEventListener('click', function() {
    let email = elUserEmail.value;
    const result = document.querySelector('.result');

    for (let i = 0; i < emails.length; i++) {
        if (email.toLowerCase() === emails[i].toLowerCase()) {
            result.innerHTML = 'Accesso consentito.';
        } else {
            result.innerHTML = 'Accesso non consentito.';
        }
    }
});


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let button = document.querySelector('.btn.btn-secondary'); //button to start

button.addEventListener('click', function() {
    let dice = [1, 2, 3, 4, 5, 6]; //normal dice
    const versus = document.querySelector('#dice .result');
    let userPosition = getRndInteger(0, dice.length - 1);
    let userNumber = dice[userPosition];
    const userImg = document.querySelector('div.versus>div:first-child img');
    userImg.setAttribute('src', `dadi/${userNumber}.svg`);
    userImg.setAttribute('alt', `Dado numero ${userNumber}`);

    dice.splice(userPosition, 1); //remove possibility of the first number

    let pcPosition = getRndInteger(0, dice.length - 2);
    let pcNumber = dice[pcPosition];
    const pcImg = document.querySelector('div.versus>div:last-child img');
    pcImg.setAttribute('src', `dadi/${pcNumber}.svg`);
    pcImg.setAttribute('alt', `Dado numero ${pcNumber}`);

    
    if (userNumber > pcNumber) {
        versus.innerHTML = 'Hai vinto!';
    } else {
        versus.innerHTML = 'Hai perso...';
    }
});