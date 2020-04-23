function factorial(num) {
    if (num < 0) {
        return -1;
    }

    if (num === 0) {
        return 1;
    }

    return num * factorial(num - 1);
}

function subfactorial(num) {
    let summation = 0;
    let negVal = 1;
    let factVal = factorial(num);

    for (let k = 0; k <= num; k++) {
        summation += negVal * (factVal / factorial(k));
        negVal *= -1;
    }

    return summation;
}

export { factorial, subfactorial };
