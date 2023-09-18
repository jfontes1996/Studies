const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if (x == 5) {
        break //brake não age em cima do bloco if ele age no for/while/switch
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log('_________________')
for (y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
console.log('____________________')
externo:
for (a in nums) {
    for (b in nums){
        if(a == 2 && b == 3) 
        break externo //Nessa situação tenho que avisar ao brake que é o externo.
    console.log(`Par = ${a},${b}`)
    }
}//ideal é não utilizar rótulos associados à brake e continue.
console.log('Fim!')