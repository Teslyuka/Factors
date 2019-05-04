function pthFactor(n, p) {
    const factors = [1, Math.abs(n)];
    let startIndex = 0;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            startIndex++;
            factors.splice(startIndex, 0, i);

            if (n / i !== i) factors.splice(startIndex + 1, 0, n / i);
        }
    }

    return factors[p - 1] ? factors[p - 1] : 0;
}

module.exports = pthFactor;