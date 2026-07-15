function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Amanda', 'Haar', 32);
const pessoa2 = criaPessoa('Gustavo', 'Inacio', 32);
const pessoa3 = criaPessoa('Jhenny', 'Lorrane', 32);

console.log(pessoa1.nome, pessoa2.sobrenome);