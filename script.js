
const cont = document.querySelector('.container')

function fecthApiData(){
      const url='https://fakestoreapi.com/products/1'

      fetch(url)
          .then(response => {
               return response.json();
          }).then(data => {
            console.log(data);
            createCards(data)
          })
}

/*fecthApiData();

function createCards(data){
     
     
     data.forEach((cloth)=>{
        const div = document.createElement('div')


        div.classList.add('card')


        const img = document.createElement('img')
        img.src=cloth.image

        const heading = document.createElement('h1')
        heading.innerHTML =cloth.title

        div.appendChild(img)
        div.appendChild(heading)
        cont.appendChild(div)

     })
}*/