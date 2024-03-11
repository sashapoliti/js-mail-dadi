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
let elButton = document.querySelector('.btn.btn-primary');

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

// const wrapper = document.createElement('div'); //create div
// wrapper.className = 'd-flex align-content-center flex-wrap'; //add class

// let numBox = 100; //max number boxes
// let tmpHtml = ''; //string html

// for(let i = 1; i <= numBox; i++) /* cycle for 100 boxes */ {

//     if (i % 3 === 0 && i % 5 === 0) /* multiples of 3 and 5 */ {
//       let content = 'fizzbuzz';
//       tmpHtml += ` <div class="box fizzbuzz d-flex justify-content-center align-items-center">${content}</div>`;
//     } else if (i % 3 === 0) /* multiples of 3 */ {
//         let content = 'fizz';
//         tmpHtml += ` <div class="box fizz d-flex justify-content-center align-items-center">${content}</div>`;
//     } else if (i % 5 === 0) /* multiples of 5 */ {
//         let content = 'buzz';
//         tmpHtml += ` <div class="box buzz d-flex justify-content-center align-items-center">${content}</div>`;
//     } else /* none of the cases */ {
//         let content = i;
//         tmpHtml += ` <div class="box d-flex justify-content-center align-items-center">${content}</div>`;
//     }
    
// };

// wrapper.innerHTML = tmpHtml; //string html full of boxes in wrapper
// const container = document.querySelector('.container'); //take container
// container.append(wrapper); //append wrapper in container