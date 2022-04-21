const addH2 = () => {
  // create new h2 el
  const h2 = document.createElement('h2')
  // give the h2 some text
  h2.innerText = 'Just getting started!'
  // attach it to the body
  document.querySelector('body').append(h2)
}

const changeH2 =() => {
  document.querySelector('h2').innerText = 'Getting Warmer!'
}

const randColorRGB = () => {
    const red = Math.floor( Math.random() * 256 );
    const green = Math.floor( Math.random() * 256 );
    const blue = Math.floor( Math.random() * 256 );
    return "rgb(" + red + "," + green + "," + blue + ")";
}

const generateQuilt = (numOfSquares) => {
  
  for (let i = 0; i < numOfSquares; i++) {
    // console.log(i)
    // create the element
    const square = document.createElement('div')
    // apply a style by adding it to the list of classes
    square.classList.add('square')
    // append div to document
    square.style.backgroundColor = randColorRGB()
    square.innerText = i
    square.setAttribute('id', i)
    document.querySelector('body').appendChild(square)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addH2()
  changeH2()

  // add a bunch of divs to the DOM
  const divAmount = 1000
  generateQuilt(divAmount)
})
