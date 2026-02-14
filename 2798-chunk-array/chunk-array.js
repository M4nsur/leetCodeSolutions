/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const newArr = []
    let count = 0
    let forCount = Math.ceil(arr.length / size)
    for(let i = 0; i < forCount; i++) {
        const part = arr.slice(count, count + size);
        newArr.push(part);
        count += size;
    }

    return newArr
};
