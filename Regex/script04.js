const Texto = "<p>Hello World!</p> <p>Olá, Mundo!</p>"

console.log(Texto.match(/<.+>.+<\/.+>/g))
console.log(Texto.match(/<.+?>.+?<\/.+?>/g))