let texto = "Hello World!";
const constante = "Minha constante";
// console.log(texto, constante, "Meu texto");

const pessoa1 = {
    nome: "Fulano de Tal",
    idade: 35,
    telefone: "23848484",
}

const pessoa2 = {
    nome: "Maria Aparecida das Dores do Parto",
    idade: 25,
    telefone: "557567567"
}
// console.log(pessoa1.nome)
// console.log(pessoa1.telefone);

// pessoa1.nome = "Beltrano de Tal";
// console.log(pessoa1);

const pessoas = [pessoa1];
pessoas.push(pessoa2)
console.table(pessoas);

console.log("Total Pessoas:", pessoas.length);
