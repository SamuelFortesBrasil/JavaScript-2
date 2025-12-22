const Texto = `No dia 15/03/2024, o usuário 'admin_01' acessou o sistema através do IP 192.168.0.10. Ele tentou realizar uma compra no valor de R$ 1.500,50, mas o cartão final 4422 foi recusado. Entrar em contato com suporte@empresa.com.br ou suporte.tecnico@provedor.net para resolver pendências. O protocolo de atendimento é #ABC-12345.  
Lista de itens no carrinho:

Notebook Gamer (SKU: 99823) - Qtd: 1

Mouse Sem Fio (SKU: 11204) - Qtd: 2

Cabo HDMI (SKU: 5541) - Qtd: 5


Samuel 
Saaaaaamuuuuuuelllll
Telefones registrados: (11) 98888-7777 e 21-33445566. O CEP de entrega é 01310-200. Finalize o processo em https://loja-exemplo.com/checkout?id=992.`


const arquivos = [
    'MeuImg.png',
    'FakeFile.jpeg',
    'Gato.jpg',
    'File.jpeg',
    'Favicon.ico',
    'Aquivo.txt'
]

// const Reg = /Sa+mu+el+/gi

//console.log(Texto.match(Reg))

const Reg = /\.(jpe?g|png)/g

for (const arquivo of arquivos){
    console.log(arquivo.match(Reg))
}