const createClassPixels = document.querySelector('.grid');
function createClassePixel() {
  for (let i = 0; i < 25; i += 1) {
    const createNewDiv = document.createElement('div');
    createNewDiv.className = 'pixel';
    createNewDiv.style.backgroundColor = 'white';
    createClassPixels.appendChild(createNewDiv);
  }
}
createClassePixel();

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

const colorPixelClick = document.querySelector('.grid');
colorPixelClick.addEventListener('click', function(event) {
    const selectedBackgroundColor = document.querySelector('.selected');
    const captureColor = window.getComputedStyle(selectedBackgroundColor, null).getPropertyValue('background-color');
    event.target.style.backgroundColor = captureColor;
}) 