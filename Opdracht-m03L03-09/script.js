let colors = ['yellow', 'blue', 'red', 'orange']
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    colors[i++];
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

colors.forEach(function (colorItem) { console.log(colorItem); })

// while loop nam 5 regels, for loop nam 3 regels
// forEach nam 1 regel
// array methods is makklijker 

let person = {
    name: 'Lara',
    age: 25,
    job: 'Manager',
    adres: 'Breda',
    style: 'simple'

};

const entries = Object.entries(person)
console.log(entries)

for (const [key, prop] of entries) {
    console.log(`her ${key} is ${prop}`)
}

