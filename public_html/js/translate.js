//Vad ska scriptet göra?
/* Hämta ett värde från formuläret på index sidan. Kollar om det finns några konsonanter i strängen. Om det finns konsonanter, då ska den lägga på ett "o" och samma konsonant igen. Vokaler blir oförändrade. Till slut sammanställa ordet och skriva ut det på sidan. */

//Hur ska scriptet utföra det?
/*
1. En array med konsonanter
2. Lyssna efter event input / knapp
3. Hämta värdet från formuläret och stoppa i en variabel
4. Kolla OM det finns konsonanter i strängen.
5. OM INTE, gör ingenting med strängen.
6. OM det finns,  lägg till "o" och sig själv, där det finns. ( t = ot, e = eo)
7. Skapa strängen i en ny variabel
8. Skriva ut den nya variablen i dokumentet, när besökaren klickat på knappen

*/

// Vokaler A, e, i, o, u, y, å, ä och ö.
// Konsonanter B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, X, Z.

// 1. Array med alla konsonanter

const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'v', 'x', 'z'];

console.log(consonants);


// 2. Hämta värde från formulär och lägg i en variabel

// skapar funktionen getFormData
function getFormData() {

    // Skapar variablen formData. Hämtar värde från formulär
    var formData = document.getElementById("formid").value;

    //Hittar outputtext i dokumentet. Skriver in värdet från formData i outputtext.
    document.getElementById("outputtext").innerHTML = formData;

    //För att texten ska stanna på sidan, och inte ladda in en ny sida vid tryckning på submit.
    event.preventDefault();
}

