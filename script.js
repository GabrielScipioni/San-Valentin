const messages = [
    "Segura?",
    "Muy Segura??",
    "Quisiste decir que si?",
    "Es el otro boton...",
    "Eso significa si?",
    "Gay el que toca el boton rojo",
    "uhhh loco...",
    "pero presiona el boton siii",
    "dejo de preguntar...",
    "mentira, pone que si! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}