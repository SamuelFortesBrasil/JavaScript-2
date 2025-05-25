function soma(...valores){
    let tamanho = valores.length
    let res = 0
    for(let n of valores){
        res += n
    }
    return res
}
console.log(soma(10,1))