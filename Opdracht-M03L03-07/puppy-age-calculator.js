const calculateDogAge = function (puppysAge) {
    let dogAge = 7 * puppysAge;
    return 'Your doggie is' + ' ' + dogAge + ' ' + 'years old in dog years'
};

console.log(calculateDogAge(2));
console.log(calculateDogAge(6));
console.log(calculateDogAge(10));