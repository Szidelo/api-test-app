import axios from "axios";

const API_KEY = "9861a617380e47c8a32e8cdb0484a962";

const fetchNewsApi = async (keyWord: string) => {
	const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyWord}&apiKey=${API_KEY}`)
    

    return response.data.articles
};

export {
    fetchNewsApi
}