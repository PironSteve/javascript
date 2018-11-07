/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var today = new Date();
    var arrayWeekDay = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    var arrayMonth = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    var todayDate = arrayWeekDay[today.getDay() - 1] + " " + today.getDate() + " " + arrayMonth[today.getMonth()] + " " + today.getFullYear() + ", " + today.getHours() + "h" + today.getMinutes();
    document.getElementById("target").innerHTML = todayDate;
})();
