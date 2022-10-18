function countOccurrences(array, searchElement) {
    let counter = 0;
    for (let element of array) {
        if (element === searchElement) counter++;
    }
    return counter;
}


function addedByOne(...numbers) {
    const addedByOne = [];
    for (let number of numbers[0]) {
        addedByOne.push(number+1);
    }
    return addedByOne;
}


function multipliedByTwo(...numbers) {
    const mult = []
    for (let number of numbers[0]) {
        mult.push(number*2);
    }

    return mult;
}

const numbers = [5, 7, 6, 8, 7, 9, 8, 10, 9, 11];


function run(arrayOfNums) {
    const mult = multipliedByTwo(arrayOfNums);
    const add = addedByOne(arrayOfNums);

    let counter = 0;
    for (let number of add) {
        if (mult.includes(number)) {
            if (countOccurrences(mult, number) > 1) {
                counter += countOccurrences(mult, number);
                continue;
            }

            counter++;
        }
    }

    return counter;
    
}

console.log(run(numbers));