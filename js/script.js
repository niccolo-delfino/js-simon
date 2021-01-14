// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// -1- genero dei numeri random assegnandoli ad un array.
var numeriDaIndovinare = [];

while (numeriDaIndovinare.length < 5) {
  var numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
  if (!numeriDaIndovinare.includes(numeroRandom)) {
    numeriDaIndovinare.push(numeroRandom);
  }
}

console.log(numeriDaIndovinare);

// -2- faccio comparire l'alert con l'array.
alert('Memorizza questi numeri! \nHai 30 secondi:' + '\n' + numeriDaIndovinare);

// -3- faccio aspettare l'utente 30 secondi (per ora 5) col setTimeout e poi copare una serie di 5 prompt.
setTimeout(richiesta, 5000 );

// -4- inserisco i numeri dell'utente dentro un array solo se sono uguali a quelli generati al punto 1.
//     I numeri non si devono ripetere, ci vuole un controllo (if + includes? forse).
// -5- dico quanti sono stati indovinati grazie all'array.length e quali grazie alla seconda array.
var numeriUtente =[];

function richiesta() {
  for (var i = 0; i < 5; i++) {
    var chiediNumero = parseInt(prompt('Inserisci un numero!'));
    if (!numeriUtente.includes(chiediNumero) && numeriDaIndovinare.includes(chiediNumero)) {
      numeriUtente.push(chiediNumero);
    }
  }
  console.log(numeriUtente);

  if (numeriUtente.length == 0) {
    console.log('Mamma mia, manco uno ne hai preso GG!')
  } else if (numeriUtente.length == 1) {
    console.log('Scarso! Hai indovinato un solo numero ed è: ' + numeriUtente)
  } else if (numeriUtente.length == 5) {
    console.log('Grande Mago! Li hai indovinati tutti! Come hai detto tu erano: ' + numeriUtente)
  } else {
    console.log('Hai indovinato ' + numeriUtente.length + ' numeri e sono: ' + numeriUtente);
  }
};
