let f = function (...valores){
    let res = 0
    for(let n of valores){
        res+= n
    }
    return res
}
console.log(f(12,11))