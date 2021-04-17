/*
var chilometriDaPercorrere = parseInt(prompt("Quanti chilometri devi percorrere?"));
console.log(chilometriDaPercorrere);

var eta = parseInt(prompt("Inserisci la tua età"));
console.log(eta);

var bigliettoAlChilometro = 0.21;

var scontoMinorenni = 0.2;

var scontoAnziani = 0.4;

var costoViaggio = bigliettoAlChilometro * chilometriDaPercorrere;

var costoViaggioMinorenni = costoViaggio * scontoMinorenni;

var costoViaggioAnziani = costoViaggio * scontoAnziani;

if(Number.isNaN(chilometriDaPercorrere) || Number.isNaN(eta)){
    console.log("Dati inseriti non validi");
} else if(eta >= 18 && eta <= 65){
    console.log("Il prezzo del biglietto è di " + costoViaggio + " Euro");
} else if(eta < 18){
    console.log("Il prezzo del biglietto è di " + costoViaggioMinorenni.toFixed(2) + " Euro");
} else {
    console.log("Il prezzo del biglietto è di " + costoViaggioAnziani.toFixed(2) + " Euro");
}*/

// FUNZIONI:
// FUNZIONE NUMERO CASUALE
function numeroRandom(primo, ultimo){
    return Math.floor(Math.random() * ultimo) + primo;
}

// NUMERO CARROZZA
var numeroCarrozza = numeroRandom(1,5);
document.getElementById("numero-carrozza").innerHTML = "Numero: " + numeroCarrozza;

// CODICE TRENO
var codiceTreno = numeroRandom(100000,90000);
document.getElementById("codice-treno").innerHTML = "Cod: " + codiceTreno;

//RICHIESTA DATI
var nomeCognome = prompt("Nome e Cognome");
console.log(nomeCognome);

document.getElementById("nomeECognome").innerHTML = nomeCognome;

var km = parseInt(prompt("Km da percorrere"));
console.log(km);
document.getElementById("distanza").innerHTML = km;

var fasciaEta = prompt("Junior (<18), Senior (18-65), Over(>65)");
console.log(fasciaEta);
document.getElementById("fasciaEta").innerHTML = fasciaEta;