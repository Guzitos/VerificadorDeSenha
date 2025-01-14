const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", function () {
    const password = this.value;
    const stregthIndicator = document.querySelector("#password-strength-indicator");

    const stregthText = document.querySelector('#password-strength-text');

    const strengths = {
        0: "Muito fraca",
        1: "Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito forte",
    };

    let score = 0;

    if (password.length >= 8) score++;
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^a-zA-Z0-9]/)) score++;

    const width = (score / 4) * 100;
    stregthIndicator.style.width = `${width}%`;

    switch (score) {
        case 1:
            stregthIndicator.style.backgroundColor = "#e70b0b";
            break;
        case 2:
            stregthIndicator.style.backgroundColor = "#ffb74d";
            break;
        case 3:
            stregthIndicator.style.backgroundColor = "#fff176";
            break;
        case 4:
            stregthIndicator.style.backgroundColor = "#81c784";
            break;
        default:
            stregthIndicator.style.backgroundColor = "transparent";
            break;
    }

    if (password.length > 0) {
        stregthText.innerHTML = `Força: ${strengths[score]}`;
    } else {
        stregthText.innerHTML = "";
    }
});
