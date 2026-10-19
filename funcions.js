


document.getElementById("novaBroma").addEventListener("click",function(){


    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("broma").innerHTML=data.value
  });

  
})

document.getElementById("nouUsuari").addEventListener("click", function(){


    fetch('https://randomuser.me/api')
  .then(resp => resp.json())
  .then(datos => {console.log(datos)
    document.getElementById("nouUsuari").innerHTML=datos.results[0].name.firts
    document.getElementById("CognomUsuari").innerHTML=datos.results[0].name.last
    document.getElementById("imatge").src=datos.results[0].picture.thumbnail
  });

  
})




