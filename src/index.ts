const form = document.querySelector('#factorial-form') as HTMLFormElement
const stepsList = document.querySelector('#factorial-steps') as HTMLOListElement

form.addEventListener('submit', event => {
  event.preventDefault()
  stepsList.textContent = ''
  const nubmerInput = document.querySelector('#number') as HTMLInputElement
  const number: number = Number(nubmerInput.value)
  let factorial: number = 1
  for (let i = 1; i <= number; i++) {
    factorial *= i

    const listItem: HTMLLIElement = document.createElement('li')
    listItem.textContent = `${factorial}`
    stepsList.appendChild(listItem)
  }
})
