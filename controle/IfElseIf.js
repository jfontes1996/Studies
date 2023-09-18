Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Melhor dos melhores')
    } else if(nota.entre(7, 8.9)){
        console.log('Deu bom!')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação amigo...')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovou pq é burro!!!')
    } else{
        console.log('Nota inválida.')
    }
    console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(0)
imprimirResultado(11) // V.A 

//20 ~ 25 feito sem V.A (vídeo aula)

// LEMBRETE SEU BURRO : NÃO USE ; QUANDO UTILIZANDO if E else.

//FIM!