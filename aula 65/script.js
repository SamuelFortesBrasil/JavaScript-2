const texto = document.getElementById('texto')

const endpoint = "doc.txt"

fetch(endpoint)
.then(res =>res.text())
.then(res =>{
    texto.innerHTML = res;
})