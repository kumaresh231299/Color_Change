document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.querySelector('.circleColor');
    const redButton = document.querySelector('.btnRed');
    const blueButton = document.querySelector('.btnBlue');
    const greenButton = document.querySelector('.btnGreen');
    const resetButton = document.querySelector('.btnReset');
    const colorPicker = document.querySelector('.textInput');

    redButton.addEventListener('click', () => {
        colorBox.style.backgroundColor = 'red';
    });
    blueButton.addEventListener('click', () => {
        colorBox.style.backgroundColor = 'blue';
    });
    greenButton.addEventListener('click', () => {
        colorBox.style.backgroundColor = 'green';
    });
    resetButton.addEventListener('click', () => {
        colorBox.style.backgroundColor = 'white';
        colorPicker.value = '';
    });

    colorPicker.addEventListener('input', (event) => {
        colorBox.style.backgroundColor = event.target.value;
    });

})