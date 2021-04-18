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


//BOTTONE GENERA BIGLIETTO  
var buttoneGenera = document.getElementById('genera');
buttoneGenera.addEventListener( 'click', //Al click del bottone genera il biglietto
function() {

//RICHIESTA DATI
  var inputNome = document.getElementById("nomeUtente");
  var nomeUtente = inputNome.value;
  console.log(nomeUtente);

  var inputKm = document.getElementById("kmTragitto");
  var percorrenza = parseInt(inputKm.value);
  console.log(percorrenza);

  var inputEta = document.getElementById("fasciaEta");
  var eta = inputEta.value;
  console.log(eta);

  var prezzoAlKilometro = 0.21;
  var prezzoBigliettoNormale = prezzoAlKilometro * percorrenza;
  console.log(prezzoBigliettoNormale);

  var sconto = "Tariffa Default"

  if (eta == "minorenne") {
   ((prezzoBigliettoNormale / 100) * 80);
   sconto = "Sconto Minorenne";
  } else if (eta == "over65") {
   ((prezzoBigliettoNormale / 100) * 60);
   sconto = "Sconto Maggiorenne";
  } else {
   (prezzoBigliettoNormale);
  }

  document.getElementById("sconto").innerHTML = sconto;
  document.getElementById("costoBiglietto").innerHTML = prezzoBigliettoNormale.toFixed(2);
  document.getElementById("datiPasseggero").innerHTML = "Nome e Cognome: " + nomeUtente;

 }
);

var buttoneAnnulla = document.getElementById("annulla");
buttoneAnnulla.addEventListener( 'click', // Al click del bottone si la scheda
  function() {

    document.getElementById("datiPasseggero").innerHTML = "";
    document.getElementById("sconto").innerHTML = '';
    document.getElementById("costoBiglietto").innerHTML = "";
    document.getElementById("numero-carrozza").innerHTML = "";
    document.getElementById("codice-treno").innerHTML = "";

    document.getElementById("kmTragitto").value = "";
    document.getElementById("fasciaEta").value = "";
    document.getElementById("nomeUtente").value = "";
  }
);
