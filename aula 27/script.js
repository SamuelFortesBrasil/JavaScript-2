const caixa = document.querySelector('#caixa')


let mapa = new Map()

mapa.set('nome','Samuel')
mapa.set('idade',17)
mapa.set('gênero','Masculino')

caixa.innerHTML = mapa.get('nome') + '<br>'+ mapa.get('idade')+ '<br>'+ mapa.get('gênero')
