console.log("hello world");

const generateComicButton = document.getElementById('generate-comic-button');

let currImg = document.getElementById('comic-img');
let currTitle = document.getElementById('comic-img-title');
let currDate = document.getElementById('comic-img-date')

generateComicButton.addEventListener('click', xkcdMachine);

async function xkcdMachine() {
    let rand_num = Math.floor(Math.random() * 3000);
    console.log(rand_num);
    const url = `https://corsproxy.io/?https://xkcd.com/${rand_num.toString()}/info.0.json`;
    const response = await fetch(url); // waiting for promise to resolve
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();

    console.log(json);

    currImg.src = json.img;
    currImg.alt = json.alt;
    console.log(currImg.alt);
    currTitle.innerText = json.title;
    currDate.innerText = `Date: ${json.month}/${json.day}/${json.year}`;
    
}

xkcdMachine();