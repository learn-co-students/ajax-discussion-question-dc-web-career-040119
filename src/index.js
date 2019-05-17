
const addInfo = info => {
  const picture = document.getElementById('profile_picture')
  const name = document.getElementById('fullname')
  const email = document.getElementById('email')
  const street = document.getElementById('street')
  const city = document.getElementById('city')
  const state = document.getElementById('state')
  const postcode = document.getElementById('postcode')
  const phone = document.getElementById('phone')
  const cell = document.getElementById('cell')
  const dob = document.getElementById('date_of_birth')

  picture.src = info.picture.medium
  name.innerText = `${info.name.first} ${info.name.last}`
  email.innerText = info.email
  street.innerText = info.location.street
  city.innerText = info.location.city
  state.innerText = info.location.state
  postcode.innerText = info.location.postcode
  phone.innerText = info.phone
  cell.innerText = info.cell
  const date = new Date(info.dob.date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  dob.innerText = `${month} ${day}, ${year}`
}


document.addEventListener('DOMContentLoaded', () => {
  const fetchData = () => {
    const data = fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => addInfo(json.results[0]))
  }
  fetchData()
  const button = document.getElementById('add-button')
  button.addEventListener('click', () => {
    fetchData()
  })
})
