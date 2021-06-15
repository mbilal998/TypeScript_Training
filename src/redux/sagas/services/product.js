import axios from "axios";

const url = "https://fakestoreapi.com/";

export const getProducts = async () => {

    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
        console.log("Error", err);
    })
    return response.data;
};

export const selectedProduct = async (id) => {
    const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
            console.log("Err: ", err);
        });
    return response.data;
};

