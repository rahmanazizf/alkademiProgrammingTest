function generateArray(arrayLength) {
    let numbersArray = [2, 2];

    if (arrayLength > 3) {
        
        for (let i=2; i < arrayLength; i++) {
            
            if (i % 2 == 0) {
                numbersArray.push(2 * numbersArray[i-2]);
                continue;
            }
                
            numbersArray.push(numbersArray[i-2] + 2);
        }

        return numbersArray;
    }
    else {
        numbersArray.length = arrayLength;
    }

    
    return numbersArray;
}

// console.log(generateArray(13));