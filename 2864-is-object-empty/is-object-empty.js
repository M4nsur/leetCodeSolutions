/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj)) {
        if (obj.length) {
            return false
        } 
        return true
    }

    if (Object.entries(obj).length) {
        return false
    }

    return true
};