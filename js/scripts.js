document.querySelector('.edit--darken button').addEventListener('click', function() {
  var movingElem = document.querySelector('.edit--darken .images');
  console.log('hi');
  if (movingElem.hasAttribute('data-state')) {
    movingElem.removeAttribute('data-state');
  }
  else {
    movingElem.setAttribute('data-state', 'overlap');
  }
});

document.querySelector('.edit--lighten button').addEventListener('click', function() {
  var movingElem = document.querySelector('.edit--lighten .images');
  console.log('hi');
  if (movingElem.hasAttribute('data-state')) {
    movingElem.removeAttribute('data-state');
  }
  else {
    movingElem.setAttribute('data-state', 'overlap');
  }
});

document.querySelector('.edit--contrast button').addEventListener('click', function() {
  var movingElem = document.querySelector('.edit--contrast .images');
  console.log('hi');
  if (movingElem.hasAttribute('data-state')) {
    movingElem.removeAttribute('data-state');
  }
  else {
    movingElem.setAttribute('data-state', 'overlap');
  }
});

document.querySelector('.edit--composite button').addEventListener('click', function() {
  var movingElem = document.querySelector('.edit--composite .images');
  console.log('hi');
  if (movingElem.hasAttribute('data-state')) {
    movingElem.removeAttribute('data-state');
  }
  else {
    movingElem.setAttribute('data-state', 'overlap');
  }
});

document.querySelector('.edit--comparative button').addEventListener('click', function() {
  var movingElem = document.querySelector('.edit--comparative .images');
  console.log('hi');
  if (movingElem.hasAttribute('data-state')) {
    movingElem.removeAttribute('data-state');
  }
  else {
    movingElem.setAttribute('data-state', 'overlap');
  }
});
