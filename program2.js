/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let currentVal = romanMap[s[i]];
        if (i < s.length - 1 && currentVal < romanMap[s[i + 1]]) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
}

module.exports ={ romanToInt };
