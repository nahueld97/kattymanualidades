let myHeading = document.querySelector('h1');
let myImg = document.querySelector('img');
let myButton = document.querySelector('button');

myHeading.onclick = function(){
    alert("te amo");
}

myImg.onclick = function(){
    let mySrc = myImg.getAttribute('src');
    if(mySrc === "images/Logo.png") {
        myImg.setAttribute('src','images/LogoAlterado.png');
    } else {
        myImg.setAttribute('src','images/Logo.png');
    }
}

myButton.onclick = function() {
    setUserName();
  }

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;    
    }
}