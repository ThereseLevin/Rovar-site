//====== .split() och .include()-version ======//

document.querySelector('form').addEventListener('submit', function(event) {

  event.preventDefault();

  var inputText = event.target.querySelector('textarea').value;

  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
  'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

  var result = '';

  for ( char of inputText.split('') ) {
    result += char;
    if ( consonants.includes(char.toLowerCase())) {
      result += 'o' + char.toLowerCase();
    }
  }

  document.querySelector('#output').innerHTML = result;

}, false);

// ====== .split() och .include() + keyUp-version ====== //

document.querySelector('textarea').addEventListener('keyup', function(event) {

  // event.preventDefault();

  var inputText = event.target.value;

  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
  'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

  var result = '';

  for ( char of inputText.split('') ) {
    result += char;
    if ( consonants.includes(char.toLowerCase())) {
      result += 'o' + char.toLowerCase();
    }
  }

  document.querySelector('#output').innerHTML = result;

}, false);

// ====== Logisk for loop-version ====== //

// Skapa funktion för att ta in en sträng och returnera den som rövarspråk
function translateToRobber(text) {

  // Definiera en array med alla konsonanter
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
  'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

  // Tom sträng där vi senare ska lagra resultatet under översättningen
  var result = '';

  // Gå igenom varje bokstav, första bokstaven har index 0, sista har length -1
  for (i = 0; i < text.length; ++i) {

    // Variabel för vår nuvarande bokstav
    let char = text[i];

    // Lägger till nuvarande bokstav till resultatet
    result += char;

    // Kolla om arrayen consonants innehåller bokstaven
    if (consonants.includes(char.toLowerCase())) {

      // I så fall lägg till bokstaven 'o' + nuvarande bokstav i slutet på resultatet
      result += 'o' + char.toLowerCase();
    }
  }

  // Returnera resultatet
  return result;
}

// Välj textarean och lägg till en eventListentener som körs vid tangent-uppsläpp
document.querySelector('textarea').addEventListener('keyup', function(event) {

  // Stoppa in resultatet från translateToRobber i paragrafen
  document.querySelector('#output').innerHTML =
    translateToRobber(event.target.value);

  /* event innehåller information om händelsen som inträffare. event.target är
  objektet där händelsen inträffade, i det här fallet textarean. */
});
