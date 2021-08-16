var button = document.querySelector('#mybutton');
button.addEventListener("click", alert('Button clicked.'));

const body = document.querySelector('body class');
var button2 = document.querySelector('#mybutton2');
button2.addEventListener("click", body.classList.add('red-background'));