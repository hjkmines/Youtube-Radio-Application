const $form = document.querySelector('.create')
const $firstName = document.querySelector('#first-name')
const $lastName = document.querySelector('#last-name')
const $email = document.querySelector('#email')
const $password = document.querySelector('#password')

const body = {
  first_name: $firstName.value, 
  last_name: $lastName.value, 
  email: $email.value, 
  password: $password.value
}

$form.addEventListener('click', () => {
  event.preventDefault()
  fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(body)
  })
})
