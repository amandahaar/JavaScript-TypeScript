function calcularImc() {
  // Pega os elementos HTML
  const peso = document.querySelector(".peso");
  const altura = document.querySelector(".altura");
  const resultado = document.querySelector(".resultado");
  const botao = document.querySelector(".botao"); //pega o botão

  function calculoImc() {
    // Quando dá erro no preenchimento
    if (!peso.value) {
      resultado.innerHTML = `<p class="erro">Peso inválido</p>`; // class erro para conseguir mudar a cor
      return;
    }
    if (!altura.value) {
      resultado.innerHTML = `<p class="erro">Altura inválida</p>`;
      return;
    }
    // Função do cálculo
    const imc =
      Number(peso.value) / (Number(altura.value) * Number(altura.value));
    return imc; // "Quando alguém chamar a função, devolva o resultado do cálculo"
  }

  // Adiciona um evento no click no botão
  botao.addEventListener("click", function (evento) {
    evento.preventDefault(); // página pára de recarregar sozinha
    const imc = calculoImc();
    console.log(imc);

    resultado.classList.add("mostrar"); // Aparecer o resultado

    // Condições
    if (imc < 18.5) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Abaixo do peso)`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Peso normal)`;
    } else if (imc >= 25 && imc <= 29.9) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Sobrepeso)`;
    } else if (imc >= 30 && imc <= 34.9) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Obesidade grau 1)`;
    } else if (imc >= 35 && imc <= 39.9) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Obesidade grau 2)`;
    } else if (imc >= 40 && imc < 190) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Obesidade grau 3)`;
    }
  });
}
calcularImc();
