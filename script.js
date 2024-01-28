const convertButton = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const output = document.getElementById('output');

function displayOutput(numeral) {
    output.classList.remove('hidden');
    const msg = `<p>${numeral}</p>`;
    output.innerHTML = msg;
}

function decimalToRomanNumeral(str) {
    return 'success';
}

convertButton.addEventListener('click', () => {
    const numeral = decimalToRomanNumeral(numberInput.value);
    displayOutput(numeral);
    numberInput.value = '';
});

numberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const numeral = decimalToRomanNumeral(numberInput.value);
        displayOutput(numeral);
        numberInput.value = '';
    }
});

