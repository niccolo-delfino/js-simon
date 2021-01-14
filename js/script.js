// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// -1- genero dei numeri random assegnandoli ad un array.
// -2- faccio comparire l'alert con l'array.
// -3- faccio aspettare l'utente 30 secondi col setTimeout e poi copare una serie di 5 prompt.
// -4- inserisco i numeri dell'utente dentro un array solo se sono uguali a quelli generati al punto 1.
//     I numeri non si devono ripetere, ci vuole un controllo (if + includes? forse).
// -5- dico quanti sono stati indovinati grazie all'array.length e quali grazie alla seconda array.

var numeriDaIndovinare = [];

while (numeriDaIndovinare.length < 5) {
  var numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
  if (!numeriDaIndovinare.includes(numeroRandom)) {
    numeriDaIndovinare.push(numeroRandom);
  }
}

console.log(numeriDaIndovinare);
