let palavra = ''
function reverseString (word){    

    for (i = word.length - 1; i >= 0; i--){        
        palavra += word[i]
    }

    return palavra;
} 

let str = reverseString ("Larissa")

console.log (str);