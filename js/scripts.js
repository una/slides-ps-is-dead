console.log('hello, beautiful');

document.querySelector('.hue-rotate button').addEventListener('click', function() {
  var movingElem = document.querySelector('.hue-rotate .images');
  console.log('hi');
  if (movingElem.hasAttribute('data-state')) {
    movingElem.removeAttribute('data-state');
  }
  else {
    movingElem.setAttribute('data-state', 'overlap');
  }
});
