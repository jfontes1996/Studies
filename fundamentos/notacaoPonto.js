//aula sobre a anotação (.)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'arroz'
//obj1['nome'] = 'arroz2' //serve para mesma coisa e sobrescreve o .nome
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()