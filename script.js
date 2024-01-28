const convertButton = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const output = document.getElementById('output');

function displayOutput(str, adjustStyling) {
    output.classList.remove('hidden');
    output.innerHTML = `<p>${str}</p>`;

    if (adjustStyling === true) {
        output.childNodes[0].classList.add('adjusted-text');
        output.childNodes[0].classList.remove('output-text');
    } else {
        output.childNodes[0].classList.add('output-text');
        output.childNodes[0].classList.remove('adjusted-text');
    }

    numberInput.value = '';
}

function decimalToRomanNumeral(num) {
    let arr = num.split('');

    const ref = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    const res = [];

    ref.forEach(function (arr) {
    while (num >= arr[1]) {
        res.push(arr[0]);
        num -= arr[1];
    }
    });

    return res.join('');
}

function isValidInput(str) {
    const num = parseInt(str);
    let error;
    let adjustStyling = false;

    if (!str || str.match(/[e.]/g)) {
        error = "Please enter a valid number.";
        displayOutput(error, adjustStyling);
        return false;
    } else if (num < 1) {
        error = "Please enter a number greater than or equal to 1";
        adjustStyling = true;
        displayOutput(error, adjustStyling);
        return false;
    } else if (num > 3999) {
        error = "Please enter a number less than or equal to 3999";
        adjustStyling = true;
        displayOutput(error, adjustStyling);
        return false;
    } else {
        return true;
    }
}

convertButton.addEventListener('click', () => {
    if (isValidInput(numberInput.value)) {
        const numeral = decimalToRomanNumeral(numberInput.value);
        displayOutput(numeral);
    }
});

numberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (isValidInput(numberInput.value)) {
            const numeral = decimalToRomanNumeral(numberInput.value);
            displayOutput(numeral);
        }
    }
});

