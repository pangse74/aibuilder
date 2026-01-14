
const generateBtn = document.getElementById('generate-btn');
const numberDisplay = document.getElementById('number-display');

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

generateBtn.addEventListener('click', () => {
    const lottoNumbers = generateLottoNumbers();
    numberDisplay.innerHTML = ''; // Clear previous numbers

    lottoNumbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('lotto-number');
        numberElement.textContent = number;
        numberDisplay.appendChild(numberElement);
    });
});
