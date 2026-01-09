navigator.geolocation.getCurrentPosition(
    (pos)=>{
        console.log(pos)
        const {latitude,longitude} = pos.coords;
        console.log(latitude +" "+ longitude)
    },
    (erro) =>{
        console.log("erro ao obter localização")
    }
)