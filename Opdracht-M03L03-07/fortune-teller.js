const tellerFortune = function (numberOfChildren, partnersName, geographicLocation, jobTitle) {
    return 'You wil be' + ' ' + jobTitle + ' ' + 'in' + ' ' + geographicLocation + ' ' + 'and married to'
        + ' ' + partnersName + ' ' + 'with' + ' ' + numberOfChildren + ' ' + 'children';
};

console.log(tellerFortune(2, 'Lara', 'Breda', 'manager'));
console.log(tellerFortune(3, 'Sarah', 'Madrid', 'CEO'));
console.log(tellerFortune(1, 'Ryan', 'Berlijn', 'Software Engineer'));

