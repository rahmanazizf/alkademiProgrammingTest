function expCost(...arr) {
    let from;
    let to;
    let totalCost = 0;
    const cities = arr[0]

    for (let i = 0; i < cities.length - 1 ; i++) {
        from = cities[i];
        to = cities[i+1];

        totalCost += Math.abs(from - to);
    }


    return totalCost;
}

// console.log(expCost([88, 10, 26, 83, 49, 28, 9]));

function run(n, ...h) {

    if (n <= Math.max(...h[0]) | n > Math.max(...h[0])) {
        return expCost(...h);
    }
}

const numbers = [1, 10, 9, 12, 13, 15];

console.log(run(15, numbers));

// console.log(expCost(numbers));
