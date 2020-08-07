const calculateSupply = function (age, amountPerDay) {
    let maxAge = 100;
    let amountCosumedForRestOfTheLife = (amountPerDay * 365) * (maxAge - age);
    return 'You will need' + ' ' + amountCosumedForRestOfTheLife + ' ' + 'to last you until the ripe old age of' + ' ' + maxAge
};

console.log(calculateSupply(15, 36));
console.log(calculateSupply(25, 7));
console.log(calculateSupply(35, 80));