function tratarErroELancar(erro) {
   // throw new Error('...')
   //throw 10
   //throw true
   //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally { //sempre será executado
        console.log('final')
    }
}

const obj = { nome: 'Roberta' } //se fosse name ao inves de nome dava certo!
imprimirNomeGritado(obj)