//par nome/valor
const saudacao = 'Opa meu caro' //contexto léxico 1

function exec() {
    const saudacao = 'faaala meu nobre'//contexto léxico 2
    return saudacao
 }

 //objetos são grupos aninhados de pares nome/valor
 const cliente = {
    nome: 'Eduarda',
    idade: 25,
    peso: 56,
    endereco: {
        logradouro: 'Rua corassaum do Ja1',
        numero: 157
    }
 }

 const arroz = {
    qualidade: 'branco',
    peso: 1,
    marca: 'arroz tio joão'
 }

 console.log(saudacao)
 console.log(exec())
 console.log(cliente)
console.log(arroz)