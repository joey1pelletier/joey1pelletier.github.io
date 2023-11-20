
const quote_api = 'https://type.fit/api/quotes';
const newBtn = document.querySelector('#js-new-quote').addEventListener('click', () => getQuote(quote_api));
//const newBtn2 = document.querySelector('#js-tweet').addEventListener('click', addToCalendar);
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

getQuote(quote_api);


