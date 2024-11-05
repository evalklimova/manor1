function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getCentury(year) {
    return Math.ceil(year / 100);
}

function checkYear() {
    const year = document.getElementById("yearInput").value;
    const resultContainer = document.getElementById("resultContainer");
    
    if (year) {
        const parsedYear = parseInt(year);
        const leapYear = isLeapYear(parsedYear);
        const century = getCentury(parsedYear);

        let resultMessage = `${parsedYear} год `;
        resultMessage += leapYear ? "является високосным. " : "не является високосным. ";
        resultMessage += `Этот год относится к ${century} веку.`;

        resultContainer.innerText = resultMessage;
    } else {
        resultContainer.innerText = "Пожалуйста, введите корректный год.";
    }
}