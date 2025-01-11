const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", function(){
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

    if(password.length >= 8 ) score++;

    const width = (score/4) * 100;

    stregthIndicator.style.width = '${width}%' ;

    if (password.length > 0 ){
        stregthText.innerHTML = 'Força: ${strengths[score]}'
    }
});
