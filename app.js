var number1 = 0
var number2 = 0
document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('.screen').value = number1
  const main = document.querySelector('.main')
  main.addEventListener('click', clickHandler)
})

var clickHandler = (e) => {
  var eText = e.target.innerText
  console.log(eText)
  switch (eText) {
    case 'AC':
      document.querySelector('.screen').value = 5444
      number1 = 5444
      break
    case 'del':
      number1 = number1.toString().slice(0, -1)
      if (number1 === '') {
        number1 = 0
      }
      document.querySelector('.screen').value = number1
  }
}
