//Memoize function which stores the calculated values in cache.
const memoize = (func) => {
    const cache = new Map();
    return function (...args){
        const key = args.toString();
        if (cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, func(...args));
        console.log("printing cache", cache);
        return cache.get(key);
    };
}
// Reducer function
const mul = (a,b) => {
    console.log("reducer function", a*b);
    return a*b;
}

// Function to display start and end time and passing memoize func as callback
const time = (callbackFunc) =>{
    console.time();
    callbackFunc();
    console.timeEnd();
}

// Assigning memoize funtion
const memoiseMul = memoize(mul);

// calling Time func and passing a callback func as parameter
time(() => memoiseMul(2,2))
time(() => memoiseMul(2,4))
time(() => memoiseMul(2,2))
time(() => memoiseMul(3,5))
time(() => memoiseMul(2,4))