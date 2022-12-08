import axios from "axios";

export const getProduct = async () => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/products//${id}`
    );
    const product = await res.data;
    
    return product;
  } catch (error) {
    console.log(error);
  }
};
