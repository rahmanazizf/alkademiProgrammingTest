function calculateFactorial(number) {
    if (number > 0) {
        return number * calculateFactorial(number - 1);
    }
    return 1;
}

function combination(n, k) {
    return calculateFactorial(n)/(calculateFactorial(n-k)*calculateFactorial(k));
}

console.log("Banyaknya kotak yang dibutuhkan untuk mencampur resep :", combination(5, 3));