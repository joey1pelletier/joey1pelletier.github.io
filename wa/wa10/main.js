const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
let custom_name = "Bob";
let string = "stringie";
string = `${custom_name} and ${string}`;
console.log(string);
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. " + custom_name + " saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Ronald Reagan", "Chris Pratt", "The Devil Himself"];
const insertY = ["an overpriced Goodwill in Boulder", "a boba shop", "Cincinatti"];
const insertZ = ["combustilated", "told a frog to shut up", "did nothing"];
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);


    newStory = "It was 94 fahrenheit outside, so " + xItem + " went for a walk. When they got to " + yItem + ", they stared in excitement for a few moments i.e. years, then " + zItem + ". " + custom_name + " saw the whole thing, but was not surprised — " + xItem + " weighs 300 pounds, and it was an american who constantly eats at McDonalds";

    if(customName.value !== '') {
        custom_name = customName.value;
        newStory = "It was 94 fahrenheit outside, so " + xItem + " went for a walk. When they got to " + yItem + ", they stared in horror for a few moments, then " + zItem + ". " + custom_name + " saw the whole thing, but was not surprised — " + xItem + " weighs 300 pounds, and it was a hot day.";
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.0714286);
        const temperature =  Math.round((94 - 32) * 5/9);
        newStory = "It was " + temperature + " centigrade outside, so " + xItem + "went for a walk. When they got to " + yItem + ", they stared in horror for a few moments, then " + zItem + ". " + custom_name + " saw the whole thing, but was not surprised — " + xItem + " weighs " + weight + "stone, and it was a hot day.";

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
