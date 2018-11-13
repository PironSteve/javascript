/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var number = (Math.floor(Math.random()*100)+1);
    var count = 0;
    var input;
    var message = "Le nombre à deviner est entre 1 et 100.";
    var essais = "";

    do {
        input = prompt(message+ "\n" + essais);
        count++;
        if (input > number) {
            message = "C'est plus petit";
            essais = "Nombre d'essais :" + count;
        } else {
            message = "C'est plus grand";
            essais = "Nombre d'essais :" + count;
        }
    } while (input != number);

    alert("Bravo, tu as trouvé le bon nombre en " + count + " coups");
})();
