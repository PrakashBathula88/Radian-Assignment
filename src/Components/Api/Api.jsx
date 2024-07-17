import axios from "axios";

const MOVIES_URL = "https://dummyapi.online/api/movies";

const fetchMovies = async () => {
  try {
    const response = await axios.get(MOVIES_URL);
    return response.data;
  } catch (err) {
    console.error("Error Fetching data", err);
    return [];
  }
};

export default fetchMovies;