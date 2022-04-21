document.addEventListener('DOMContentLoaded', () => {
  const colorPalette = document.querySelector('#color-palette')
  const myPalette = document.querySelector('#my-palette')
  const generate = document.querySelector('#generate')

  const addColor = (event) => {
      const color = event.target.style.backgroundColor
      const newSquare = document.createElement('div')
      newSquare.classList.add('square')
      newSquare.style.backgroundColor = color
      document.querySelector('#my-palette').appendChild(newSquare)
  }  

  const makePalette = () => {
    // select the element 
    const colorPalette = document.querySelector('#color-palette')

      while (colorPalette.firstChild) {
          colorPalette.removeChild(colorPalette.firstChild);

      }

    for(let i=0; i<150; i++){
        const square = document.createElement('div')
        square.classList.add('square')
        const red = Math.floor(Math.random() * 255)
        const green = Math.floor(Math.random() * 255)
        const blue = Math.floor(Math.random() * 255)
        const color = 'rgb(' + red +',' + green +' ,' + blue + ')'
        square.style.backgroundColor = color
	square.addEventListener('click', addColor)
        colorPalette.appendChild(square)
    } 
  }

  generate.addEventListener('click', makePalette)

})
