const newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2a717d771d85444cb9cb8eda83414b88"
const imagesUrl = "http://localhost:3000/images"
const stocksUrl = "http://localhost:3000/stocks"
const $newsCarousel = document.querySelector(".carousel-news")
const $imagesCarousel = document.querySelector(".carousel-images")
const $headLines = document.querySelector(".headlines")
const $stockList = document.querySelector(".stock-list")

const $newsRow = document.querySelector(".news-row")
const $title = document.querySelector('title')



if ($title.textContent == "Home") {
  fetch(newsUrl)
    .then(response => response.json())
    .then(response => {
  
      for (i=0; i < 1; i++) {
        const $div = document.createElement("div")
        $div.classList.add("carousel-item")
        $div.classList.add("active")
        $div.innerHTML = `<div id="text-links"><a id="linkers" href="${response.articles[i].url}">${response.articles[i].title}</a></div><img class="d-block w-100 articles" src="${response.articles[i].urlToImage}" alt="First slide" onerror="this.src='./google_news.png'"></img>`
        $newsCarousel.append($div)
      }
    
      for (i=1; i < 10; i++) {
        const $div = document.createElement("div")
        $div.classList.add("carousel-item")
        $div.innerHTML = `<div id="text-links"><a id="linkers" href="${response.articles[i].url}">${response.articles[i].title}</a></div><img class="d-block w-100 articles" src="${response.articles[i].urlToImage}" alt="First slide" onerror="this.src='./google_news.png'"></img>`
        $newsCarousel.append($div)
      }
  
      for (i=10; i < 15; i++) {
        const $li = document.createElement("li")
        $li.innerHTML = `<a id="headlines-linkers" href="${response.articles[i].url}"><strong>${response.articles[i].title}</strong></a><div class="headlines-bar"></div>`
        $headLines.append($li)
      }
  
      for (i=15; i < 16; i++) {
        const $li = document.createElement("li")
        $li.innerHTML = `<a id="headlines-linkers" href="${response.articles[i].url}"><strong>${response.articles[i].title}</strong></a>`
        $headLines.append($li)
      }
  
      for (i=10; i < 15; i++) {
  
        const $div = document.createElement('div')
        $div.classList.add('card')
        $div.innerHTML = `<img class="card-img-top card-image" src="${response.articles[i].urlToImage}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title article-title">${response.articles[i].title}</h5>
          <section class="article-button"><a href="${response.articles[i].url}" class="btn btn-primary access">Full article</a><button class="btn btn-primary my-2 my-sm-0 starred" type="submit">⭐</button>
        </div>`
        $newsRow.append($div)
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
}
