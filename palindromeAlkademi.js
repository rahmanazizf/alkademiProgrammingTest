// Write your Javascript code here!
function run(str) {
    // Return value to check your result

    console.log(removeOtherChars(reversedWord(str)));
    // return;
}

function removeOtherChars (word) {
    // removing whitespace or other chars
    return word.replaceAll(/[^a-z0-9 -]/gi, '');
}

function reversedWord(word) {
    // split-reverse-join (returning a string in reverse order)
    return word.split("").reverse().join("");
}

// console.log(run("in/i"));

run("wadi'daw");