const productsContainer = document.getElementById("products");

const loadProducts = async () => {
    try {
        const response = await fetch(
            "https://dummyjson.com/products?limit=5"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products.");
        }

        const data = await response.json();

        productsContainer.innerHTML = data.products
            .map(
                product => `
                    <article>
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                        <p>Price: ₹${product.price}</p>
                    </article>
                `
            )
            .join("");
    } catch (error) {
        productsContainer.innerHTML =
            "<p>Unable to load products.</p>";

        console.error(error);
    }
};

loadProducts();