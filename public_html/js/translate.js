//Vad ska scriptet göra?
/* Hämta ett värde från formuläret på index sidan. Kollar om det finns några konsonanter i strängen. Om det finns konsonanter, då ska den lägga på ett "o" och samma konsonant igen. Vokaler blir oförändrade. Till slut sammanställa ordet och skriva ut det på sidan. */

//Hur ska scriptet utföra det?
/*
1. En array med konsonanter
2. Hämta värdet från formuläret och stoppa i en variabel
3. Kolla OM det finns konsonanter i strängen.
4. OM INTE, gör ingenting med strängen.
5. OM det finns,  lägg till "o" och sig själv, där det finns. ( ex t = ot, e = eo)
6. Skapa strängen i en ny variabel
7. Skriva ut den nya variablen i dokumentet, när besökaren klickat på knappen

*/

// Vokaler A, e, i, o, u, y, å, ä och ö.
// Konsonanter B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, X, Z.



//Isället för att functionen ska köras Onclick - eventlistener?


// skapar funktionen getFormData
function getFormData() {

    let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];

    // Skapar variablen formData. Hämtar värde från formulär
    let formData = document.querySelector("#formid").value;
    
    //Hittar outputtext i dokumentet. Skriver in värdet från formData i outputtext.
    document.getElementById("outputtext").innerHTML = formData;

    //För att texten ska stanna på sidan, och inte ladda in en ny sida vid tryckning på submit.
    document.getElementById("clickButton").addEventListener("click", function(event){
        event.preventDefault()
    });
    

    //Return formData, så att vi kan använda variabeln globalt i koden.
    return formData;

} 

console.log(getFormData());



// KOMMENTARER OCH TESTER

//lopa array för att ta ut bokstäver till siffror. ta ut siffrorna och gör till bopkastäver.

//for / loop genom formData för att få index nummer på bokstäverna

//Skapa formdata till array

//lägga in o + konsonant i det ledet vid array index nummert

// Lägga till "o" och sig själv på konsunanterna i stringen. 

//Gör variabler-strängen till en array

// var nameArray = getFormData().split('');
// console.log(nameArray);

//gör en idx var, med arryn med namnet, och kolla index nummret med konsonanterna
// var idx = nameArray.indexOf("r");
// console.log(idx);

// for (var i = 0; i < nameArray.length; i++) {
//    console.log(nameArray[i].indexOf(consonants) >= 0);
// }   

//indexOf     
//substring?
//funktion för hela grejen?
//includes?
// Kolla OM namnet innahåller några consonanter
//The toLowerCase() method converts a string to lowercase letters.


//for (getFormData().split('')
