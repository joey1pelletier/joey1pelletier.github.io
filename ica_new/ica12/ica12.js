const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const newBtn2 = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);
let answer = "";

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() { // async to make await work
  //  console.log('Test');
    try { // code to try to run our API
        const response = await fetch(endpoint); // wait for the fetch of endpoint
        if(!response.ok) { // if thingie dont work
            throw Error(response.statusText);
        }
        const json = await response.json(); // retrieve json from thingie for thingie api to work
        //console.log(json);
        displayQuote(json['question']);
        answer = json['answer'];
    }
    catch(err) { // runs if something goes wrong
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;
}

function displayAnswer(answer) {
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = '';
}

function testFunction() {
    console.log('bruh');
}

getQuote(); // will run getQuote when page loads