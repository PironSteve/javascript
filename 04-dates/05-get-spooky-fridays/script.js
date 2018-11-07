/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {


        var year = document.getElementById("year").value;
        var date;
        var arrayMonth = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
        var monthWithFriday13 = new Array();

        for (var month = 0; month < 12; month++) {
            date = new Date(year, month, 13)
            if (date.getDay() == 5) {
                monthWithFriday13.push(arrayMonth[month]);
            }
        }
        alert(monthWithFriday13);
    })

})();
