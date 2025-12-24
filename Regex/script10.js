const Texto = `
Um texto que tem palavras acentuadas e quebras de linha.
Atenção, este é um texto para capturar todas as palavras.
Mesmo que não forem match \W.
Vamos ver se seremos bem sucedidos.
`


//Encontra todas as palavras
const Regex = /([\wÀ-ú]+)/gim

//Não números
 const nNumerosRegex = /\D/ 

 //Valida Ip
 const Ips = /(25[0-5]|2[0-4][0-9]|1\d{2}|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}[1-9]\d|\d)/g

 // Telefones

 const tel = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})\-(\d{4})$/gm

 //Validar Senhas

 const senhasValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$/g

 //Validar Emails

 //Não tem 100% de exatidão

 const validEmail = /[^\s\.]+\.?+@[^\s\.]+[^\s]\.[^\s]+\w+/gm

