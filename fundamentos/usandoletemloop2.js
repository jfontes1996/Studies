const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[3]()
funcs[8]()
funcs[9]()
//pelo fato da função ter let o i tem escopo de bloco.
