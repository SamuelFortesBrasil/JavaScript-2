// Visite para copiar os shorthands do Regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape

const cfps = `
    Os Cpf são:

    234.334.454-32 212.567.498-07 012.234.112-10 232.456-605-03 122.321.222-45 213.455.656-08 125.423.678-02


    103.434.102-80

`
const RegExp1 = /[\d]+\.[\d]+\.[\d]+\-[0-9]{2}/gi

//console.log(cfps.match(RegExp1))

const ips = `
    Os Ips são:

    0.0.122.211
    0.0.0.0
    8.8.8.8
    12.212.58.192
`

const RegExp2 = /[\d]+\.[\d]+\.[\d]+\.[\d]+/gm


console.log(ips.match(RegExp2))

//Exercício errado
