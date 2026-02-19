/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newStr = ''
    let len = 0
    if(word1.length >= word2.length) {
        len = word1.length
    } else {
        len = word2.length
    }
    for(let i = 0; i < len; i++) {
        if(i < word1.length) {
            newStr += word1[i]
        }
        if(i < word2.length) {
            newStr += word2[i]
        }
 
    }

    return newStr 
};