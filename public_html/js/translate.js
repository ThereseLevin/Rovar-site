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

// Variabel med en array med alla konsonanter som vi ska kolla efter i namnet.
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];

// Skapar funktionen getFormData som hämtar det inskrivna namnet, kollar efter konsonaterna, stoppar in 'o' på de platser där konsonanter finns och lägger sen till samma konsonant igen. Sedan skriver funktionen ut namnet i HTML dokumentet. Tar även bort default beteendet hos form/submit. Körs vid click på button i HTML filen.
function getFormData(){
    //Ny tom variabel där vi ska stoppa det nya namnet
    let newName = "";

    // QuerySelector = Hämtar första elementet i dokumentet som matchar "selectorn" -> 'input'
    // Skapar variablen formData. Hämtar värde från formulär
    let formData = document.querySelector('input').value;

    // Ny variabel som innehåller formData, fast som en array med "," mellan varje bokstav
    // Split() är en metod som delar upp en sträng till en array genom att göra strängen till "substrings". Med den specifika '' (seperatorn) för att bestäma var den ska dela 
    let nameArray = formData.split('');

    /* En for of-loop som ska gå genom input-namnet(array) och göra alla bokstäver till små, lägga till i den tomma variabeln sig själv, kolla om det är en konsonant, är det inte strunta i det och lägg bara till en gång och gå tillbaka till toppen av loopen, OM det är en konsonant, lägg till den, lägg till ett "o" och lägg sedan till sig själv igen. Börja om från början. */  
    // The for...of statement creates a loop iterating over iterable objects
    // https://alligator.io/js/for-of-for-in-loops/
    // ex for (let char of str) {
                //console.log(char.toUpperCase().repeat(3));
               // }
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    //for in i detta fallet hade blivit 1234456..

    // En bokstav i taget
    for (let letter of nameArray) { 
        //Gör stringen i variabeln till små bokstäver
        letter.toLowerCase();

        /* Lägg till det nya namnet(värdet)(bokstäverna) i den tomma variabeln vi skapade tidigare (lägger till)(ändrar ej) */
        newName += letter;

        // Kolla nu OM 
        // letter (bokstaven)(små bokstäver) 
          
        if (consonants.indexOf(letter.toLowerCase()) != -1) {
            newName += "o" + letter;
        }

        /* Börja om från början av for of loopen och kolla om det finns fler konsonanter, gör detta tills att bokstäverna tar slut. När strängen är slut och newName har byggts på med ett nytt värde -> skriv ut detta i <p id="outputtext"> */
    }
// Hittar outputtext i dokumentet. Skriver in värdet från formData i outputtext.
document.querySelector('#outputtext').innerHTML = newName;

/* Metoden preventDefault () avbryter (händelsen), standardåtgärden som hör till händelsen inte kommer att köras. */
/* Ex klicka på "Skicka" -knappen, förhindra att den skickar in ett formulär, eller på en länk - inte följa webbadressen */

document.querySelector('form').addEventListener("click", function(event){
      event.preventDefault()
 }, false);

};

// Slut på funktion


// KOMMENTARER OCH TESTER

 // if (consonants.indexOf(letter.toLowerCase())) {
        //     /* OCH OM det finns, lägg till i bokstäverna i newName + "o" ocg den bokstaven vi precis hittade i arrayn, men här vill vi att det ska börja med stor bokstav igen, för om namnet börjar med stor bokstav, vill vi att den ska göra det två gånger */
        //     newName += "o" + letter;
        // }


//event.preventDefault();

// char() = Gör om en datatyp eller array till nummer

 // //För att texten ska stanna på sidan, och inte ladda in en ny sida vid tryckning på submit.
    // document.getElementById("clickButton").addEventListener("click", function(event){
    //     event.preventDefault()
    // }, false);

//char() = Converts a primitive datatype or array to a numeric character representation.

//Isället för att functionen ska köras Onclick - eventlistener?

//loopa array för att ta ut bokstäver till siffror. ta ut siffrorna och gör till bopkastäver.

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
