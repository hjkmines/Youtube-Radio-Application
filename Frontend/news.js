const businessURL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2a717d771d85444cb9cb8eda83414b88"
const entertainmentURL = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=2a717d771d85444cb9cb8eda83414b88"
const healthURL = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=2a717d771d85444cb9cb8eda83414b88"
const scienceURL = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=2a717d771d85444cb9cb8eda83414b88"
const sportsURL = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=2a717d771d85444cb9cb8eda83414b88"
const technologyURL = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2a717d771d85444cb9cb8eda83414b88"

const firstRow = document.querySelector('.first-row')
const secondRow = document.querySelector('.second-row')
const thirdRow = document.querySelector('.third-row')
const fourthRow = document.querySelector('.fourth-row')
const fifthRow = document.querySelector('.fifth-row')
const sixthRow = document.querySelector('.sixth-row')

  fetch(businessURL)
    .then(response => response.json())
    .then(response => { 
      for (i = 0; i < 5; i++) {
        const $div = document.createElement('div')
        $div.classList.add("card")
        $div.innerHTML = `<img class="card-img-top picture" src="${response.articles[i].urlToImage}" alt="Card image cap" onerror="this.src='./google_news.png'">
        <div class="card-body">
          <h5 class="card-title">${response.articles[i].title}</h5>
          <section class="article-button"><a href="${response.articles[i].url}" class="btn btn-primary">Go to full article</a></section>
        </div>`
        firstRow.append($div)
      }
    })
  fetch(entertainmentURL)
    .then(response => response.json())
    .then(response => { 
      for (i = 0; i < 5; i++) {
        const $div = document.createElement('div')
        $div.classList.add("card")
        $div.innerHTML = `<img class="card-img-top picture" src="${response.articles[i].urlToImage}" alt="Card image cap" onerror="this.src='./google_news.png'">
        <div class="card-body">
          <h5 class="card-title">${response.articles[i].title}</h5>
          <section class="article-button"><a href="${response.articles[i].url}" class="btn btn-primary">Go to full article</a></section>
        </div>`
        secondRow.append($div)
      }
    })
  fetch(healthURL)
    .then(response => response.json())
    .then(response => { 
      for (i = 0; i < 5; i++) {
        const $div = document.createElement('div')
        $div.classList.add("card")
        $div.innerHTML = `<img class="card-img-top picture" src="${response.articles[i].urlToImage}" alt="Card image cap" onerror="this.src='./google_news.png'">
        <div class="card-body">
          <h5 class="card-title">${response.articles[i].title}</h5>
          <section class="article-button"><a href="${response.articles[i].url}" class="btn btn-primary">Go to full article</a></section>
        </div>`
        thirdRow.append($div)
      }
    })
  fetch(scienceURL)
    .then(response => response.json())
    .then(response => { 
      for (i = 0; i < 5; i++) {
        const $div = document.createElement('div')
        $div.classList.add("card")
        $div.innerHTML = `<img class="card-img-top picture" src="${response.articles[i].urlToImage}" alt="Card image cap" onerror="this.src='./google_news.png'">
        <div class="card-body">
          <h5 class="card-title">${response.articles[i].title}</h5>
          <section class="article-button"><a href="${response.articles[i].url}" class="btn btn-primary">Go to full article</a></section>
        </div>`
        fourthRow.append($div)
      }
    })
  fetch(sportsURL)
    .then(response => response.json())
    .then(response => { 
      for (i = 0; i < 5; i++) {
        const $div = document.createElement('div')
        $div.classList.add("card")
        $div.innerHTML = `<img class="card-img-top picture" src="${response.articles[i].urlToImage}" alt="Card image cap" onerror="this.src='./google_news.png'">
        <div class="card-body">
          <h5 class="card-title">${response.articles[i].title}</h5>
          <section class="article-button"><a href="${response.articles[i].url}" class="btn btn-primary">Go to full article</a></section>
        </div>`
        fifthRow.append($div)
      }
    })
  fetch(technologyURL)
    .then(response => response.json())
    .then(response => { 
      for (i = 0; i < 5; i++) {
        const $div = document.createElement('div')
        $div.classList.add("card")
        $div.innerHTML = `<img class="card-img-top picture" src="${response.articles[i].urlToImage}" alt="Card image cap" onerror="this.src='./google_news.png'">
        <div class="card-body">
          <h5 class="card-title">${response.articles[i].title}</h5>
          <section class="article-button"><a href="${response.articles[i].url}" class="btn btn-primary">Go to full article</a></section>
        </div>`
        sixthRow.append($div)
      }
    })

