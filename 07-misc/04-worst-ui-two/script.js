/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var tabButtons = document.querySelectorAll("button");
    var buttonsValue = [];
    var dataMin;
    var datMax;
    tabButtons.forEach(function (button) {
        var indexButton = Array.from(tabButtons).indexOf(button);
        buttonsValue.push(button.innerText);
        button.addEventListener('click', function () {
            dataMin = button.getAttribute("data-min");
            dataMax = button.getAttribute("data-max");

            if (dataMax === button.innerText) {
                button.innerText = dataMin;
            }else {
                button.innerText++;
            }

            
            buttonsValue[indexButton] = button.innerText;
            if (buttonsValue[indexButton].length < 2) {
                buttonsValue[indexButton] = "0"+buttonsValue[indexButton]
            }
            
            document.getElementById("target").innerHTML = "+" + buttonsValue[0] + buttonsValue[1] +  buttonsValue[2] +  buttonsValue[3];

            console.log(button.innerText);
            console.log(dataMax);
            console.log(dataMax - button.innerText < 0);

            
        })
    })

})();
