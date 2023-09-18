let valor //não inicializada
console.log(valor) //valor fica undefined

valor = null //não tem nenhum valor e endereço
console.log(valor)
//console.log(valor.toString()) | da problema pois é nulo!

const produto = {}
console.log(produto.preco) //undefined pois não tem preço definido.
console.log(produto) //obj vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco caso queira tirar atributo do objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
