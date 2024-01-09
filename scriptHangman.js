import hangmanWords from './hangman.js';

// map and display letter options for hangman
const letters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
]

const letterOptions=()=>{
    const letterOptionsDiv = $(".letter-options");
    letters.forEach(letter => {
        letterOptionsDiv.append(`<div class="letter">${letter}</div>`);
    })
};
letterOptions();

//randomly pick a word/hint object from the hangmanWords array
const getHiddenWord = ()=>{
    const randomIndex = Math.floor(Math.random()* hangmanWords.length);
    return hangmanWords[randomIndex];
}

//display the hidden word disquised in the hidden-word div along with its hint
const displayHiddenWord = ()=>{
    const hiddenWordDiv = $(".hidden-word");
    const randomWordObj = getHiddenWord();
    const word = randomWordObj.word;
    const hint = randomWordObj.hint;
    const hiddenWordHtml = word.replace(/[a-zA-Z]/g, ' _');
    hiddenWordDiv.text(hiddenWordHtml);
    $('.hint').text(`Hint: ${hint}`);
}
displayHiddenWord();

