
require 'json'
require 'byebug'
require 'rest-client'

news_key = "" 
response = RestClient.get ("https://newsapi.org/v2/top-headlines?country=us&apiKey=#{news_key}")
parsed_response = JSON.parse(response)
top10 = parsed_response["articles"].take(10)

image_response = RestClient.get ("https://picsum.photos/v2/list")
parsed_response_image =JSON.parse(image_response).take(10)


User.destroy_all 
Article.destroy_all
Image.destroy_all 
# # top 10 news articles 
article1 = Article.create(title: top10[0]["title"], image: top10[0]["urlToImage"], url: top10[0]["url"])
article2 = Article.create(title: top10[1]["title"], image: top10[1]["urlToImage"], url: top10[1]["url"])
article3 = Article.create(title: top10[2]["title"], image: top10[2]["urlToImage"], url: top10[2]["url"])
article4 = Article.create(title: top10[3]["title"], image: top10[3]["urlToImage"], url: top10[3]["url"])
article5 = Article.create(title: top10[4]["title"], image: top10[4]["urlToImage"], url: top10[4]["url"])
article6 = Article.create(title: top10[5]["title"], image: top10[5]["urlToImage"], url: top10[5]["url"])
article7 = Article.create(title: top10[6]["title"], image: top10[6]["urlToImage"], url: top10[6]["url"])
article8 = Article.create(title: top10[7]["title"], image: top10[7]["urlToImage"], url: top10[7]["url"])
article9 = Article.create(title: top10[8]["title"], image: top10[8]["urlToImage"], url: top10[8]["url"])
article10 = Article.create(title: top10[9]["title"], image: top10[9]["urlToImage"], url: top10[9]["url"])

image1 = Image.create(url: parsed_response_image[0]["download_url"])
image2 = Image.create(url: parsed_response_image[1]["download_url"])
image3 = Image.create(url: parsed_response_image[2]["download_url"])
image4 = Image.create(url: parsed_response_image[3]["download_url"])
image5 = Image.create(url: parsed_response_image[4]["download_url"])
image6 = Image.create(url: parsed_response_image[5]["download_url"])
image7 = Image.create(url: parsed_response_image[6]["download_url"])
image8 = Image.create(url: parsed_response_image[7]["download_url"])
image9 = Image.create(url: parsed_response_image[8]["download_url"])
image10 = Image.create(url: parsed_response_image[9]["download_url"])


# top10.each do |article|
#   article.map do |key, value|
#     Article.create(title: article["title"], image: article["image"], url: article["url"])
#   end 
# end 

