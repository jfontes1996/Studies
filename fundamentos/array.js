const valores = [7.7, 9.8, 6.3, 9.2] // []-> array
console.log(valores[0], valores[3])
console.log(valores[4]) // como não existe indice 4 fica indefinido

valores[4] = 10
console.log(valores)
console.log(valores.length) // length mostra a qntdade de elementos no array

valores.push({id: 3}, false, null, 'teste') //insere valores
console.log(valores)
console.log(valores.length) // alterou a quantidade de elementos

console.log(valores.pop()) //retira o ultimo elemnto do array
delete valores[0] //tira o primeiro elemento
console.log(valores)

console.log(typeof valores)