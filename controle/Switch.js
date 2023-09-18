const imprimirResultado = function (nota){
    switch (Math.floor(nota)){ //expressão não retorna true/false
        case 10:
        case 9:  //executa o comportamento de fallthrough.
            console.log('Quadro de honra')
            break //sai do switch ou seja para o fallthrough.
            case 8: case 7:{
                console.log('Deu bom!')
                        break
            }
                console.log('Deu bom!')
                break
                case 6: case 5: case 4:
                    console.log('Recuperação meu truta')
                    break
                    case 3: case 2: case 1:
                        console.log('Reprovou mens.')
                        //break
                        case 0:
                            console.log('se fosse teu pai te batia')
                        break
                        default:
                            console.log('Nota inválida')               
                        }
                        console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(9.99) //crtl KC comenta // 
imprimirResultado(7)
imprimirResultado(6.99)
imprimirResultado(3.5)
imprimirResultado(0)
imprimirResultado(-1)

//Aula de switch foda.se
