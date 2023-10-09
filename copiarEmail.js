function copiarEmail() {
    var emailDiv = document.querySelector(".copiarEmail");
    var email = "gabriel.plautz2018@gmail.com";

    // Copia o texto para a área de transferência
    var input = document.createElement("input");
    input.value = email;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    // Altera o texto da div para indicar que foi copiado
    emailDiv.textContent = "Copiado!";
    emailDiv.style.backgroundColor = "rgb(104, 255, 74)";

    // Aguarda 3 segundos e restaura o texto original e a cor
    setTimeout(() => {
        emailDiv.textContent = "gabriel.plautz2018@gmail.com";
        emailDiv.style.backgroundColor = "lightgray";
        // emailDiv.classList.add("copiarEmail");
    }, 3000);
}
