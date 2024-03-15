//program to find shortest length of a word in a string

function shortestWordLength(inputString){
    let words = inputString.split(" ");
    let shortestLength = Infinity;

    for(let word of words){
        if(word.length < shortestLength){
            shortestLength = word.length;
        }
    }
    return shortestLength;
}
console.log(shortestWordLength("Past experiences haunted by fear often cause a person to be anxious about everything round."))