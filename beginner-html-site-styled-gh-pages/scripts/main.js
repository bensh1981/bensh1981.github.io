var myHeading = document.querySelector('h2');
var myButton = document.querySelector('button');

myHeading.textContent = 'Hello world Test!';
document.querySelector('h3').textContent = multiply(5,6);

myButton.onclick = function() {
  setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


//alert('Yay, I love chocolate ice cream!'); 
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/eagle.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello world Test!, ' + myName;
}

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}