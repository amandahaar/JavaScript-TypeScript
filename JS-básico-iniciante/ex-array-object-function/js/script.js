function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function recebeEventoForm(evento) {
    evento.preventDefault();

    //representam os elementos HTML
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    console.log(nome.value, sobrenome.value, peso.value, altura.value);
    // no console
    // mostrar os dados
    const pessoas = [
      {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
      },
    ];
    //função responsável por montar o HTML
    function listaResultados(nome, sobrenome, peso, altura) {
      return `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    resultado.innerHTML += listaResultados(nome, sobrenome, peso, altura);
  }

  //

  //

  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
