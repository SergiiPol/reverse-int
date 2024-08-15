module.exports = function reverse(n) {
    let reversedString = parseInt(
        n.toString().split("").reverse().join(""),
        10
    );
    return reversedString;
};
