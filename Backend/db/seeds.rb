require 'json'
require 'rest-client'
require 'byebug'
require 'dotenv/load'
User.destroy_all 
Article.destroy_all
Image.destroy_all 
Stock.destroy_all 

# API call to news-api
news_key = ENV["API_NEWS_KEY"]
response = RestClient.get ("https://newsapi.org/v2/top-headlines?country=us&apiKey=#{news_key}")
parsed_response = JSON.parse(response)
top10 = parsed_response["articles"].take(30)

top10.each do |article|
  Article.create(title: article["title"], image: article["urlToImage"], url: article["url"])
end 

# API call to stock-api 
#api data for company stock symbols 
15.times do 
stock_key = ENV["API_STOCK_KEY"]
stock_symbols = RestClient.get "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=#{stock_key}"
#parsed data for stock symbols 
parsed_stock_symbols = JSON.parse(stock_symbols)
#outputs company name like ["American Airlines", "Google", "etc"]
description = parsed_stock_symbols.map do |stock|
  stock["description"]
end.compact 
#outputs company symbol like ["AAL", "GOOGL", "etc"]
symbols = parsed_stock_symbols.map do |stock|
  stock["symbol"]
end.compact 
#reorganizes array with company and its symbol like [["American Airlines", "AAL"], ["Google", "GOOGL"]]
stocks_with_symbols = description.zip(symbols)
#selects random stock from the variable above 
random_stock = stocks_with_symbols.sample 
#fetches realtime quote of target company 
quote = RestClient.get "https://finnhub.io/api/v1/quote?symbol=#{random_stock[1]}&token=#{stock_key}"
parsed_quotes = JSON.parse(quote)
stock_and_price = random_stock.push(parsed_quotes["c"].to_f, parsed_quotes["l"].to_f, parsed_quotes["h"].to_f)

Stock.create(name: stock_and_price[0], ticker: stock_and_price[1], current_price: stock_and_price[2], low: stock_and_price[3], high: stock_and_price[4])

end 


image_response = RestClient.get ("https://picsum.photos/v2/list")
parsed_response_image =JSON.parse(image_response).take(10)


parsed_response_image.each do |image|
  Image.create(url: image["download_url"])
end 
