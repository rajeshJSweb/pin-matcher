function getPin() {
    const pin = Math.random() * 10000;
    const pinRound = Math.round(pin);
    const pinString = pinRound + '';
    if (pinString.length == 4) {
        document.getElementById('display-pin').value = pinRound;
        return pinRound;
    }
    else {
        return getPin();
    }
}

document.getElementById('generate-button').addEventListener('click', function () {
    getPin();
});

document.getElementById('keypad').addEventListener('click', function (event) {
     
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-numbers');
    // typedNumber.value = number;

    if(isNaN(number)){
        if (number == 'C') {
            typedNumber.value = '';
        }
    }
    else {
        const previousNumber = typedNumber.value;
        const newNumber = previousNumber + number;
        typedNumber.value = newNumber;
    }
});

document.getElementById('submit-btn').addEventListener('click', function () {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const successMassege = document.getElementById('success-massege');
    const errorMassege = document.getElementById('error-massege');

    if (pin == typedNumber) {
        successMassege.style.display = 'block';
        successMassege.style.display = 'none';
    }
    else {
        errorMassege.style.display = 'block';
        errorMassege.style.display = 'none';
    }
})