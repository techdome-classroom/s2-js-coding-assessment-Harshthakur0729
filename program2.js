/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        '':0,
        'III': 3,
        'LVIII': 58,
        'MCMXCIV': 1994,
        'X': 10,
        'IV': 4,
        'IX': 9,
        'MMMCMXCIX': 3999
    };
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanValues[s[i]];
        const nextValue = romanValues[s[i + 1]];
        
        if (nextValue > currentValue) {
            result += nextValue - currentValue;
            i++;
        } else {
            result += currentValue;
        }
    }
    
    return result;
};


module.exports={romanToInt}
