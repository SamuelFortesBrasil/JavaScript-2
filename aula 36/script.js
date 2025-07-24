class Pagamento{
    pagar(){
        return`Selecione o tipo de Pagamento:`
    }
}

class Pix extends Pagamento{
    pagar(){
        return(`Pagamento realizado com Pix`)  
    }
}

class CartaoDebito extends Pagamento{
       pagar(){
        return (`Pagamento realizado com Cartão de Débito`)
        }
}

class CartaoCredito extends Pagamento{
        pagar(){
        return(`Pagamento realizado com Cartão de Crédito`)
        }
}

const impressoes = [new Pagamento(),new Pix(),new CartaoCredito(),new CartaoDebito()]

impressoes.map((e)=>{
    let p = e.pagar()
    console.log(p)
    console.log('-----------------------------')
})