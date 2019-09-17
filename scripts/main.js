let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','https://miro.medium.com/max/2800/0*YarH-AY64lZP7zNU.');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'If you love the web, join Mozilla, ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'If you love the web, join Mozilla, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}