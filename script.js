let createClassPixels = document.querySelector('.grid');
function createClassePixel() {
  for (let i = 0; i < 25; i += 1) {
    const createNewDiv = document.createElement('div');
    createNewDiv.className = 'pixel';
    createNewDiv.style.backgroundColor = 'white';
    createClassPixels.appendChild(createNewDiv);
  }
}
createClassePixel();
