const form = document.querySelector('#alcohol-form') as HTMLFormElement
const messageDiv = document.querySelector('#message') as HTMLOListElement

form.addEventListener('submit', event => {
  event.preventDefault()
  messageDiv.textContent = ''
  const nameInput = document.querySelector('#name') as HTMLInputElement
  const ageInput = document.querySelector('#age') as HTMLInputElement
  const name: string = nameInput.value
  const age: number = Number(ageInput.value)
  if (age >= 18) {
    messageDiv.textContent = `${name}, Вам дозволено купувати алкоголь.`
  } else {
    messageDiv.textContent = `${name}, Ви не досягли відповідного віку, щоб купити алкоголь.`
  }
})
