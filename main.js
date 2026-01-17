
const generateBtn = document.getElementById('generate-btn');
const numberDisplay = document.getElementById('number-display');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

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

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}
