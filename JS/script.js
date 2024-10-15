/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//NOSTRI DATI
/*
numeri da 1 a 100
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi Buzz
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

//RACCOLTA DATI
//Non abbiamo bisogno di raccogliere dati dall'utente

//ELABORAZIONE
//PER OGNI numero da 1 a 100
for (let i = 1; i <= 100; i++) {
  //SE il numero (i) è divisibile per 3
  if (i % 3 == 0) {
    //Stampa Fizz
    console.log("Fizz");
  }
  //ALTRIMENTI SE il numero (i) è divisibile per 5
  else if (i % 5 == 0) {
    //Stampa Buzz
    console.log("Buzz");
  }
  //ALTRIMENTI SE il numero (i) è divisibile per entrambi
  else if (i % 3 == 0 && i % 5 == 0) {
    //Stampa FizzBuzz
    console.log("FizzBuzz");
  }
  //ALTRIMENTI
  else {
    //Stampa il numero (i)
    console.log(i);
  }
}
