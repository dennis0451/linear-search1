const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    x = valueToFind
    y = arrayToSearchThrough
    z = []
    for(let i = 0; i < y.length; i++) {
        if(x === y[i]){
            z.push(i);
        }
    }
    if(z.length === 1){
        return z[0]
    }else if(z.length === 0){
        return undefined
    }else{
    return z
    }
};

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    x = valueToFind
    y = arrayToSearchThrough
    z = []
    for(let i = 0; i < y.length; i++) {
        if(x === y[i]){
            z.push(i);
        }
    }
    if(z.length === 0){
        return undefined
    }else{
    return z
    }
};
