const age = 20;

if (age >= 18 && age <= 25) {
    console.log("You get a 50% discount!");
} else {
    console.log("You get a 10% discount!");
}

const name = "mark";
if (name === "Sarah" || name === "Bram") {
    console.log("You get a free beer!")
} else {
    console.log("You get a 30% discount!")
}

const totalAmount = 103;
if (totalAmount > 25) {
    console.log("you get free vegetarian bitterballen");
} if (totalAmount > 50) {
    console.log("you get free portion of nachos");
} if (totalAmount > 100) {
    console.log("you get a free bottle of champagne");
} else {
    console.log("you get nothing free");
}