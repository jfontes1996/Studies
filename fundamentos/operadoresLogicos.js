{/* v e v = v
 v e f = f and
 f e ? = f
 
 op1 e op2 e op3 e op4 = v (todos tem que ser verdadeiros)

 v ou ? = v
 f ou ? = ? or
 f ou v = v
 f ou f = f

 v xor v = f
 f xor f = f xor = exclusivo
 v xor f = v
 f xor v = v

 !v = f
 !f = v (! = negação)
 */
console.log('inicio da atividade na linha 21')}
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //op logica ou
    const comprarTv50 = trabalho1 && trabalho2 //op.logica tipo "e"
//    const comprarTv32 = !!(trabalho1 ^ trabalho2)//op. bitwise xor 
    const comprarTv32 = trabalho1 != trabalho2// mais int do que a de cima
    const manterSaudavel = !comprarSorvete// negacao logica op. unario
    return {comprarSorvete, comprarTv32, comprarTv50, manterSaudavel }
}
console.log('01)')
console.log(compras(true, true))
console.log('02)')
console.log(compras(true, false))
console.log('03)')
console.log(compras(false, true))
console.log('04)')
console.log(compras(false, false))