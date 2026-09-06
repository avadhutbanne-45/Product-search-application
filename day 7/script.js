const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const status = document.getElementById("status");

const searchProducts = async (query) => {
    try {
        status.textContent = "Loading...";
        results.innerHTML = "";

        const response = await fetch(
            `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error("API request failed.");
        }

        const data = await response.json();

        const products = data.products.filter(product =>
            product.title
                .toLowerCase()
                .includes(query.toLowerCase())
        );

        if (products.length === 0) {
            status.textContent = "No products found.";
            return;
        }

        status.textContent =
            `${products.length} product(s) found.`;

        results.innerHTML = products
            .map(
                product => `
                    <article class="card">
                        <img
                            src="${product.thumbnail}"
                            alt="${product.title}"
                        >

                        <h2>${product.title}</h2>

                        <p>
                            ${product.description}
                        </p>

                        <p class="price">
                            ₹${product.price}
                        </p>
                    </article>
                `
            )
            .join("");

    } catch (error) {
        status.textContent =
            "Something went wrong. Please try again.";

        results.innerHTML = "";

        console.error(error);
    }
};

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (!query) {
        status.textContent =
            "Please enter a product name.";

        results.innerHTML = "";
        return;
    }

    searchProducts(query);
});