class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 0);
    }
}

module.exports = Math;