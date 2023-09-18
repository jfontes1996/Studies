function teste1(num) {
    if(num > 7)
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7)    
    ; 
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)      //Imprime ambos valores, pois a setença de código não está associada ao if.

//MORAL DA HISTÓRIA, NÃO USE ; NA DEFINIÇÃO DE UM BLOCO if.
// não usar ; nas estruturas de controle.
