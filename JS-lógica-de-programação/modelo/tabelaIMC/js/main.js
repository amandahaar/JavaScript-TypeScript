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
      return NaN;
    }
    if (!altura.value) {
      resultado.innerHTML = `<p class="erro">Altura inválida</p>`;
      return NaN;
    }
    // Função do cálculo
    const pesoNumero = Number(peso.value.replace(",", "."));
    let alturaNumero = Number(altura.value.replace(",", "."));

    // Se a altura for maior que 3, considera que foi digitada em centímetros
    if (alturaNumero > 3) {
      alturaNumero = alturaNumero / 100;
    }
    if (!pesoNumero || !alturaNumero) {
      return NaN;
      // Validação dos limites
    }
    if (
      pesoNumero < 15 ||
      pesoNumero > 350 ||
      alturaNumero < 0.5 ||
      alturaNumero > 2.5
    ) {
      resultado.innerHTML = `<p class="erro">Peso ou altura inválidos.</p>`;
      return NaN;
    }
    const imc = pesoNumero / (alturaNumero * alturaNumero);
    return Number(imc.toFixed(2)); // "Quando alguém chamar a função, devolva o resultado do cálculo"
  }

  // Adiciona um evento no click no botão
  botao.addEventListener("click", function (evento) {
    evento.preventDefault(); // página pára de recarregar sozinha
    const imc = calculoImc();

    resultado.classList.add("mostrar"); // Aparecer o resultado

    if (Number.isNaN(imc)) {
      return;
    }
    // Condições
    if (imc < 18.5) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Abaixo do peso)</p>`;
    } else if (imc < 25) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Peso normal)</p>`;
    } else if (imc < 30) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Sobrepeso)</p>`;
    } else if (imc < 35) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Obesidade grau 1)</p>`;
    } else if (imc < 40) {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Obesidade grau 2)</p>`;
    } else {
      resultado.innerHTML = `<p>Seu IMC é: ${imc} (Obesidade grau 3)</p>`;
    }
  });
}
calcularImc();
