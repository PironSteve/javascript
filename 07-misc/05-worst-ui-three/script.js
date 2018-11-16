/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    const buttons = document.getElementsByTagName("button");
    const target = document.getElementById("target");
    let dataMax;
    let dataMin;
    const timer = [0, 0, 0, 0];

    Array.from(buttons).forEach(btn => {
        const indexBtn = Array.from(buttons).indexOf(btn);
        const input = document.getElementById(btn.id.substring(4, btn.id.length));
        dataMin = input.getAttribute("data-min");
        dataMax = input.getAttribute("data-max");

        function startingInputIncrement() {
            if (input.value < dataMax) {
                input.value++;
            } else {
                input.value = dataMin;
            }
        }
        timer[indexBtn] = setInterval(startingInputIncrement, 250);
        let time = timer[indexBtn];

        btn.addEventListener('click', ()=> {
            time = timer[indexBtn];
            if (time > 0) {
                function stoppingInputIncrement() {
                    clearInterval(time);
                    if (input.value.length === 1) {
                        input.value = `0${input.value}`;
                    }
                    if (indexBtn === 0) {
                        target.innerText = `+${input.value}${target.innerText.substring(4, target.innerText.length)}`;
                    } else {
                        target.innerText = target.innerText.substring(0, 2 * (indexBtn + 1)) + input.value + target.innerText.substring((indexBtn + 2) * 2, target.innerText.length);
                    }
                }
                stoppingInputIncrement();
                timer[indexBtn] = 0;
            } else {
                timer[indexBtn] = setInterval(startingInputIncrement, 250);
            }
        })
    })


})();
