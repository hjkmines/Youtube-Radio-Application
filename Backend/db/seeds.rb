require 'json'
require 'rest-client'
require 'byebug'
require 'dotenv/load'

news_key = ENV["API_NEWS_KEY"]
response = RestClient.get ("https://newsapi.org/v2/top-headlines?country=us&apiKey=#{news_key}")
parsed_response = JSON.parse(response)
top10 = parsed_response["articles"].take(10)

image_response = RestClient.get ("https://picsum.photos/v2/list")
parsed_response_image =JSON.parse(image_response).take(10)


User.destroy_all 
Article.destroy_all
Image.destroy_all 
# # top 10 news articles 

top10.each do |article|
  Article.create(title: article["title"], image: article["urlToImage"], url: article["url"])
end 

parsed_response_image.each do |image|
  Image.create(url: image["download_url"])
end 
