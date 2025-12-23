const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz @; 0123456789 ÁÉÍÓÚ áéíóú"

//console.log(alfabeto.match(/[^abc456]+/gi))


//console.log(alfabeto.match(/[0-4]+/g))
//console.log(alfabeto.match(/[^A-z]+/g))


// Isso não funciona é necessário maior atenção ao projetar Regex com acentuação!!!!!! console.log(alafebeto.match(/[Á-ú]+/))

console.log(alfabeto.match(/\D+/g))
console.log(alfabeto.match(/\W+/gi))