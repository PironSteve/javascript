/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.querySelector("input").addEventListener('input', function () {
        var longueur = document.getElementById("pass-one").value.length;
        var tabInput = document.getElementById("pass-one").value.split('');
        var counter = 0;

        for (var i = 0; i < tabInput.length; i++) {
            if (!isNaN(tabInput[i])) {
                counter++;
            }
        }

        if (longueur > 7 && counter > 1) {
            document.getElementById("validity").innerHTML = "Ok";
        } else {
            document.getElementById("validity").innerHTML = "Pas ok";
        }
    })

})();
