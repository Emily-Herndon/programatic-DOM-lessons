const generatePyramid = num => {
  const pyramid = document.querySelector('#pyramid')

  for (let i = 0; i < num; i++) {
    const row = document.createElement('div')
    row.classList.add('row')
    for (let j = 0; j < i; j++) {
      const triangle = document.createElement('div')
      triangle.classList.add('triangle')
      row.appendChild(triangle)
    }
    pyramid.appendChild(row)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#grid')

  // for (let i = 0; i < 64; i++) {
  //   const square = document.createElement('div')
  //   square.classList.add('square')
  //    console.log(i % 8)
  //   const color = i % 2 == 1 ? 'red' : 'black'
  //   square.classList.add(color)
  //   container.appendChild(square)
  // }
  

  // for (let i = 0; i < 8; i++) {
  //   for (let j = 0; j < 8; j++) {
  //     const square = document.createElement('div')
  //     square.classList.add('square')
  //     const mod = j % 2 == 0 ? 1 : 0
  //     const color = i % 2 == mod ? 'red' : 'black'

  //     square.classList.add(color)
  //     container.appendChild(square)
  //   }
  // }

  generatePyramid(16)

})