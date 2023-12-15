let num_array = [];
let num_array_confirm = [];
let text_prompt = document.getElementById('prompt');
let btn1 = document.getElementById('num-1');
let btn1_val = btn1.dataset.value;
btn1_val = parseInt(btn1_val);

let btn2 = document.getElementById('num-2');
let btn2_val = btn2.dataset.value;
btn2_val = parseInt(btn2_val);

let btn3 = document.getElementById('num-3');
let btn3_val = btn3.dataset.value;
btn3_val = parseInt(btn3_val);

let btn4 = document.getElementById('num-4');
let btn4_val = btn4.dataset.value;
btn4_val = parseInt(btn4_val);

let btn5 = document.getElementById('num-5');
let btn5_val = btn5.dataset.value;
btn5_val = parseInt(btn5_val);

let btn6 = document.getElementById('num-6');
let btn6_val = btn6.dataset.value;
btn6_val = parseInt(btn6_val);

let btn7 = document.getElementById('num-7');
let btn7_val = btn7.dataset.value;
btn7_val = parseInt(btn7_val);

let btn8 = document.getElementById('num-8');
let btn8_val = btn8.dataset.value;
btn8_val = parseInt(btn8_val);

let btn9 = document.getElementById('num-9');
let btn9_val = btn9.dataset.value;
btn9_val = parseInt(btn9_val);

let btn10 = document.getElementById('num-10');
let btn10_val = btn10.dataset.value;
btn10_val = parseInt(btn10_val);

let enter_button = document.getElementById('enter-button');


function changeNum() {
    let rand_num = Math.floor(Math.random() * 10);
    this.innerHTML = rand_num;
}


function openPopup(button_id) {
    document.querySelector('.cover').style.display = 'block';
    let button = document.getElementById(button_id);
    let button_val = button.dataset.value;
    let popup = button.nextElementSibling.nextElementSibling;
    let filled_circle = button.nextElementSibling;
    let counter = 0;
    let progress_elem = popup.querySelector(".progress");
    popup.style.visibility = 'visible';
    popup.style.transform = 'translate(-50%, -50%) scale(1)';
    let interval_id = window.setInterval(
        function () {
            counter = counter + 1;
            progress_elem.innerHTML = counter + "%";
            if (counter >= 100) {
                clearInterval(interval_id);
            }
        }, 50);

    setTimeout(() => {
        popup.style.visibility = 'hidden';
        popup.style.transform = 'translate(-50%, -50%) scale(0)';
        filled_circle.style.backgroundColor = "black";
        clearInterval(interval_id);
        num_array[parseInt(button_val)] = parseInt(button.innerHTML);
        console.log(num_array);
        console.log(num_array.length);
        document.querySelector('.cover').style.display = 'none';
    }, 5000); 
    
}

function confirmPassword(button_id) {
    text_prompt.innerHTML = "Please confirm your number to complete your entry.";
    enter_button.removeEventListener('click', checkCorrect);
    let button = document.getElementById(button_id);
    let buttons = document.querySelectorAll('.checkmark');
    buttons.forEach((button) => {
        button.style.backgroundColor = "#FBC16A";
    });
    btn1.innerHTML = "0";
    btn2.innerHTML = "0";
    btn3.innerHTML = "0";
    btn4.innerHTML = "0";
    btn5.innerHTML = "0";
    btn6.innerHTML = "0";
    btn7.innerHTML = "0";
    btn8.innerHTML = "0";
    btn9.innerHTML = "0";
    btn10.innerHTML = "0";

    for(let i = 0; i < num_array.length; i++) {
        num_array_confirm[i] = num_array[i];
        num_array[i] = null;
    }
    console.log(num_array);
    console.log(num_array_confirm);
    enter_button.addEventListener('click', checkConfirmCorrect);
}

function checkConfirmCorrect() {
    if(num_array.length != 10) {
        alert("Please add ALL numbers into the database!");
        return;
    }
    else {
        for(let i = 0; i < num_array.length; i++) {
            if(num_array[i] == null) {
                alert("Please add ALL numbers into the database!");
                return;
            }
        }
    }

    for(let i = 0; i < num_array.length; i++) {
        if(num_array[i] != num_array_confirm[i]) {
            alert("Password doesn't match with previous field.");
            return;
        }
    }
    alert("Thank you!");
    
}

function checkCorrect() {
    if(num_array.length != 10) {
        alert("Please add ALL numbers into the database!");
        return;
    }
    else {
        for(let i = 0; i < num_array.length; i++) {
            if(num_array[i] == null) {
                alert("Please add ALL numbers into the database!");
                return;
            }
        }
        confirmPassword();
        enter_button.removeEventListener('click', checkCorrect);
    }
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
enter_button.addEventListener('click', checkCorrect);







