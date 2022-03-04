const pegarCpf = () => {
  const cpf = document.getElementById('cpf').value
  const endCpf = cpf.slice(-2)
  const startCpf = cpf.slice(0, 11)
  const firstObj = {
    endCpf,
    startCpf
  }
  return firstObj
}

const arr = () => {
  const startArr = pegarCpf().startCpf.split('')
  const endArr = pegarCpf().endCpf.split('')
  const newArr = startArr.filter(item => item !== '.')
  const secondObj = {
    endArr,
    newArr
  }
  return secondObj
}

const validation = () => {
  let num = 11
  let total = 0
  for (let i = 0; i < arr().newArr.length; i++) {
    num -= 1
    const sumIndex = arr().newArr[i] * num
    total += sumIndex
  }
  let dividerTotal = total % 11
  let divider = 11 - dividerTotal
  let numberArr = parseInt(arr().endArr[0])

  if (divider === numberArr) {
    return true
  } else if (divider >= 10) {
    divider = 0
    return divider === numberArr ? true : false
  }
  return false
}

const secondValidation = () => {
  let secondNum = 12
  let secondTotal = 0
  const total = pegarCpf().startCpf + pegarCpf().endCpf
  const totalArr = total.split('')
  const arr = totalArr.filter(item => item !== '.')

  for (let i = 0; i < arr.length - 1; i++) {
    secondNum -= 1
    const sumIndex = arr[i] * secondNum
    secondTotal += sumIndex
  }
  const dividerT = secondTotal % 11
  let secondDivider = 11 - dividerT
  const pickUpLastNumber = arr.slice(-1)
  const lastArr = parseInt(pickUpLastNumber)

  if (secondDivider === lastArr) {
    return true
  } else if (secondDivider >= 10) {
    secondDivider = 0
    return secondDivider === lastArr ? true : false
  }
  return false
}

let container = document.querySelector('.container')
let confirmado = document.querySelector('.confirmado')
let errado = document.querySelector('.errado')

let button = document.querySelector('#number-cpf')
button.addEventListener('click', function confirmation() {
  if (validation() === true && secondValidation() === true) {
    container.classList.remove('flex')
    container.classList.add('none')
    confirmado.classList.remove('none')
    confirmado.classList.add('block')
  } else {
    container.classList.remove('flex')
    container.classList.add('none')
    errado.classList.remove('none')
    errado.classList.add('block')
  }
})

const backButton = () => {
  if (validation() === true && secondValidation() === true) {
    container.classList.add('flex')
    container.classList.remove('none')
    confirmado.classList.add('none')
    confirmado.classList.remove('block')
    cpf.value = ''
  } else {
    container.classList.add('flex')
    container.classList.remove('none')
    errado.classList.add('none')
    errado.classList.remove('block')
    cpf.value = ''
  }
}
