const caixa = document.querySelector('#caixa')

let colecSet = new Set(['Tangerinas','Batalha Decisiva'])

colecSet.add('EarthWorm Jim 2')
colecSet.add('Mega Man X7')

// colecSet.forEach((e)=>{
//     caixa.innerHTML += e +','
//     console.log(e)
// })
for(let m of colecSet){
    caixa.innerHTML += m +'</br>'
    console.log(m)
}