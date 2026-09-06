const delayedApiCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("Data received successfully!");
            } else {
                reject(new Error("API request failed."));
            }
        }, 2000);
    });
};

const getData = async () => {
    const status = document.getElementById("status");

    try {
        status.textContent = "Loading...";

        const result = await delayedApiCall();

        console.log(result);
        status.textContent = result;
    } catch (error) {
        console.error(error);

        status.textContent = "Something went wrong.";
    }
};

getData();