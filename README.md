# RedDoor Media
> Browse all your favorite media content all in one place. 

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General info
RedDoor Media is a full stack web application delivering live news, videos, images, music, and stocks in one package. Users have access to all their favorite media content through a single page without needing to go through other third party sites. 

Welcome to RedDoor Media. 

## Intro Video
[RedDoor Media on YouTube](https://www.youtube.com/watch?v=sSWGjKcLbBQ&feature=youtu.be)

## Technologies
### Backend Development 
* Ruby - version 2.6.1
* Rails - version 6.0.3
* ActiveRecord - version 6.0
* Sinatra - version 2.0
* Sinatra-activerecord - version 2.0
* SQLite3 - version 1.4
* JSON - version 2.3
* Rest-Client - version 2.1
* Fast_jsonapi - version 1.5
* Colorize - version 0.8.1
* User Authenication with Rails JWT

### Frontend Development 
* JavaScript (ES6)
* HTML5
* CSS3
* Bootstrap - version 4.5

## Setup
To try out this project: 
1. Open an account with https://newsapi.org/
1. Clone the GitHub repository locally to your computer
1. In the command line, navigate to the root directory of the 'backend' folder/repository, and enter the following: 
  $ bundle install 
  $ touch .env 
1. Navigate to the .env folder, and paste in the following: 
  export API_KEY=YOUR_API_KEY_HERE (e.g. export API_KEY=15151515)
1. In the command of the root directory of the project folder, run: 
  $ rails db:migrate
  $ rails db:seed
  $ rails s 
1. Now save all files, on Windows: (start + alt + s), on Macs: (command + alt +s)
1. Run the following code in the command line while being in the most root folder of this project: 
1. Next, navigate to the root of the 'frontend' folder/repository, and enter the following in the terminal (ensure npm and node is installed before running lite-server): 
  $ lite-server 

## Code Examples
### Ruby/Rails
```ruby
news_key = ENV["API_NEWS_KEY"]
response = RestClient.get ("https://newsapi.org/v2/top-headlines?country=us&apiKey=#{news_key}")
parsed_response = JSON.parse(response)
top10 = parsed_response["articles"].take(10)

image_response = RestClient.get ("https://picsum.photos/v2/list")
parsed_response_image =JSON.parse(image_response).take(10)

top10.each do |article|
  Article.create(title: article["title"], image: article["urlToImage"], url: article["url"])
end 
```

### JavaScript 
```JavaScript
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
```


## Features
* Full stack web application utilizing JavaScript and Rails. 
* Browse all your favorite media content from news articles to videos. 
* Ability to authenication user with Rails JWT 
* Upload user's own media content 
* Add favorite media content to user's profile for future viewing. 
* Backend is hosted through Heroku PaaS platform
* Frontend is hosted through GitHub Pages  

## Status
Project is: finished with option to expand functionality and DRY out code.

## Inspiration
The inspiration for RedDoor Media came from using other sources of media websites such as Yahoo!, YouTube, and MarketWatch. I wanted to create a website application that delivers all types of media content in one single application without needing to traverse through multiple sites. 

## Contact
Created by [Tony Kim](https://www.linkedin.com/in/hyung-kim/) 
Feel free to contact me for any questions! 

## License
[Click to view](https://github.com/hjkmines/RedDoor-Media/blob/master/LICENSE)