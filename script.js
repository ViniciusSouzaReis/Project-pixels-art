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


function clearBoard() {
    pixelBoardFixed.remove();
}


function createClasseGrid() {
    const createDivBoard = document.createElement('div');
    createDivBoard.id = 'pixel-board';
    createDivBody.appendChild(createDivBoard);
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
function clearSquad() {
    const divPixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < divPixel.length; i += 1) {
        divPixel[i].style.backgroundColor = 'white';
    }
}

let boardSize = document.getElementById('board-size').value;
function popAlert() {
    if (document.getElementById('board-size').value === '') {
        alert('Board inválido!');
    }
    if (document.getElementById('board-size').value > 50) {
        document.getElementById('board-size').value = 50;
    }
    if (document.getElementById('board-size').value < 5) {
        document.getElementById('board-size').value = 5;
    }
}
const secondColor = document.getElementById('color-red');
const thirdColor = document.getElementById('color-blue');
const fourthColor = document.getElementById('color-green');

function createColor() {
    let r = Math.floor(Math.random() * 256 + 1);
    let g = Math.floor(Math.random() * 256 + 1);
    let b = Math.floor(Math.random() * 256 + 1);
    let rgb = `rgb(${r},${g},${b})`;
    return rgb;
}
secondColor.style.backgroundColor = createColor();
thirdColor.style.backgroundColor = createColor();
fourthColor.style.backgroundColor = createColor();

btnClick.addEventListener('click', popAlert);
btnClick.addEventListener('click', clearBoard);
btnClick.addEventListener('click', createClasseGrid);
clearButtom.addEventListener('click', clearSquad);