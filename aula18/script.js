const nomes=['Claúdio','Júlio','Matheus','Ana']
const nomeLong = nomes.filter((valor,indice)=>{
    if(valor.length > 5){
        return valor
    }
})
console.log(nomeLong)