const Escola = "cod3r"

console.log(Escola.charAt(4))
console.log(Escola.charAt(5)) // mostra a letra ou numero que se encontra na posicao desejada
console.log(Escola.charCodeAt(3)) // devolve o codigo relacionado a tabela unicode
console.log(Escola.indexOf('3'))

console.log(Escola.substring(1))
console.log(Escola.substring(0, 3)) //va do indice 0 ate o indice 3

console.log("Escola ".concat(Escola).concat("!")) //Neste caso o .concat pode ser substituido por +
console.log(Escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) //array