const regex = /^[^\s\W][\w.@!$-_]+\@[\w]+\.[\w]+\.?[\w]+$/gmi
//const objRegex = new RegExp(/^[^\s\W][\w.@!$-_]+\@[\w]+\.[\w]+\.?[\w]+$/gmi)


const Email = ['samueldbz441@gmail.com','marcos.dbz441@gmail.com','exemple123@exemple.com.br','.doc@document.cd',' aspwoq@exemple.com']

Email.map((e)=>{
   let testeDeValidacao = e.match(regex)
   let invalidos = []
    if(testeDeValidacao === null){
        invalidos.push(e)
    }
    if(testeDeValidacao){
        console.log(`Email válido: ${e}`)
    }else{
        console.log(`Emails Inválidos:${invalidos}`)
    }
})

//console.log(Email.match(regex))
