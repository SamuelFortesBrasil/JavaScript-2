const user = {
    nome: "Samuel",
    email: "exemplo@exemplo.com",
    profissao: "desenvolvedor",
    nivel: "Junior"
}

const {nome,email,profissao, pais = "Brasil"} = user;

console.log(nome)
console.log(email)
console.log(profissao)
console.log(pais)
