let myHeading = document.querySelector('h1');
let myImg = document.querySelector('img');

myHeading.onclick = function(){
    alert("La mejor marca del mundo");
}

myImg.onclick = function(){
    let mySrc = myImg.getAttribute('src');
    if(mySrc === "images/Logo.png") {
        myImg.setAttribute('src','images/LogoAlterado.png');
    } else {
        myImg.setAttribute('src','images/Logo.png');
    }
}