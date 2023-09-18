let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //!! = true
console.log(!isAtivo) //! = false
/*Exemplo de como
o ! altera de 
verdadeiro para falso
e vice versa*/
console.log((!false) + ' Linha14')
console.log(!true)
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //vai puxar a verdadeira

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
