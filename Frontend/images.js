const imagesURL = "https://picsum.photos/v2/list"
const $section = document.querySelector('section')


fetch(imagesURL)
  .then(response => response.json())
  .then(response => {
    response.forEach((image) => {
      const $img = document.createElement('img')
      $img.classList.add('picture')
      $img.src = image.download_url 
      $section.append($img)
    })
  })