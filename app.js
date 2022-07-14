var number1 = '0'
var number2 = ''
document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('.screen').value = number1
  const main = document.querySelector('.main')
  main.addEventListener('click', clickHandler)
})

var clickHandler = (e) => {
  var eText = e.target.innerText
  var target = e.target
  console.log(eText)
  switch (eText) {
    case 'AC':
      document.querySelector('.screen').value = 5
      number1 = '0'
      break
  }
}
