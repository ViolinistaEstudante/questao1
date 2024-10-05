function checkAnswer(answer) {
    const resultElement = document.getElementById('result');
    if (answer === 'a') {
        resultElement.textContent = 'Correct! The song is about overcoming challenges and resilience.';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Incorrect. Try again!';
        resultElement.style.color = 'red';
    }
}
