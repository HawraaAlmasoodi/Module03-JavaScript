// Deel A
/*makeDutchCheeseSandwich
Get one slice of bread.
Add Cheese.
Put a slice of bread on top. */

function makeDutchCheeseSandwich() {
    console.log("Get one slice of bread");
    console.log("Add Cheese");
    console.log("Put a slice of bread on top");
}

makeDutchCheeseSandwich();

// Deel B
// function declaration
function makeSandwich(topping) {
    console.log(`There you go, a sandwich with ${topping}`);
}

// function call
makeSandwich('topping1');
makeSandwich('topping2');

// Deel C
/*function calculateDiscountedPrice(totalAmount, discount) {
    return Math.round(totalAmount - discount);
}

console.log(calculateDiscountedPrice(50, 5));

console.log(calculateDiscountedPrice(23.5, 2.3));*/

// Deel D
function calculateDiscountedPrice(totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    } else {
        return totalAmount;
    }
    //return Math.round(totalAmount - discount);
}

console.log(calculateDiscountedPrice(40, 4));
console.log(calculateDiscountedPrice(20, 3));
console.log(calculateDiscountedPrice(32.6, 3.5));
