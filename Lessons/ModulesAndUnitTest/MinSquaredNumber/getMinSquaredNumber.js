const numbers = [-777, 3, -2, 6, 45, -20];

export default arr => {
    if(!Array.isArray(arr) || !arr.length){
        return null;
    }
    let result = arr.map(num => Math.abs(Math.pow(num, 2)));
    return Math.min(...result);
}


