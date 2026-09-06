// Day 2 - Functions & Data Structures

const products = [
    {
        name: "Laptop",
        price: 55000,
        category: "Electronics"
    },
    {
        name: "Headphones",
        price: 1500,
        category: "Electronics"
    },
    {
        name: "Shoes",
        price: 2500,
        category: "Fashion"
    },
    {
        name: "Watch",
        price: 3000,
        category: "Accessories"
    },
    {
        name: "Bag",
        price: 1200,
        category: "Fashion"
    }
];

// Arrow function
const calculateTotal = (products) => {
    return products.reduce((total, product) => {
        return total + product.price;
    }, 0);
};

console.log("Total Price:", calculateTotal(products));

// Destructuring
const { name, price } = products[0];

console.log("Product Name:", name);
console.log("Product Price:", price);