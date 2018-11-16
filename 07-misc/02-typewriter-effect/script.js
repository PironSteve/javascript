/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let i = 0;
        const texte = document.getElementById("target").innerHTML;
        document.getElementById("target").innerHTML = "";
        const speed = 150;
        console.log(texte);

        typeWriter();

    function typeWriter() {

        
        if (i < texte.length) {
            document.getElementById("target").innerHTML += texte.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        
    }
    

})();
