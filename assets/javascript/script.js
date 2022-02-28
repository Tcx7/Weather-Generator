var userInput = document.getElementById("userInput");
var searchBtn = document.getElementById("searchBtn");
var gifContent = document.getElementById("gif-content");

searchBtn.addEventListener("click", randomGif);

function randomGif(e) {
  gifContent.innerHTML = "";
  e.preventDefault();
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=hNBHmVSiNKgqGrNu6IFzi12Tsa7w2L0s&q=${userInput.value}&limit=8&offset=0&rating=g&lang=en`
  )
    .then((res) => res.json())
    .then((content) => {
      for (let i = 0; i < 8; i++) {
        console.log(content.data[i].images.downsized.url);
        let createImg = document.createElement("img");
        createImg.classList.add("giphyImg");
        createImg.src = content.data[i].images.downsized.url;
        console.log(createImg);
        gifContent.appendChild(createImg);
      }
    });
}
