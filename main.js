const API_KEY = "UXpw14VAYoOxEXbnDy4EFTaKqC8jqy3U";
const button = document.getElementById('aleatorio');
let divImg = document.getElementById('img');
let frase = document.getElementById('frase');

const buscarFrase = ()=> {
    fetch(`https://breaking-bad-quotes-for-vercel.vercel.app/api/quotes`)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            frase.innerHTML = `${json.data[0].author}: "${json.data[0].quote}"`;
            return json.data[0].author;
        }).then (function(autor){
            mostrarFoto(autor);
        })
        .catch(function(err){
            console.log('Algo salio mal', err);
        });
};

const mostrarFoto = (autor)=> {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${autor}&limit=1&offset=0&rating=g&lang=en`)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        divImg.innerHTML = `<li><a href="${data.data[0].bitly_gif_url}"><img src="${data.data[0].images.downsized.url}" /></a></li>`;
    })
    .catch(function(error) {
        console.log('Algo salio mal', error);
    })
};

button.addEventListener('click', buscarFrase);