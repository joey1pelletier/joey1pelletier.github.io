/*const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const newBtn2 = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);
let answer = "";

// const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

const quote_api = 'https://type.fit/api/quotes';

async function getQuote(quote_api) { // async to make await work
  
    const response = await fetch(quote_api);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    displayQuote(data);
}

getQuote(quote_api);

function displayQuote(question) {
    const quoteTxt = document.querySelector('#js-quote-text');
    let randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex].text; 
    quoteTxt.textContent = randomQuote;
    // questionTxt.textContent = question;
}

function displayAnswer(answer) {
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = '';
}

function testFunction() {
    console.log('bruh');
}
*/
const quote_api = 'https://catfact.ninja/fact';
const newBtn = document.querySelector('#js-new-quote').addEventListener('click', () => getQuote(quote_api));
const newBtn2 = document.querySelector('#js-tweet').addEventListener('click', addToCalendar);
let answer = "";



async function getQuote(quote_api) {
    try {
        let response = await fetch(quote_api);
        let data = await response.json();
        console.log(data);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        displayQuote(data);
    } 
    catch (error) {
        console.error('Error fetching quote:', error);
    }
}

function displayQuote(data) {
    let quoteTxt = document.querySelector('#js-quote-text');
    let randomIndex = Math.floor(Math.random() * data.length);
    let randomQuote = data[randomIndex].text;
    let randomQuoteAuthor = data[randomIndex].author.slice(0, -10);
    quoteTxt.textContent = randomQuote + ' - ' + randomQuoteAuthor;
}

function testFunction() {
    console.log('bruh');
}

getQuote(quote_api);


