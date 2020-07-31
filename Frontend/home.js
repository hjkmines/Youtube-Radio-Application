const news_url = "http://localhost:3000/articles"
const images_url = "http://localhost:3000/images"
const $newsCarousel = document.querySelector(".carousel-news")
const $imagesCarousel = document.querySelector(".carousel-images")

fetch(news_url)
  .then(response => response.json())
  .then(articles => {

    for (i=0; i < 1; i++) {
      const $div = document.createElement("div")
      $div.classList.add("carousel-item")
      $div.classList.add("active")
      $div.innerHTML = `<div id="text-links"><a id="linkers" href="${articles[i].url}">${articles[i].title}</a></div><img class="d-block w-100 articles" src="${articles[i].image}" alt="First slide"></img>`
      $newsCarousel.append($div)
    }
  
    for (i=1; i < 10; i++) {
      const $div = document.createElement("div")
      $div.classList.add("carousel-item")
      $div.innerHTML = `<div id="text-links"><a id="linkers" href="${articles[i].url}">${articles[i].title}</a></div><img class="d-block w-100 articles" src="${articles[i].image}" alt="First slide"></img>`
      $newsCarousel.append($div)
    }

  })

// fetch(images_url)
//   .then(response => response.json())
//   .then(images => {

  
//     for (i=0; i < 1; i++) {
//       const $div = document.createElement("div")
//       $div.classList.add("carousel-item")
//       $div.classList.add("active")
//       $div.innerHTML = `<img class="d-block w-100 images" src="${images[i].url}" alt="First slide"></img>`
//       $imagesCarousel.append($div)
//     }
  
//     for (i=1; i < 10; i++) {
//       const $div = document.createElement("div")
//       $div.classList.add("carousel-item")
//       $div.innerHTML = `<img class="d-block w-100 images" src="${images[i].url}" alt="First slide"></img>`
//       $imagesCarousel.append($div)
//     }

//   })

 