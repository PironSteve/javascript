/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const size = ["10px","15px","20px","25px","30px","25px","20px","15px","10px"];
    const target = document.getElementById("target")
    const text = target.innerHTML;
    target.innerHTML = "";
    const tabText = text.split("");
    
    for(let i=0; i<tabText.length;i++){
        const span = document.createElement("span");
        span.innerText = tabText[i];
        span.style.fontSize = size[i%size.length];
        target.appendChild(span);
    }
})();
