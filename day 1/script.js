// Day 1 - JavaScript Fundamentals

const prices = [500, 1200, 800, 2500, 1500];

for (let price of prices) {
    if (price > 1000) {
        console.log(`₹${price} is above ₹1000`);
    }
}