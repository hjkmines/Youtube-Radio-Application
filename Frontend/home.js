const newsUrl = "http://localhost:3000/articles"
const imagesUrl = "http://localhost:3000/images"
const stocksUrl = "http://localhost:3000/stocks"
const $newsCarousel = document.querySelector(".carousel-news")
const $imagesCarousel = document.querySelector(".carousel-images")
const $headLines = document.querySelector(".headlines")
const $stockList = document.querySelector(".stock-list")

fetch(newsUrl)
  .then(response => response.json())
  .then(articles => {

    for (i=0; i < 1; i++) {
      const $div = document.createElement("div")
      $div.classList.add("carousel-item")
      $div.classList.add("active")
      $div.innerHTML = `<div id="text-links"><a id="linkers" href="${articles[i].url}">${articles[i].title}</a></div><img class="d-block w-100 articles" src="${articles[i].image}" alt="First slide" onerror="this.src='./google_news.png'"></img>`
      $newsCarousel.append($div)
    }
  
    for (i=1; i < 10; i++) {
      const $div = document.createElement("div")
      $div.classList.add("carousel-item")
      $div.innerHTML = `<div id="text-links"><a id="linkers" href="${articles[i].url}">${articles[i].title}</a></div><img class="d-block w-100 articles" src="${articles[i].image}" alt="First slide" onerror="this.src='./google_news.png'"></img>`
      $newsCarousel.append($div)
    }

    for (i=10; i < 15; i++) {
      const $li = document.createElement("li")
      $li.innerHTML = `<a id="headlines-linkers" href="${articles[i].url}"><strong>${articles[i].title}</strong></a><div class="headlines-bar"></div>`
      $headLines.append($li)
    }

    for (i=15; i < 16; i++) {
      const $li = document.createElement("li")
      $li.innerHTML = `<a id="headlines-linkers" href="${articles[i].url}"><strong>${articles[i].title}</strong></a>`
      $headLines.append($li)
    }

  })

  fetch(stocksUrl)
    .then(response => response.json())
    .then(stocks => {
      stocks.forEach(stock => {
        const $li = document.createElement("li")
        $li.classList.add("stock")
        $li.innerHTML = `${stock.ticker}: $${stock.current_price}`
        $stockList.append($li)
      })
    })

// fetch(imagesUrl)
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

 