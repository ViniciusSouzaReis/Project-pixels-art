const createDivBody = document.querySelector('body');
const createClassPixels = document.querySelector('.grid');
const removeClassPixels = document.querySelectorAll('.grid');
const pixelBoardFixed = document.getElementById('pixel-board');
const btnClick = document.getElementById('generate-board');
function createClasseGridStart() {
    for (let i = 0; i < 5; i += 1) {
      const createNewDiv = document.createElement('div');
      createNewDiv.className = 'grid';
      pixelBoardFixed.appendChild(createNewDiv)
    }
  }
createClasseGridStart();

function createClassePixelStart() {
    for (let index = 0; index < 5; index += 1) {
        for (let index2 = 0; index2 < 5; index2 +=1) {
            const getGrid = document.querySelectorAll('.grid');
            const createDivPixel = document.createElement('div');
            createDivPixel.className = 'pixel';
            createDivPixel.style.backgroundColor = 'white';
            getGrid[index].appendChild(createDivPixel);
        }
    }
}
createClassePixelStart();

btnClick.addEventListener('click', clearBoard);
function clearBoard() {
    pixelBoardFixed.remove();
    const createDivBoard = document.createElement('div');
    createDivBoard.id = 'pixel-board';
    createDivBody.appendChild(createDivBoard);
}

btnClick.addEventListener('click', createClasseGrid);
function createClasseGrid() {
    for (let i = 0; i < document.getElementById('board-size').value; i += 1) {
        const pixelBoard = document.getElementById('pixel-board');
        const createNewDiv = document.createElement('div');
        createNewDiv.className = 'grid';
        pixelBoard.appendChild(createNewDiv)
    }
    for (let index2 = 0; index2 < document.getElementById('board-size').value; index2 += 1) {
        for (let index = 0; index < document.getElementById('board-size').value; index += 1) {
            const getGrid = document.querySelectorAll('.grid');
            const createDivPixel = document.createElement('div');
            createDivPixel.className = 'pixel';
            createDivPixel.style.backgroundColor = 'white';
            getGrid[index].appendChild(createDivPixel);
        }
    }
}


// btnClick.addEventListener('click', createClassePixel);
// function createClassePixel() {
//     for (let index = 0; index < document.getElementById('board-size').value; index += 1) {
//         for (let index2 = 0; index2 < (document.getElementById('board-size').value - 5); index2 += 1) {
//             const getGrid = document.querySelectorAll('.grid');
//             const createDivPixel = document.createElement('div');
//             createDivPixel.className = 'pixel';
//             createDivPixel.style.backgroundColor = 'white';
//             getGrid[index].appendChild(createDivPixel);
//         }
//     }
// }

function createClassSelected() {
  const createClassSelect = document.querySelector('.color');
  createClassSelect.className += ' selected';
}
createClassSelected();

const colorPalletClick = document.getElementById('color-palette');
colorPalletClick.addEventListener('click', function(event) {
    const selected = document.querySelector('.selected');
    selected.className = 'color';
    if (event.target.className === 'color') {
        event.target.className = 'color selected';
    }
})

const colorPixelClick = document.querySelector('#pixel-board');
colorPixelClick.addEventListener('click', function(event) {
    const selectedBackgroundColor = document.querySelector('.selected');
    const captureColor = window.getComputedStyle(selectedBackgroundColor, null).getPropertyValue('background-color');
    event.target.style.backgroundColor = captureColor;
}) 

const clearButtom = document.getElementById('clear-board');
clearButtom.addEventListener('click', clearSquad);
function clearSquad() {
    const divPixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < divPixel.length; i += 1) {
        divPixel[i].style.backgroundColor = 'white';
    }
}

let boardSize = document.getElementById('board-size').value;
let boardSizeLength = document.querySelector('input');
function popAlert() {
    if (boardSize === '') {
        alert('Board inválido!');
    }
    if (boardSize > 50) {
        boardSizeLength.max = 50;
    }
    if (boardSize < 5) {
        boardSizeLength.min = 5;
    }
}
btnClick.addEventListener('click', popAlert);