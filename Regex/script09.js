const {lookahead} = require('./base')

//console.log(lookahead.match(/.+[^in]active$/gim))

//Positive Lookahead 

//console.log(lookahead.match(/.+(?=[^in]active)/gim))

//Negative Lookahead

console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))