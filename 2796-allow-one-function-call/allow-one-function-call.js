/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isOnce = true 

    return function(...args){
        let result 
        if (isOnce) {
            result = fn(...args)
        }
        isOnce = false
        return result
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
