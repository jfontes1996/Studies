const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}
const pessoa = {
    nome: 'Pope',
    sobrenome: 'Francis',
    idade: 666,
    peso: 66.6
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
// usar o let para evitar sair do laço.
