function reverse(Paragrapgh){
let currentString = '';
    let wordsarray = Paragrapgh.split(" ");
    let wordArray = [];
    for(let i = wordsarray.length-1; i>=0 ; i--){
        let currentWord = wordsarray[i].split("");
        // console.log(currentWord)
        
        for(let j = currentWord.length-1; j >=0; j--){
            let currentLetter = currentWord[j];
            wordArray.push(currentLetter);
        }
        wordArray.push(" ");
    }
    

    for(let i =0; i < wordArray.length; i++){
        let addThisLetter = wordArray[i];
        currentString+=addThisLetter;
    }
    console.log(currentString);
}

reverse("The cat in the hat is super fast")