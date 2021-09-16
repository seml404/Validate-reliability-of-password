"use strict";

function validate(password) {
    if (password.length === 0) {
        return false;
    }
    let hasSmallLettExp = /([a-z])+/;
    let hasCapLettExp = /([A-Z])+/;
    let hasDigit = /(\d)+/;
    let specSymbol = /\W/;
    let longEnough = /(.){6,}/;
    return hasSmallLettExp.test(password) && hasCapLettExp.test(password) && hasDigit.test(password) && longEnough.test(password) && specSymbol.test(password);
}

let input = document.querySelector('input'),
    resultBox = document.querySelector('.result'),
    btn = document.querySelector("button");

btn.addEventListener('click', () => {
    let pass = input.value;
    let resultEl = document.createElement('p');
    resultBox.append(resultEl);
    if (validate(pass)) {
        let result = "Пароль надежный!";
        resultEl.innerHTML = result;
        resultEl.classList.add('reliable');
    } else {
        let result = "Пароль НЕ надежный!";
        resultEl.innerHTML = result;
    }
    setTimeout(() => {
        resultEl.remove();
    }, 2000);
    input.value = '';
});