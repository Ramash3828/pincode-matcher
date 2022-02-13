/**
 * Get Generated Random numbers
 */
document.getElementById('generate-btn').addEventListener('click', function() {
    document.getElementById('g-number').value = getRandomNumber();
});

function getRandomNumber() {
    let pin = Math.round(Math.random() * 10000);
    if ((pin + "").length == 4) {
        return pin;
    } else {
        return getRandomNumber();
    }
}
/**
 * Input PIN numbers
 */
document.getElementById('calc-body').addEventListener('click', function(event) {
    let keyPad = document.getElementById('number');
    let number = event.target.innerText;
    if (isNaN(number)) {
        if (number == "C") {
            keyPad.value = "";
        } else if (number == "<") {
            keyPad.value = keyPad.value.slice(0, -1);
        }
    } else {
        keyPad.value += number;
    }
});

/**
 * Matching Random numbers and PIN Numbers
 */
document.getElementById('submit').addEventListener('click', function() {
    let newNumber = document.getElementById('number').value;
    let pinNumber = document.getElementById('g-number').value;
    let notify = document.querySelectorAll('.notify');

    if (pinNumber == newNumber) {
        notify[1].style.display = "block";
        notify[0].style.display = "none";
    } else {
        notify[0].style.display = "block";
        notify[1].style.display = "none";
    }
});