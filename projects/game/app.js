let qwerty = document.querySelector('#qwerty');
let phrase = document.querySelector('#phrase');
let missed = 5;
const hearts = document.querySelectorAll('.tries');
const resetBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay'); 
const phrases = [
                 ["Dont interrupt me while I am interrupting", "Winston Churchil"],
                 ["Humor is reason gone mad","Groucho Marx"],
                 ["A goal without a plan is just a wish", "Antoine de Saint-Exupéry"],
                 ["I am Dead but it is not so bad","Isaac Marion"],
                 ["Time is an illusion Lunchtime doubly so","Douglas Adams"],
                 ["In the end everything is a gag", "Charlie Chaplin"],
                 ["Monkeys cant talk stupid","Jeff Kinney"],
] //quotes generated from: https://quotes-generator.com/quotes-generator.php, thank you ;)


// Reset button => Start the game => hide Overlay element
resetBtn.addEventListener('click', () =>{
    overlay.style.display = 'none';
});




//generate random phrase from the phrases array
const getRandomPhrase =  (arr) => {
    let maxN = arr.length;
    let arrIndx =  Math.floor(Math.random() * maxN);
    console.log(arrIndx);
    return arr[arrIndx];
};
let phraseArr = getRandomPhrase(phrases);
let phraseNotAsArray = phraseArr[0];
let author = phraseArr[1] 
let phraseAsArray = [...phraseNotAsArray];
let phraseArrayNoSpace = phraseAsArray.filter(item => item !== " ");




const createLetter= (letter) =>{
        const li = document.createElement('li');
        const ul = phrase.firstElementChild;
             li.textContent = letter.toUpperCase();
            // li.style.color = 'black';
             ul.appendChild(li);

             if(letter == " "){
             li.classList.add('space');
            } else {li.classList.add('letter')}

};

for(let i = 0; i < phraseAsArray.length; i++){
    createLetter(phraseAsArray[i]);
}

const phraseLi = document.querySelectorAll('#phrase li');
let matchCount = 0;

qwerty.addEventListener('click', (e) =>{
    let letter = e.target.textContent;
    let letterCount = 0;
    

    if(e.target.tagName ==='BUTTON'){
    console.log(e.target.textContent);
    e.target.disabled = true;
    e.target.classList.add('chosen');
    }

    for(let i = 0; i < phraseAsArray.length; i++){
        if(letter === phraseAsArray[i].toLowerCase()){
            phraseLi[i].classList.add('show');
            matchCount ++;
            letterCount ++;
        } 

    }
    if(letterCount === 0){
        missed --;
        console.log(missed);
        hearts[missed].style.display = 'none';
    }

    setTimeout(checkWin, 500, matchCount);
    checkLost(missed);
    
    


});

function checkWin (count){

    if(phraseArrayNoSpace.length === count){
       overlay.style.display = 'flex';
       overlay.classList.remove('start');
       overlay.classList.add('win');
       overlay.querySelector('.title').innerHTML = `Congratulations,<br> You have won!!!`
       resetBtn.style.display = 'none'

       let p = document.createElement('p');
       p.innerHTML = `Quotation: <strong><cite>${phraseNotAsArray}.</cite></strong><br> by ${author}`;
       overlay.appendChild(p); 


    }

}

function checkLost (lCount){

    if(lCount === 0){
       overlay.style.display = 'flex';
       overlay.classList.remove('start');
       overlay.classList.add('lose');
       overlay.querySelector('.title').innerHTML = `Game Over!!!`
       resetBtn.style.display = 'none'

       let p = document.createElement('p');
       p.innerHTML = `Correct answer was: <strong><cite>${phraseNotAsArray}.</cite></strong><br> Quotation by ${author}`;
       overlay.appendChild(p); 


    }

}