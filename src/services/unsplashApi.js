import axios from "axios";

const ACCESS_KEY = "C_UZFzkNqM8GoysKoVKmbo52MUlIQjDR_jA-Gbq8svU";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query,
        page,
        per_page: 12,
        client_id: ACCESS_KEY,
      },
    });
    return response.data.results;
  } catch (err) {
    throw new Error(err.message);
  }
};
