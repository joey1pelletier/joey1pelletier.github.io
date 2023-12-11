let num_array = [];

let btn1 = document.getElementById('num-1');

let btn2 = document.getElementById('num-2');

let btn3 = document.getElementById('num-3');

let btn4 = document.getElementById('num-4');

let btn5 = document.getElementById('num-5');

let btn6 = document.getElementById('num-6');

let btn7 = document.getElementById('num-7');

let btn8 = document.getElementById('num-8');

let btn9 = document.getElementById('num-9');

let btn10 = document.getElementById('num-10');

let enter_button = document.getElementById('enter-button');

function changeNum() {
    let rand_num = Math.floor(Math.random() * 10);
    this.innerHTML = rand_num;
}

function alertUser() {
    alert("Thank you!");
}

btn1.addEventListener('click', changeNum);
btn2.addEventListener('click', changeNum);
btn3.addEventListener('click', changeNum);
btn4.addEventListener('click', changeNum);
btn5.addEventListener('click', changeNum);
btn6.addEventListener('click', changeNum);
btn7.addEventListener('click', changeNum);
btn8.addEventListener('click', changeNum);
btn9.addEventListener('click', changeNum);
btn10.addEventListener('click', changeNum);
enter_button.addEventListener('click', alertUser);







