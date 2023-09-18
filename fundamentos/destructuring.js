// novo recurso do ES2015

const pessoa = {
    nome: 'João',
    idade: 26,
    endereco: {
        logradouro: 'Rua professor paulo maria de aragão 121',
        numero: 1000
    }
}

const { nome, idade } = pessoa //destructuring utiliza {}
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep = 60115280 } } = pessoa
console.log(logradouro,
     numero,
      cep)
      