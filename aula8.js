function* cores(){
    yield 'Azul'
    yield 'Amarelo'
    yield 'Vermelho Também!'
}

const mCores = cores()
console.log(mCores.next().value)
console.log(mCores.next().value)
console.log(mCores.next().value)